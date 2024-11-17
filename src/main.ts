import { BaseFunctions, InvokeModalInput } from "./generated/inputTypes.js";

export class Node implements BaseFunctions {
  async invokeModal(input: InvokeModalInput): Promise<Record<string, any>> {
    console.log(`invokeModal called with:`, { input });
    return { success: true };
  }
}
