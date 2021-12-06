var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const tools = require("./lib/tools");
const session = require("express-session");
const LoginController = require("./controllers/loginController");

var app = express();

require("./lib/connectMongoose");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.engine("html", require("ejs").__express);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "startbootstrap-agency-gh-pages")));

/**
 * Rutas de mi API
 ** */
app.use("/api/misAnuncios", require("./routes/api/misAnuncios"));

//setup i18n
const i18n = require("./lib/i18n");
app.use(i18n.init);

//sesiones del website
app.use(
  session({
    name: "nodepop-session",
    secret: 'cV<`fx*d}J9"ysHt',
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 48,
    },
  })
);

// variables globales de las vistas
app.locals.title = "nodePOP";

const loginController = new LoginController();

// rutas de mi website
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));
app.use("/contenido", require("./routes/contenido"));
app.get("/login", loginController.index); // en la ruta login se usa get
app.post("/login", loginController.post);
app.use("/privado", require("./routes/privado"));
app.use("/changeLanguage", require("./routes/changeLanguage"));

//app.use('/login'), require("./routes/login") cuando no se usan clases

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  if (tools.isAPIRequest(req)) {
    res.json({ error: err.message });

    return;
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.render("error");
});

module.exports = app;
