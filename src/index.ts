import {Hono} from "hono";

const app = new Hono();

const b = Bun.serve({
  fetch:app.fetch,
})