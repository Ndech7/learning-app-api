module.exports = (app) => {
  const hubs = require("../controllers/hubs.controller");

  const router = require("express").Router();

  // endpoint to create a new Hub
  router.post("/", hubs.create);

  //   endpoint to retrieve Hub(s)
  router.get("/", hubs.findAll);

  //   endpoint to retrieve a hub by id
  router.get("/:id", hubs.findOne);

  //   endpoint to update a hub by id
  router.put("/:id", hubs.update);

  // main route for all endpoints
  app.use("/api/hubs", router);
};
