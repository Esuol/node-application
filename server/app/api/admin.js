/**
 * @description 管理员的路由 API 接口
 * @description Administrator's routing API interfaces
 * @author berlinen
 */

const Router = require("koa-router");

const { AdminDao } = require('../dao/admin');
const { Auth } = require("../middlewares/auth");
const { LoginManager } = require('../../service/login');
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