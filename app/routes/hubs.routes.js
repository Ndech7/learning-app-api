module.exports = (app) => {
  const hubs = require("../controllers/hubs.controller");

  const router = require("express").Router();

  // endpoint to create a new Hub
  router.post("/", hubs.create);

  // main route for all endpoints
  app.use("/api/hubs", router);
};
