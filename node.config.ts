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
      ],
    },
  ],
};

export default config;
