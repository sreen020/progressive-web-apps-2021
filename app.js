import express from "express";

const app = express();
const port = process.env.PORT || 3000;

import compression from "compression";

import { router } from "./routes/router.js";

// GZIP
app.use(compression());

// static files
app.use(express.static("public"));

// Set views
app.set("views", "./views");
app.set("view engine", "ejs");

// Routes
app.use("/", router);

// Start server
app.listen(port, () => console.log("Listening to port " + port));
