// import configuration for database
const dbConfig = require("../config/db.config");

// import mongoose
const mongoose = require("mongoose");

// initialize DB
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

module.exports = db;
