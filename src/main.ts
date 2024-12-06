import OpenAI from "openai";
import { BaseFunctions, CallModalInput } from "./generated/inputTypes.js";

export class Node implements BaseFunctions {
  async callModal(input: CallModalInput): Promise<Record<string, any>> {
    const client = new OpenAI({
      apiKey: input.apiKey,
    });

    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-4o",
    });

    return {
      response: chatCompletion.choices[0].message.content,
    };
  }
}
