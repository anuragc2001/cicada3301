
const { urlencoded } = require("express");
const express = require("express");
const path = require("path");
const cookieParse = require("cookie-parser");
const bodyParser = require('body-parser')
const session = require('express-session')
const mongodbStore = require('connect-mongodb-session')(session)

require("dotenv").config();
require("../src/db/conn");

const views_path = path.join(__dirname, "../views");
const static_path = path.join(__dirname, "../static");
const app = express();
const port = process.env.PORT || 80;

const {cronJob} = require('./services/cron.service')

const Admin = require('./routes/admin/admin.routes');
const Auth = require('./routes/auth/auth.routes');
const Game = require('./routes/game/game.routes');


const store = new mongodbStore({
    uri: process.env.MONGO_URI,
    collection: 'sessions'
})

app.use(session({ secret: process.env.SECRET_KEY, resave: false, saveUninitialized: false, store: store, cookie: {maxAge: 12 * 60 * 60 * 1000}}))

app.use("/static", express.static(static_path));
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(cookieParse());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.set("view engine", "pug");
app.set("views", views_path);

app.use(Admin)
app.use(Auth)
app.use(Game)

app.get("/server_stat", (req, res) => {
    res.status(200).send(`<p>running on port ${port}</p>`);
});

cronJob();
//* listen
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});