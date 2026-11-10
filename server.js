import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const files = new Map([
  ["/", ["index.html", "text/html; charset=utf-8"]],
  ["/index.html", ["index.html", "text/html; charset=utf-8"]],
  ["/styles.css", ["styles.css", "text/css; charset=utf-8"]],
  ["/app.js", ["app.js", "text/javascript; charset=utf-8"]],
  ["/pace.js", ["pace.js", "text/javascript; charset=utf-8"]]
]);
const port = Number(process.env.PORT || 3000);
const root = new URL(".", import.meta.url);

createServer(async (request, response) => {
  const path = new URL(request.url, "http://localhost").pathname;
  const file = files.get(path);
  if (!file) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
    return;
  }
  try {
    const content = await readFile(fileURLToPath(new URL(file[0], root)));
    response.writeHead(200, { "Content-Type": file[1] });
    response.end(content);
  } catch (error) {
    console.error(`Unable to serve ${path}:`, error);
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Unable to load the requested file");
  }
}).listen(port, () => console.log(`Pace calculator available at http://localhost:${port}`));
