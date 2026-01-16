const express = require("express");
const morgan = require("morgan");
const app = express();
const PORT = 3000;

// Middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// View engine setup
app.set("view engine", "pug");
app.set("views", "views");

// Routes
app.get("/", (req, res) => {
  res.render("index", { title: "Express App" });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
