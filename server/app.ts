
import * as Koa from "koa";
const parser  = require("koa-bodyparser");
const cors = require("koa-cors");
const views = require("koa-views");
const koaStatic = require("koa-static");

const app = new Koa();
const { resolve } = require("path");

app.use(parser());
app.use(cors());
app.use(views(resolve(__dirname, "./views"), {
  extension: "ejs"
}));
app.use(koaStatic(__dirname + "./public"));

app.listen(3000, () => {
  console.log("Koa is listening in http://localhost:3000");
});

module.exports = app;