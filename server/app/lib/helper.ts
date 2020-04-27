class Resolve {
  success(message = "success", errCode = 0, code = 200) {
    return {
      code,
      message,
      errCode,
    };
  }

  json(data, message = "success", errorCode = 0, code = 200) {
    return {
      code,
      data,
      message,
      errorCode
    };
  }

  error(data, message = "error", code = 500) {
    return {
      data,
      code,
      message
    };
  }
}

module.exports = {
  Resolve
};