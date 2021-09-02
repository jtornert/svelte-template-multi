import deletePage from "./functions/deletePage";

if (process.argv.length !== 3) {
  console.log("usage: deletePage.ts <pagename>");
  process.exit(-1);
}

const name = process.argv[2];

deletePage(name);

console.log(`Deleted page "${name}".`);
console.log(`Please switch to a different page or create a new one.`);
