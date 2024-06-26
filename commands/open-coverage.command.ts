import { resolve } from "path";
import { exec } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const url = resolve(__dirname, "../coverage/index.html");
const start =
  process.platform == "darwin"
    ? "open"
    : process.platform == "win32"
      ? "start"
      : "xdg-open";
exec(`${start} ${url}`);
