import newPage from "./functions/newPage";

if (process.argv.length !== 3) {
  console.log("usage: newPage.ts <pagename>");
  process.exit(-1);
}

const name = process.argv[2];

newPage(name);

console.log(`Created page "${name}".`);
console.log(`Switched to page "${name}".`);
