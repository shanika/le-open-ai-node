// src/types/InputConfig.ts

// Base interface for all input types
export interface BaseInput {
  name: string;
  type: "string" | "number" | "array" | "boolean" | "object";
  required: boolean;
}

// String input with additional properties
export interface StringInput extends BaseInput {
  type: "string";
  isMultiline?: boolean;
  useTemplate?: boolean;
}

// Number input with optional min and max
export interface NumberInput extends BaseInput {
  type: "number";
  min?: number;
  max?: number;
}

// Boolean input
export interface BooleanInput extends BaseInput {
  type: "boolean";
}

// Object input for nested configurations
export interface ObjectInput extends BaseInput {
  type: "object";
  fields: InputConfig[];
}

// Array input that can contain nested InputConfigs or primitive types
export interface ArrayInput extends BaseInput {
  type: "array";
  itemsType: "string" | "number" | "boolean" | InputConfig;
}

// Union type for all possible inputs
export type InputConfig =
  | StringInput
  | NumberInput
  | BooleanInput
  | ObjectInput
  | ArrayInput;

export interface FunctionConfig {
  name: string;
  displayName?: string;
  inputs: InputConfig[];
}

export interface NodeConfig {
  name: string;
  functions: FunctionConfig[];
}
