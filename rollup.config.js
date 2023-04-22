import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

//import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default [
  {
    external: [
      'react',
      // fileURLToPath(
      //   new URL(
      //     'src/some-local-file-that-should-not-be-bundled.js',
      //     import.meta.url
      //   )
      // ),
      /node_modules/
    ],
    input: "./src/index.ts",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: "inline",
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: "inline",
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      //terser()
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],

    external: [/\.css$/], // telling rollup anything that is .css aren't part of type exports 
  },
]