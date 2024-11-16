import {
  BaseFunctions,
  InvokeModalInput,
  ParseOutputInput,
} from "./generated/inputTypes";

export class Node implements BaseFunctions {
  async invokeModal(input: InvokeModalInput): Promise<Record<string, any>> {
    console.log(`invokeModal called with:`, { input });
    return { success: true };
  }

  async parseOutput(input: ParseOutputInput): Promise<Record<string, any>> {
    console.log(`parseOutput called with:`, { input });
    return { success: true };
  }
}
