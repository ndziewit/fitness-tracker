const router = require("express").Router();
const path = require("path");
//const db = require("mongoose");

router.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
  console.log("Navigated to homepage");
});

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;