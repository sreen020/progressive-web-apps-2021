const express = require("express");
const fetch = require("node-fetch");

const app = express();
const port = 3000;

// static files
app.use(express.static("public"));

// Set views
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Create a route for our overview page
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/games", (req, res) => {
  fetch("https://free-nba.p.rapidapi.com/games", {
    headers: {
      "x-rapidapi-key": "85d43d1b47msh7273a9c7d1d5c94p1b0a1cjsnbc483a52d1e3",
      "x-rapidapi-host": "free-nba.p.rapidapi.com",
      useQueryString: true,
    },
  })
    .then((res) => res.json())
    .then((json) =>
      res.render("games.ejs", {
        title: "Posts",
        data: json,
      })
    );
});

app.get("/game/:id", (req, res) => {
  fetch(`https://free-nba.p.rapidapi.com/games/${req.params.id}`, {
    headers: {
      "x-rapidapi-key": "85d43d1b47msh7273a9c7d1d5c94p1b0a1cjsnbc483a52d1e3",
      "x-rapidapi-host": "free-nba.p.rapidapi.com",
      useQueryString: true,
    },
  })
    .then((res) => res.json())
    .then((json) =>
      res.render("spicificGame.ejs", {
        title: "Posts",
        data: json,
      })
    );
});

app.listen(port, () => console.log("Listening to port " + port));
