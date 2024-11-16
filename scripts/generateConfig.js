import { writeFile } from "fs/promises";
import config from "../dist/node.config.js";

async function generateConfig() {
  await writeFile(
    "dist/node.config.json",
    JSON.stringify(config, null, 2),
    "utf-8"
  );
}

generateConfig().catch(console.error);
