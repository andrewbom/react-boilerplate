const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const config = require("./config/key");

const { User } = require("./models/user");

// --------------------------------- middlewares setup ---------------------------------

//to not get any deprecation warning or error
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
//to get json data
// support parsing of application/json type post data
app.use(bodyParser.json());
app.use(cookieParser());

// --------------------------------- END middlewares setup ---------------------------------

// --------------------------------- mongoDB setup ---------------------------------

mongoose.connect(config.mongoURI, {
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

app.post("/api/users/register", (req, res) => {
  const user = new User(req.body);
  user.save((err, userData) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

// --------------------------------- END Route setup ---------------------------------

app.listen(5000);
