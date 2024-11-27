import { NodeConfig } from "./src/types/config";

const config: NodeConfig = {
  name: "Advanced Demo Project",
  functions: [
    {
      name: "userProfile",
      displayName: "Create User Profile",
      inputs: [
        {
          name: "username",
          type: "string",
          required: true,
        },
        {
          name: "bio",
          type: "string",
          required: false,
          isMultiline: true,
        },
        {
          name: "emailTemplate",
          type: "string",
          required: true,
          useTemplate: true,
        },
        {
          name: "age",
          type: "number",
          required: true,
          min: 13,
          max: 120,
        },
        {
          name: "score",
          type: "number",
          required: false,
        },
        {
          name: "isActive",
          type: "boolean",
          required: true,
        },
        {
          name: "tags",
          type: "array",
          required: false,
          itemsType: "string",
        },
        {
          name: "scores",
          type: "array",
          required: false,
          itemsType: "number",
        },
        {
          name: "boolFlags",
          type: "array",
          required: false,
          itemsType: "boolean",
        },
      ],
    },
    {
      name: "simpleObject",
      displayName: "Simple Object Demo",
      inputs: [
        {
          name: "settings",
          type: "object",
          required: true,
          fields: [
            {
              name: "title",
              type: "string",
              required: true,
            },
            {
              name: "count",
              type: "number",
              required: true,
              min: 0,
              max: 100,
            },
            {
              name: "enabled",
              type: "boolean",
              required: true,
            },
          ],
        },
      ],
    },
  ],
};

export default config;
