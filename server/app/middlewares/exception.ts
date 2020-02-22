import { Context } from "vm";

const { HttpException } = require("../core/http-exception");

const catchError = async (ctx: Context, next: any) => {
  try {
    await next();
  } catch (error) {
    // develop
    const isHttpException = error instanceof HttpException;
    const isDev = global.config.environment === "dev";

    if (isDev && !isHttpException) {
      throw error;
    }

    // 生成环境
    if (isHttpException) {
      ctx.body = {
        msg: error.msg,
        error_code: error.errorCode,
        request: `${ctx.method} ${ctx.path}`
      };
      ctx.response.status = error.code;

    } else {
      ctx.body = {
        msg: "未知错误！",
        error_code: 9999,
        request: `${ctx.method} ${ctx.path}`
      };
      ctx.response.status = 500;
    }
  }
};

module.exports = catchError;