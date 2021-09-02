import changePage from "./functions/changePage";

if (process.argv.length !== 3) {
  console.log("usage: changePage.ts <pagename>");
  process.exit(-1);
}

const name = process.argv[2];

changePage(name);

console.log(`Switched to page "${name}".`);
