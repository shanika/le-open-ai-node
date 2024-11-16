import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default [
  {
    input: "src/main.ts",
    output: {
      file: "dist/main.js",
      format: "es",
      sourcemap: false,
    },
    plugins: [
      nodeResolve(),
      typescript({
        sourceMap: false,
        compilerOptions: {
          sourceMap: false,
          declaration: false,
          declarationMap: false,
        },
      }),
    ],
  },
];
