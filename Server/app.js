
require("dotenv").config();

const port = 3000;

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const express = require("express");
const favicon = require("serve-favicon");

const hbs = require("hbs");

const mongoose = require("mongoose");

const logger = require("morgan");
const path = require("path");
const ensureLogin = require("connect-ensure-login");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const flash = require("connect-flash");

const testHotels = require("./bin/seeds/hotelDefaults");

const cors       = require('cors');

mongoose
  .connect("mongodb://localhost/overseasTest", { useNewUrlParser: true })
  .then(x => {
    let dbName = "Overseas Test Environment";
    console.log(
      `Connected to Mongo! Database name: "${dbName}"  ; OX DATABASE SERVER IS LISTENING`
    );
    testHotels();
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4000/hotels");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Middleware Setup
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

//INSERT RANDOM USER TO DB

app.use(
  require("node-sass-middleware")({
    src: path.join(__dirname, "public"),
    dest: path.join(__dirname, "public"),
    sourceMap: true
  })
);


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
// app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

hbs.registerHelper("ifUndefined", (value, options) => {
  if (arguments.length < 2) {
    throw new Error("Handlebars Helper ifUndefined needs 1 parameter");
  }
  if (typeof value !== undefined) {
    return options.inverse(this);
  }
  return options.fn(this);
});

hbs.registerHelper("tern", (value, options) => {
  return !value ? "" : "checked";
});

hbs.registerHelper("ifitsMe", (value, value1, options) => {
  return value == value1
    ? new hbs.SafeString(
        `<a href="/place/delete/opinionDelete/{{this._id}}/{{this.idPlace}}"><button type="button" id="deleteOpinion">Delete</button></a>`
      )
    : "";
});

// default value for title local
app.locals.title = "OX WANNABE" ;



app.locals.key = process.env.APIkey;

// Enable authentication using session + passport
app.use(
  session({
    secret: "metamorphosis",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);
app.use(flash());
// require('./passport')(app);

// THIS IS OUR ROUTES CONFIG ON APP.JS WE TELL OUR APP THAT IT IS ALLOWED TO USE THESE ROUTES

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

app.use(cors({
  credentials: true,
  origin: ['http://localhost:4000'],
}));


app.use(cors());

const index = require("./routes/index");

app.use("/", index);

// const authRoutes = require("./routes/auth");

// app.use("/auth", authRoutes);

const hotelRoutes = require("./routes/hotels");

app.use("/hotels", hotelRoutes);

module.exports = app;
