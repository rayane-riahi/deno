import { Server } from "server";
import { load } from "dotenv";

const env = await load();
const port = Number(env["port"]) || 8080;

const denolandApi = env["dataApi"];

const handler = async (_request: Request): Promise<Response> => {
  const resp = await fetch(denolandApi, {
    headers: {
      accept: "application/json",
    },
  });
  // const jsonData = await resp.json();
  const clonedResp = resp.clone();
  const jsonResp = await clonedResp.json();
  console.log(jsonResp);
  return new Response(resp.body, {
    status: resp.status,
    headers: {
      "content-type": "application/json",
    },
  });
};

const server = new Server({ port, handler });

await server.listenAndServe();
