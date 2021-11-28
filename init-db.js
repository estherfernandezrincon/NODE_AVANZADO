"use strict";

require("dotenv").config();

require("./lib/connectMongoose");

const { Anuncios, Usuario } = require("./models");
