
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
app.use(cors());
app.use(views(resolve(__dirname, "./app/views"), {
  extension: "ejs"
}));
app.use(koaStatic(__dirname + "./app/public"));
app.use(catchError);

InitManager.initCore(app);
app.listen(3000, () => {
  console.log("Koa is listening in http://localhost:3000");
});

module.exports = app;