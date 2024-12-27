import { NodeConfig } from "@lang-engine/lang-engine-node";

const config: NodeConfig = {
  name: "OpenAI Chat API Node",
  functions: [
    {
      name: "callModal",
      displayName: "Call Modal",
      inputs: [
        {
          name: "apiKey",
          displayName: "Open AI API Key",
          type: "string",
          required: true,
        },
        {
          name: "modal",
          displayName: "Modal",
          type: "select",
          required: true,
          options: [
            { value: "gpt-4o", label: "GPT-4o" },
            { value: "gpt-4o-mini", label: "GPT-4o Mini" },
            { value: "gpt-4o-2024-08-06", label: "GPT-4o 2024-08-06" },
          ],
        },
        {
          name: "messages",
          displayName: "Messages",
          type: "array",
          required: true,
          itemsType: {
            name: "message",
            displayName: "Message",
            type: "object",
            required: true,
            fields: [
              { name: "role", type: "string", required: true },
              {
                name: "content",
                type: "string",
                required: true,
                useTemplate: true,
                isMultiline: true,
              },
            ],
          },
        },
      ],
    },
  ],
};

export default config;
