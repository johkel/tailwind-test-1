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

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).render("404", {
    title: "404 Not Found",
    message: "Page not found",
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render("error", {
    title: "Error",
    message: err.message || "Something went wrong!",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
