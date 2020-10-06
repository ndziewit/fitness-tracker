const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));
app.use(logger("dev"));

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});