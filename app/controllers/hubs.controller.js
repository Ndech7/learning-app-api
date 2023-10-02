const db = require("../models");
const Hub = db.hubs;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate Request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }
  // Create a Hub
  const hub = new Hub({
    title: req.body.title,
    description: req.body.description,
    completed: req.body.completed ? req.body.completed : false,
  });
  // Save Hub in DB
  hub
    .save(hub)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some Error occured while creating the hub",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};