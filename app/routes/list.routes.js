const { authJwt } = require("../middleware");
const controller = require("../controllers/list.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/list", controller.creatList);
  app.get("/api/list/:id", controller.getAllTaskForList);
};
