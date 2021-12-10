"use strict";

const connectionPromise = require("./connectAMQP");
const TASK_QUEUE = "tareas";
const image = "./public/images";

main().catch((err) => console.log("se ha producido el error", err));

async function main() {
  //conectar al servidor amqp
  const conn = await connectionPromise;

  //conectar a un canal
  const canal = await conn.createChannel();

  //asegurar que existe la cola a la que conectamos
  await canal.assertQueue(TASK_QUEUE, {});

  //enviar msg
  const message = {
    texto: "ruta a la imagen" + image,
  };

  canal.sendToQueue(TASK_QUEUE, Buffer.from(JSON.stringify(message)));

  console.log("tu tarea es :", message.texto);
}
