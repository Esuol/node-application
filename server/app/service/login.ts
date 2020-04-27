const { AdminDao } = require("../dao/admin");
const { Auth } = require("../middlewares/auth");

type ParamsType = {
  email: string,
  password: string
};

interface SecurityType {
  tokenKey: string;
  expiresTime: number;
}

// 颁布令牌
const generateToken =  (uid: string, scope: string) => {
  const { tokenKey, expiresTime } = global.config.security as SecurityType;
  const token = jsonwebtoken.sign({
    uid,
    scope
  }, tokenKey, {
    expiresIn: expiresTime
  });
  return token;
};
class Login {
  // 管理员登录
  static async userLogin(params: ParamsType) {
    const {email, password} = params;
    // 验证账号密码是否正确
    const admin = await AdminDao.verify(email, password);
    // 返回jwt加密的token
    return generateToken(admin.id, Auth.ADMIN);
  }
}

module.exports = {
  Login
};

export {};