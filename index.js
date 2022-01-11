const express = require("express");
const path = require("path"); // get method
const app = express(); 
// const port = 2000;

// var express = require('express');
// var app = express();
// app.get('/', function (req, res) {
//   res.send('Server open ')
// })
const PORT = process.env.PORT;

// SERVER
app.listen(PORT, () => {
  console.log(`Server is Start on Port: ${PORT}`);
});

// USE CSS AND IMAGES
app.use('/static',express.static('static'))
app.use('/images',express.static('images'))

// const http = require("http");
// const Server = http.createServer((req, res) => {

// GET METHOD
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/home.html"));
});

app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname + "/home.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname + "/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname + "/contact.html"));
});

app.get("/blogs", (req, res) => {
  res.sendFile(path.join(__dirname + "/blogs.html"));
});

app.get("/projects", (req, res) => {
  res.sendFile(path.join(__dirname + "/projects.html"));
});

// });
// Server.listen(PORT,  () => {
//   console.log(`server is open on heroku)`);
// });