import { serve } from "server";

const denolandApi = "https://api.github.com/users/denoland";

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

serve(handler);
