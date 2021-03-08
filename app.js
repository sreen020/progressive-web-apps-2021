const express = require("express");
const app = express();
const port = 3000;

// static files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

// Set views
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/games", (req, res) => {
  res.render("games.ejs");
});

app.listen(port, () => console.log("Listening to port" + port));
