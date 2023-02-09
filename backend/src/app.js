
const { urlencoded } = require("express");
const express = require("express");
const path = require("path");
const cookieParse = require("cookie-parser");
require("dotenv").config();
require("../src/db/conn");
const views_path = path.join(__dirname, "../views");
const static_path = path.join(__dirname, "../static");
const app = express();
const port = process.env.PORT || 80;

app.use("/static", express.static(static_path));
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(cookieParse());

app.set("view engine", "pug");
app.set("views", views_path);

app.get("/", (req, res) => {
    res.status(200).send("Welcome to Cicada");
});




//* listen
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});