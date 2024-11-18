import { BaseFunctions, InvokeModalInput } from "./generated/inputTypes.js";
import moment from "moment";

export class Node implements BaseFunctions {
  async invokeModal(input: InvokeModalInput): Promise<Record<string, any>> {
    console.log("invokeModal:", input.modal);
    return {
      success: true,
      timestamp: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
  }
}
