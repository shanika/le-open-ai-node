import OpenAI from "openai";
import { BaseFunctions, CallModalInput } from "./generated/inputTypes.js";
import {
  ChatCompletionMessageParam,
  ChatModel,
} from "openai/resources/index.js";

export class Node implements BaseFunctions {
  async callModal(input: CallModalInput): Promise<Record<string, any>> {
    const client = new OpenAI({
      apiKey: input.apiKey,
    });

    const chatCompletion = await client.chat.completions.create({
      messages: input.messages as ChatCompletionMessageParam[],
      model: input.modal,
    });

    return {
      response: chatCompletion.choices[0].message.content,
    };
  }
}
