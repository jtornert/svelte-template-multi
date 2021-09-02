import fs from "fs";

export default function deletePage(name: string) {
  if (fs.existsSync(`./src/pages/${name}`)) {
    fs.rmdirSync(`./src/pages/${name}`, { recursive: true });
  }

  if (fs.existsSync(`./public/${name}`)) {
    fs.rmdirSync(`./public/${name}`, { recursive: true });
  }
}
