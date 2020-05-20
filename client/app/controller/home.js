/**
 * 渲染react页面
 */

const paths = ['/', '/login', '/article-add', '/notFound',' /favicon.ico']
const isCorePath = (path) => {
  return paths.includes(path)
}

exports.renderHtml = async (ctx) => {
  console.log('xxx', ctx.url)
  if(isCorePath(ctx.url)) {
    console.log('om')
    const initState = ctx.query.state ? JSON.parse(ctx.query.state) : null;
    ctx.renderServer("article", { store: JSON.stringify(initState || { counter: 1 }) });
  } else {
    console.log('om1')
    ctx.redirect('/notFound');
    ctx.status = 301;
  }
};

exports.favicon = (ctx) => {
  ctx.body = "xxx";
};

exports.test = (ctx) => {
  ctx.body = {
    data: `测试数据`,
  };
};
