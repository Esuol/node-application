class Resolve {
  success(msg = "success", errCode = 0, code = 200) {
    return {
      msg,
      code,
      errCode,
    };
  }

  json(data, msg = "success", errorCode = 0, code = 200) {
    return {
      code,
      data,
      msg,
      errorCode
    };
  }
}

module.exports = {
  Resolve
};