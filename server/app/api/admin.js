/**
 * @description 管理员的路由 API 接口
 * @description Administrator's routing API interface
 * @author berlinen
 */

const Router = require("koa-router");
const { Resolve } = require('../lib/helper')

const router = new Router({
  prefix: "/api/admin"
});

router.get("/", (ctx, next) => {
  ctx.response.status = 200;
  ctx.body = "hello berlin";
});

module.exports = router;

export {};