/**
 *
 * @param {router 实例化对象} app
 */

const home = require("../controller/home");

module.exports = (router) => {
  router.get("/notFound", home.renderHtml);
  router.get("/", home.renderHtml);
  router.get("/login", home.renderHtml);
  router.get("/article-add", home.renderHtml);
  router.get("/favicon.ico", home.favicon);
  router.get("/test", home.test);
};
