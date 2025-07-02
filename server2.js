const express = require("express");
const app = express(); // server created

app.get('/', (req, res) => {
  res.send("Main Page Loaded");
});

app.get('/home', (req, res) => {
  res.send("Welcome to the home page");
});

app.get('/about', (req, res) => {
  res.send("Welcome to the about page");
});

app.listen(5001, () => {
  console.log("Server is running on http://localhost:5001");
});
