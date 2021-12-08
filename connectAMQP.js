"use strict";

//cargamos las variables de entorno
require("dotenv").config();

const amqplib = require("amqplib");
const { connection } = require("mongoose");

const connectionPromise = amqplib.connect(process.env.AMQP_SERVER_URL);

module.exports = connectionPromise;
