const router = require("express").Router();
const path = require("path");

module.exports = function(app) {
    
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });

      app.get("/index", function(req, res) {
        console.log("party")
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });

      app.get("/exercise", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
      });

      app.get("/stats", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
      });
}
module.exports = router;