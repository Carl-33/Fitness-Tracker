const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3000;

// require routes


const app = express();

app.use(logger("dev"));

// app.use(express.urelencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", 
{ 
useNewUrlParser: true,
useUnifiedTopology: true, 
useCreateIndex: true,
useFindAndModify: false 
});

app.use(require("./routes/api-routes"));
require("./routes/html-routes")(app);

app.listen(PORT, () => {
    console.log(`App running on http://localhost:${PORT}/`);
  });
  