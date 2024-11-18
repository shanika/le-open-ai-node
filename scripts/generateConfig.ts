import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { existsSync } from "fs";
import config from "../node.config.js";

async function generateConfig(): Promise<void> {
  console.log("Starting config generation...");
  const distDir = "dist";
  const outputPath = join(distDir, "node.config.json");

  try {
    // Create dist directory if it doesn't exist
    if (!existsSync(distDir)) {
      console.log("Creating dist directory...");
      await mkdir(distDir, { recursive: true });
    }

    const configJson = JSON.stringify(config, null, 2);
    await writeFile(outputPath, configJson, "utf-8");
    console.log(`Config successfully written to ${outputPath}`);
  } catch (error) {
    console.error("Error generating config:", error);
    process.exit(1);
  }
}

generateConfig();
