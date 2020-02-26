/**
 * @description 管理员的路由 API 接口
 * @description Administrator's routing API interface
 * @author berlinen
 */

const Router = require("koa-router");
const {Auth} = require("../../../middlewares/auth");
const { Resolve } = require("../lib/helper")
const res = new Resolve()

const router = new Router({
  prefix: "/api/admin"
});

router.get("/", (ctx, next) => {
  ctx.response.status = 200;
  ctx.body = res.json({
    name: 'berlin'
  });
});

module.exports = router;

export {};