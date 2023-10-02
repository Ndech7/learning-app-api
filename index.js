const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// the express application
const app = express();

const corsOptions = {
  origin: "http://localhost:8081",
};

// allow CORS
app.use(cors(corsOptions));

// parse request of content-type: application/json
app.use(bodyParser.json());

// parse request of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// connect to the DB
const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database", err);
    process.exit();
  });

// simple Route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Learning App API - Built with MERN Stack",
  });
});

// set port to listen for request
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is listening at Port ${PORT}`);
});
