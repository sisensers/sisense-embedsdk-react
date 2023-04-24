import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

//import { terser } from "rollup-plugin-terser";
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { createPathTransform } from 'rollup-sourcemap-path-transform'

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
    input: "./src/index.tsx",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: true,
        // sourcemapPathTransform: createPathTransform({
        //   prefixes: {
        //     '*src/components/': '/sisense-embedsdk-react/'
        //   }
        // })
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: true,
        // sourcemapPathTransform: createPathTransform({
        //   prefixes: {
        //     '*src/components/': '/sisense-embedsdk-react/'
        //   }
        // })
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
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],

    external: [/\.css$/], // telling rollup anything that is .css aren't part of type exports 
  },
]