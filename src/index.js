const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); //INVESTIGAR PARA QUE SIRVE CORS
require("dotenv").config();

const moviesRotuer = require("./routes/movies");

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "This is the back-end structure of my project!" });
});

app.use("/movies", moviesRotuer);

const connectDb = () => {
  mongoose.connect(process.env.DB_URI);
  console.log("Database connected");
};

const server = app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
  connectDb();
});

module.exports = { app, server };
