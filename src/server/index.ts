import express, { Application } from "express";
import path from "path";

const app = express();
const root = path.join(process.cwd(), "public");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("home/index.html", { root: root });
});

app.listen(5000, () =>
  console.log(`Server listening on http://localhost:5000`)
);
