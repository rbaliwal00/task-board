const controller = require("../controllers/task.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/task", controller.createTask);
  app.post("/api/task/:id/completed", controller.taskCompleted);
  app.post("/api/task/:id/moved", controller.taskMoved);
};
