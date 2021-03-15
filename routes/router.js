import express from "express";
export const router = express.Router();
import fetch from "node-fetch";

router.get("/", (req, res) => {
  res.render("index.ejs");
});

router.get("/games", (req, res) => {
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
        title: "Games",
        data: json,
      })
    );
});

router.get("/games/:id", (req, res) => {
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

router.get("/offline", (req, res) => {
  res.render("offline.ejs");
});
