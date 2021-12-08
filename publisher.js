"use strict";

const connectionPromise = require("./connectAMQP");

main().catch((err) => console.log("se ha producido el error", err));

async function main() {
  //conectar al servidor amqp
  const conn = await connectionPromise;

  //conectar a un canal
  const canal = await conn.createChannel();

  //asegurar que existe la cola a la que conectamos
  await canal.assertQueue("tarea", {});
}
