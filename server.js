const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

const connectDB = require("./config/db");

//Import routes
const posts = require("./routes/post");
const users = require("./routes/user");
const path = require("path");

dotenv.config();

connectDB();

const app = express();

//Accept JSON data in the body
app.use(express.json());
app.use(cors());

app.use("/api", posts);
app.use("/api", users);

const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "client", "build")));

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
} else if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(
  PORT,
  console.log(
    `Server is now running in ${process.env.NODE_ENV} mode on PORT ${process.env.PORT}`
  )
);
