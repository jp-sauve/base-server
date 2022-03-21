const apiRouter = require("express").Router();

apiRouter.use("/auth", require("./auth"));
apiRouter.use("/profile", require("./profile"))

module.exports = apiRouter;
