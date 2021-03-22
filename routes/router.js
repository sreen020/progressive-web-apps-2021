import express from "express";
export const router = express.Router();
import fetch from "node-fetch";
import fetchData from "./../scripts/api/fetchData.js";

router.get("/", (req, res) => {
  res.render("index.ejs");
});

router.get("/games", (req, res) => {
  fetchData(req, res);
});

router.get("/games/:id", (req, res) => {
  fetchData(req, res);
});

router.get("/offline", (req, res) => {
  res.render("offline.ejs");
});
