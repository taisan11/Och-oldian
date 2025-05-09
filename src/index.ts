import {Hono} from "hono";

const app = new Hono();

app.get("/",(c)=>{
  return c.text("Hello World");
})

const b = Bun.serve({
  fetch:app.fetch,
})