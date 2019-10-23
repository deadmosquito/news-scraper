const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");


var app = express();
var PORT = process.env.PORT || 8080;


app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Handlebars
app.engine("handlebars",exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

require("./routes/routes")(app);

mongoose.connect("mongodb://localhost/nbadb", { useNewUrlParser: true });

app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});


module.exports = app;
