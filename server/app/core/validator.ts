
/**
 * aemin Validator v2
 * 作者：berlin
 */

const validator = require("validator");
const {
  ParameterException
} = require("./http-exception");

const {
  get,
  last,
  set,
  cloneDeep
} = require("lodash");

const {
  findMembers
} = require("./util");


class Validator {

  data: {};
  parsed: {
    default: any
  };
  alias: {};

  constructor () {
    this.data = {};
    this.parsed = {
      default: {}
    };
  }

  _assembleAllParams(ctx) {
    return {
      body: ctx.request.body,
      query: ctx.request.query,
      path: ctx.params,
      header: ctx.request.header
    };
  }

  get(path, parsed = true) {
    if (parsed) {
      // tslint:disable-next-line:no-null-keyword
      const value = get(this.parsed, path, null);
      if (value == undefined) {
        const keys = path.split(".");
        const key = last(keys);
        return get(this.parsed.default, key);
      }
      return value;
    } else {
      return get(this.data, path);
    }
  }

  _findMembersFilter(key) {
    if (/validate([A-Z])\w+/g.test(key)) {
      return true;
    }
    if (this[key] instanceof Array) {
      this[key].forEach(value => {
        const isRuleType = value instanceof Rule;
        if (!isRuleType) {
          throw new Error("验证数组必须全部为Rule类型");
        }
      });
      return true;
    }
    return false;
  }

  async validate(ctx, alias = {}) {
    this.alias = alias;
    const params = this._assembleAllParams(ctx);
    this.data = cloneDeep(params);
    this.parsed = cloneDeep(params);

    const memberKeys = findMembers(this, {
      filter: this._findMembersFilter.bind(this)
    });

    const errorMsgs = [];
    // const map = new Map(memberKeys)
    for (const key of memberKeys) {
      const result = await this._check(key, alias);
      if (!result.success) {
        errorMsgs.push(result.msg);
      }
    }
    if (errorMsgs.length != 0) {
      throw new ParameterException(errorMsgs);
    }
    ctx.v = this;
    return this;
  }

  _check () {}


}




class RuleResult {
  constructor(pass, msg = "") {
    Object.assign(this, {
      pass,
      msg
    });
  }
}

class RuleFieldResult extends RuleResult {
  legalValue: any;
  // tslint:disable-next-line:no-null-keyword
  constructor(pass, msg = "", legalValue = null) {
    super(pass, msg);
    this.legalValue = legalValue;
  }
}
class Rule {
  name: string;
  params: any;
  msg: any;
  message: any;

  constructor(name, msg, ...params) {
    Object.assign(this, {
      name,
      msg,
      params
    });
  }

  validate(field) {
    if (this.name == "isOptional")
      return new RuleResult(true);
    if (!validator[this.name](field + "", ...this.params)) {
      return new RuleResult(false, this.msg || this.message || "参数错误");
    }
    return new RuleResult(true, "");
  }
}

export {};