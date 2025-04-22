import { OpenAPIHono } from "@hono/zod-openapi";
import { logger } from "hono/logger";
import { notFound } from "stoker/middlewares";

const app = new OpenAPIHono();
app.use(logger());

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/api/healthcheck", (c) => {
  return c.json({ status: "OK" });
});

app.notFound(notFound);

export default app;
