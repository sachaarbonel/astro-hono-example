import { Hono } from "hono";
import { hc } from "hono/client";
import emails from "./email";
import { cors } from "hono/cors";
import posts from "./posts";

/* -------------------------------------------------------------------------- */
/*                                     Middleware                             */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                     App                                    */
/* -------------------------------------------------------------------------- */
const app = new Hono().basePath("/api");

app.use("/api/*", cors());

/* -------------------------------------------------------------------------- */
/*                                   Routes                                   */
/* -------------------------------------------------------------------------- */

const routes = app
  .route("/emails", emails)
  .route("/posts", posts)
  .get("/", (c) => c.json({ message: "server is healthy" }));

/* -------------------------------------------------------------------------- */
/*                                   Exports                                  */
/* -------------------------------------------------------------------------- */
export default app;
export type AppType = typeof routes;

export const client = hc<AppType>("/");
export type ClientType = typeof client;
