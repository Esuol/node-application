/**
 *
 * @param {router 实例化对象} app
 */

const home = require("../controller/home");

// const paths = ["/article.css", "/article.js", "/0.js", "1.js", "2.js", "/", "/favicon.ico"];
// const isCorePath = (path) => {
//   return paths.includes(path);
// };

module.exports = (router) => {
  router.get("/", home.renderHtml);
  router.get("/article-add", home.renderHtml);
  router.get("/login", home.renderHtml);
  router.get("/favicon.ico", home.favicon);
  router.get("/test", home.test);
  router.get("/notFound", home.renderHtml);
  // router.get("*",  async (ctx) => {
  //   if(!isCorePath(ctx.url)) ctx.redirect('/notFound')
  // })
};
