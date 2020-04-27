
import * as Koa from "koa";
const parser  = require("koa-bodyparser");
const cors = require("koa-cors");
const views = require("koa-views");
const koaStatic = require("koa-static");

const InitManager = require("./app/core/init");
const catchError = require("./app/middlewares/exception");

const app = new Koa();
const { resolve } = require("path");

app.use(parser());
// cors 跨域资源共享
app.use(cors());
// 静态模版
app.use(views(resolve(__dirname, "./app/views"), {
  extension: "ejs"
}));
// 处理静态文件
app.use(koaStatic(__dirname + "./app/public"));
// 截获异常并返回封装信息
app.use(catchError);
// 初始化项目路由，全局配置， 异常处理
InitManager.initCore(app);

app.listen(3006, () => {
  console.log("Koa is listening in http://localhost:3006");
});

module.exports = app;