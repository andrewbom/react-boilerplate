const express = require("express");
const app = express();
const mongoose = require("mongoose");

// --------------------------------- mongoDB setup ---------------------------------
const mongoUri =
  "mongodb+srv://admin:passwordpassword@cluster0.4z08s.mongodb.net/boilerplate?retryWrites=true&w=majority";
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

// --------------------------------- END mongoDB setup ---------------------------------

// --------------------------------- Route setup ---------------------------------

app.get("/", (req, res) => {
  res.send("hello world");
});

// --------------------------------- END Route setup ---------------------------------

app.listen(5000);
