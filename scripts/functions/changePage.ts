import fs from "fs";
import pageExists from "./pageExists";

export default function changePage(name: string) {
  if (!pageExists(name)) {
    console.log("Page does not exist.");
    process.exit(-1);
  }

  let rollup = fs.readFileSync("./rollup.config.js").toString("utf-8");
  rollup = rollup.replace(
    /src\/pages\/[\S]*\/main.ts/,
    `src/pages/${name}/main.ts`
  );
  rollup = rollup.replace(
    /public\/[\S]*\/build\/bundle.js/,
    `public/${name}/build/bundle.js`
  );

  fs.writeFileSync("./rollup.config.js", rollup);
}
