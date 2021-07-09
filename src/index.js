const express = require("express");
const app = express();
const port = 8080;
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: true }));
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.post("/", function (req, res) {
  var age = Number(req.body.n1 / 15);
  res.send("your age in dog year is:" + age + "dog years");
});

app.listen(port);
