
import * as Koa from "koa";

const app = new Koa();

app.listen(3000, () => {
  console.log("Koa is listening in http://localhost:3000");
});

module.exports = app;