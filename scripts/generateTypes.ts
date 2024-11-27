import { writeFile, mkdir, rm } from "fs/promises";
import { existsSync } from "fs";
import config from "../node.config.js";

function generateInputType(input: any): string {
  console.log("Generating input type for:", input);
  switch (input.type) {
    case "string":
      return "string";
    case "number":
      return "number";
    case "boolean":
      return "boolean";
    case "select":
      return input.multiple ? "string[]" : "string";
    case "array":
      console.log("Processing array type with itemsType:", input.itemsType);
      if (typeof input.itemsType === "string") {
        return `${input.itemsType}[]`;
      }
      return `${generateObjectInterface(input.itemsType)}[]`;
    case "object":
      return generateObjectInterface(input);
    default:
      console.warn("Unknown input type:", input.type);
      return "any";
  }
}

function generateObjectInterface(input: any): string {
  console.log("Generating object interface for:", input);
  if (input.type !== "object") {
    console.warn("Invalid input type for object interface:", input.type);
    return "any";
  }

  const fields = input.fields.map((field: any) => {
    console.log("Processing field:", field);
    const optional = !field.required ? "?" : "";
    return `  ${field.name}${optional}: ${generateInputType(field)};`;
  });

  return `{
${fields.join("\n")}
}`;
}

function generateFunctionInterface(functionConfig: any): string {
  console.log("Generating interface for function:", functionConfig.name);
  const interfaceName = capitalize(functionConfig.name);

  if (!functionConfig.inputs || functionConfig.inputs.length === 0) {
    console.log("No inputs for function:", functionConfig.name);
    return `export interface ${interfaceName}Input {
  // This function takes no inputs
}`;
  }

  const inputs = functionConfig.inputs.map((input: any) => {
    console.log("Processing function input:", input);
    const optional = !input.required ? "?" : "";
    return `  ${input.name}${optional}: ${generateInputType(input)};`;
  });

  return `export interface ${interfaceName}Input {
${inputs.join("\n")}
}`;
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function generateBaseFunctionsInterface(functions: any[]): string {
  console.log("Generating BaseFunctions interface");

  const functionDefinitions = functions.map((func) => {
    const inputType = `${capitalize(func.name)}Input`;
    return `  ${func.name}(input: ${inputType}): Promise<Record<string, any>>;`;
  });

  return `export interface BaseFunctions {
${functionDefinitions.join("\n")}
}`;
}

async function generateTypes(): Promise<void> {
  console.log("Starting type generation...");
  const dir = "src/generated";

  if (existsSync(dir)) {
    console.log("Cleaning up existing directory:", dir);
    await rm(dir, { recursive: true });
    console.log("Deleted existing generated directory");
  }

  console.log("Creating directory:", dir);
  await mkdir(dir, { recursive: true });
  console.log("Created fresh generated directory");

  console.log("Processing functions from config:", config.functions);
  const interfaces = config.functions.map(generateFunctionInterface);

  // Generate the BaseFunctions interface
  const baseFunctionsInterface = generateBaseFunctionsInterface(
    config.functions
  );

  const content = `// Generated file - DO NOT EDIT
// Generated on: ${new Date().toISOString()}

${interfaces.join("\n\n")}

${baseFunctionsInterface}
`;

  console.log("Writing generated types to:", `${dir}/inputTypes.ts`);
  await writeFile(`${dir}/inputTypes.ts`, content, "utf-8");
  console.log("Generated input types successfully");
}

generateTypes().catch((error) => {
  console.error("Error generating types:", error);
});
