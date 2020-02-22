const Router = require("koa-router");

const requireDirectroy = require("require-directory");


class InitManager {
  static app: any;
  static initCore (app) {
    // 入口方法
    InitManager.app = app;
    InitManager.initLoadRouters();
    InitManager.loadHttpException();
    InitManager.loadConfig();
  }

  // 加载全部路由
  static initLoadRouters() {
     // 绝对路径
     const apiDirectroy =  `${process.cwd()}/app/api`;
     // 路由自动加载
     requireDirectroy(module, apiDirectroy, {
       visit: whenLoadModule
     });

     // 判断 requireDirectory 加载的模块是否为路由
     function whenLoadModule (obj) {
       if (obj instanceof Router) {
          InitManager.app.use(obj.routes());
       }
     }
  }

  static loadConfig(path = "") {
    const configPath =  path || process.cwd() + "/app/configs/config.js";
    const config = require(configPath);
    global.config = config;
  }

  static loadHttpException() {
    const errors = require("./http-exception");
    global.errs = errors;
  }

}