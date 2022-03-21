function setRoutes(app) {
  app.use("/api", require("./api"))
}

module.exports = setRoutes;
