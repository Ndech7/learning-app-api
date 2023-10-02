const db = require("../models");
const Hub = db.hubs;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate Request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
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
exports.findAll = (req, res) => {
  const title = req.query.title;
  const condition = title
    ? { title: { $regex: new RegExp(title), $options: "i" } }
    : {};

  Hub.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Some Error occured while retrieving Hub(s)",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Hub.findById(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Not found Hub with id ${id} ` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `Error retrieving Hub with id ${id}` });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data cannot be empty",
    });
  }
  const id = req.params.id;
  Hub.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update Hub with id ${id}`,
        });
      } else {
        res.send({
          message: "Hub was updated Succesfully",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `Error Updating Hub with id ${id}` });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Hub.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Cannot delete Hub with id ${id}` });
      } else {
        res.send({
          message: "Hub was deleted succesfully",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete hub with id ${id}`,
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Hub.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} Hubs were deleted successfully`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while removing all hubs",
      });
    });
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};
