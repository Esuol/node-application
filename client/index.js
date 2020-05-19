/* eslint-disable global-require */
/* eslint-disable no-param-reassign */
const Koa = require("koa");
const path = require("path");
const koaNunjucks = require("koa-nunjucks-2");
const React = require("react");
const KoaRouter = require("koa-router");
const ReactDOMServer = require("react-dom/server");
const koaStatic = require("koa-static");

const router = new KoaRouter();
const app = new Koa();

const routerManagement = require("./app/router");
const manifest = require("./public/manifest.json");
const home = require("./app/controller/home");
// reslove node环境不解析less文件
require.extensions[".less"] = () => {};

/**
 * 处理链接
 * @param {*要进行服务器渲染的文件名默认是build文件夹下的文件} fileName
 */
function handleLink(fileName, req, defineParams) {
  const obj = {};
  fileName = fileName.indexOf(".") !== -1 ? fileName.split(".")[0] : fileName;

  try {
    obj.script = `<script src="${manifest[`${fileName}.js`]}"></script>`;
  } catch (error) {
    console.error(new Error(error));
  }
  try {
    obj.link = `<link rel="stylesheet" href="${manifest[`${fileName}.css`]}"/>`;
  } catch (error) {
    console.error(new Error(error));
  }
  // 服务器渲染
  // eslint-disable-next-line import/no-dynamic-require
  const dom = require(path.join(process.cwd(), `app/build/dist/${fileName}.js`)).default;
  const element = React.createElement(dom(req, defineParams));
  obj.html = ReactDOMServer.renderToString(element);

  return obj;
}

/**
 * 服务器渲染，渲染HTML，渲染模板
 * @param {*} ctx
 */
function renderServer(ctx, next) {
  return async (fileName, defineParams) => {
    let obj = handleLink(fileName, ctx.req, defineParams);
    // 处理自定义参数
    defineParams = String(defineParams) === "[object Object]" ? defineParams : {};
    obj = Object.assign(obj, defineParams);
    await ctx.render("index", obj);
  };
}
/**
 * 模板渲染
 */
app.use(
  koaNunjucks({
    ext: "njk",
    path: path.join(__dirname, "app/view"),
    nunjucksConfig: {
      trimBlocks: true,
    },
  })
);
/**
 * 设置静态资源
 */
app.use(
  koaStatic(path.resolve(__dirname, "./public"), {
    maxage: 0, // 浏览器缓存max-age（以毫秒为单位）
    hidden: false, // 允许传输隐藏文件
    index: "index.html", // 默认文件名，默认为'index.html'
    defer: true, // 如果为true，则使用后return next()，允许任何下游中间件首先响应。
    gzip: true, // 当客户端支持gzip时，如果存在扩展名为.gz的请求文件，请尝试自动提供文件的gzip压缩版本。默认为true。
  })
);

/**
 * 渲染Html
 */
app.use(async (ctx, next) => {
  ctx.renderServer = renderServer(ctx);
  await next();
});

/**
 * 注册路由
 */
routerManagement(router);
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("服务器已启动，请访问http://127.0.0.1:3000");
});
