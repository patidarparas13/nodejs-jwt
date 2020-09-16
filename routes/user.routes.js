const { authJwt,authAPI } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  app.get("/api/test/findAll", 
  [authJwt.verifyToken,authAPI.verifyAPIKey],
  controller.findAll);

  app.get("/api/test/:userId", 
  [authJwt.verifyToken,authAPI.verifyAPIKey],
  controller.findByID);

  app.put("/api/test/:userId", 
  [authJwt.verifyToken,authAPI.verifyAPIKey],
  controller.updateByID);

  app.delete("/api/test/:userId", 
  [authJwt.verifyToken,authAPI.verifyAPIKey],
  controller.deleteByID);


  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken,authAPI.verifyAPIKey],
    controller.userBoard
  );
  
  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken,authAPI.verifyAPIKey,authJwt.isAdmin],
    controller.adminBoard
  );
};