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
          displayName: "Username",
          type: "string",
          required: true,
        },
        {
          name: "bio",
          displayName: "Biography",
          type: "string",
          required: false,
          isMultiline: true,
        },
        {
          name: "emailTemplate",
          displayName: "Email Template",
          type: "string",
          required: true,
          useTemplate: true,
        },
        {
          name: "age",
          displayName: "Age",
          type: "number",
          required: true,
          min: 13,
          max: 120,
        },
        {
          name: "score",
          displayName: "Score",
          type: "number",
          required: false,
        },
        {
          name: "isActive",
          displayName: "Is Active",
          type: "boolean",
          required: true,
        },
        {
          name: "tags",
          displayName: "Tags",
          type: "array",
          required: false,
          itemsType: "string",
        },
        {
          name: "scores",
          displayName: "Scores",
          type: "array",
          required: false,
          itemsType: "number",
        },
        {
          name: "boolFlags",
          displayName: "Boolean Flags",
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
          displayName: "Settings",
          type: "object",
          required: true,
          fields: [
            {
              name: "title",
              displayName: "Title",
              type: "string",
              required: true,
            },
            {
              name: "count",
              displayName: "Count",
              type: "number",
              required: true,
              min: 0,
              max: 100,
            },
            {
              name: "enabled",
              displayName: "Enabled",
              type: "boolean",
              required: true,
            },
          ],
        },
      ],
    },
    {
      name: "contactList",
      displayName: "Contact List Demo",
      inputs: [
        {
          name: "contacts",
          displayName: "Contacts",
          type: "array",
          required: true,
          itemsType: {
            name: "contact",
            displayName: "Contact",
            type: "object",
            required: true,
            fields: [
              {
                name: "name",
                displayName: "Name",
                type: "string",
                required: true,
              },
              {
                name: "age",
                displayName: "Age",
                type: "number",
                required: true,
                min: 0,
              },
              {
                name: "isVIP",
                displayName: "Is VIP",
                type: "boolean",
                required: false,
              },
            ],
          },
        },
      ],
    },
  ],
};

export default config;
