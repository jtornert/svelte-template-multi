import fs from "fs";
import pageExists from "./pageExists";
import changePage from "./changePage";

export default function newPage(name: string) {
  if (pageExists(name)) {
    console.log("Page already exists.");
    process.exit(0);
  }

  let template = fs.readFileSync("./src/template/index.html").toString("utf-8");
  while (template.indexOf("{{$}}") !== -1) {
    template = template.replace("{{$}}", name);
  }

  fs.mkdirSync(`./public/${name}`);
  fs.writeFileSync(`./public/${name}/index.html`, template);

  fs.mkdirSync(`./src/pages/${name}`);
  fs.copyFileSync(
    "./src/template/App.svelte",
    `./src/pages/${name}/App.svelte`
  );
  fs.copyFileSync("./src/template/main.ts", `./src/pages/${name}/main.ts`);

  changePage(name);
}
