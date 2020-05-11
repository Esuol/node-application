/**
 * 渲染react页面
 */

exports.renderHtml = async (ctx) => {
  const initState = ctx.query.state ? JSON.parse(ctx.query.state) : null;
  ctx.renderServer("article", { store: JSON.stringify(initState || { counter: 1 }) });
};
exports.favicon = (ctx) => {
  ctx.body = "xxx";
};

exports.test = (ctx) => {
  ctx.body = {
    data: `测试数据`,
  };
};
