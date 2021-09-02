import fs from "fs";

export default function pageExists(name: string) {
  return (
    fs.existsSync(`./src/pages/${name}`) && fs.existsSync(`./public/${name}`)
  );
}
