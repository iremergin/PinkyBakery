const router = require("express").Router();

router.get("/get", (request, response, next) => {
  response.send("...");
});

router.post("/post", (request, response, next) => {
  response.send("...");
});
module.exports = router;
