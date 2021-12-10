"use strict";

const connectionPromise = require("./connectAMQP");

const TASK_QUEUE = "tareas";

main().catch((err) => console.error("ha habido un error", err));

async function main() {
  const conn = await connectionPromise;

  const canal = await conn.createChannel();

  await canal.assertQueue(TASK_QUEUE);

  canal.consume(TASK_QUEUE, (message) => {
    console.log(message.content.toString());

    canal.ack(message);
  });
}
