
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

}

export {};