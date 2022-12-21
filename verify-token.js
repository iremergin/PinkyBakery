const jwt = require("jsonwebtoken");
const secretKey = require("./config");

const tokenKontrol = (request, response, next) => {
  const token =
    request.headers["x-access-token"] ||
    request.body.token ||
    request.query.token;
  if (!token) {
    response.send("Token bulunmamaktadir.");
  } else {
    jwt.verify(token, request.app.get("api_secret_key"), (error, decoded) => {
      if (error) {
        response.send("Beklenmeyen bir hatayla karşilaşildi.");
      } else {
        request.decode = decoded;
        next();
      }
    });
  }
};

const tokenGirisKontrol =  (request, response, next) => {
  const { token } = request.headers;
  try {
    const verification = jwt.verify(token, secretKey.api_secret_key);
    if (verification) {
      // response.send({
      //   responseCode: 100,
      //   message: "token ile giris basarili",
      // });
      return next();
    } else {
      response.send({
        responseCode: -300,
        message: "token ile giris basarisiz",
      });
    }
  } catch (error) {
    response.send({
      responseCode: -300,
      message: "token ile giris basarisiz",
    });
  }
};

module.exports = {
  tokenKontrol,
  tokenGirisKontrol,
};
