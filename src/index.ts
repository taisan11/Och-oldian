import { Elysia,t } from "elysia";

const app = new Elysia()
  .onRequest((cx)=>{
    console.log(cx.request.method, cx.request.url);
  })
  .get("/", ({ server, request }) => { 
    const info = server?.requestIP(request);
    return info;
  })
  .onError(({ code }) => {
    if (code === 'NOT_FOUND') {
      return '何もなかった'
    }
  })
  .listen(3000);

console.log("Server is running on http://localhost:3000");

export type App = typeof app;