const jwt = require("jsonwebtoken");

module.exports = (request, response, next) => {
  const token =
    request.headers["x-access-token"] ||
    request.body.token ||
    request.query.token;
  if (!token) response.send("Token bulunmamaktadır.");
  else {
    jwt.verify(token, request.app.get("api_secret_key"), (error, decoded) => {
      if (error) response.send("Beklenmeyen bir hatayla karşılaşıldı.");
      else {
        request.decode = decoded;
        next();
      }
    });
  }
};
