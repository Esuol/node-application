module.exports = {
  environment: 'dev',
  database: {
    dbName: 'myblog',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'berlinen'
  },
  security: {
    tokenKey: "tokenKey",
    // 过期时间 1小时
    expiresTime: 60 * 60
  },
  wx: {
    appId: '',
    appSecret: '',
    loginUrl: ''
  }
}