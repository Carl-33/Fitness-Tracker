const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

// app.use(express.urelencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/custommethoddb", { useNewUrlParser: true });

app.listen(PORT, () => {
    console.log(`App running on http://localhost/${PORT}/`);
  });
  