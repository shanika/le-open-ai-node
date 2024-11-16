import { NodeConfig } from "./src/types/config";

const config: NodeConfig = {
  name: "Your Project Name",
  functions: [
    {
      name: "invokeModal",
      inputs: [
        {
          name: "modal",
          type: "string",
          required: true,
        },
        {
          name: "prompts",
          type: "array",
          required: true,
          itemsType: {
            type: "object",
            name: "prompt",
            required: true,
            fields: [
              {
                name: "role",
                type: "string",
                required: true,
              },
              {
                name: "prompt",
                type: "string",
                required: true,
                isMultiline: true,
                useTemplate: true,
              },
            ],
          },
        },
      ],
    },
    {
      name: "function2",
      inputs: [],
    },
  ],
};

export default config;
