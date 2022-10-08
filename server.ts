import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.static(__dirname + "/resources"));

app.get("/21009978g", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.get("/", (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(port, () => {
  console.log(
    `⚡️[server]: Server is running at https://localhost:${
      process.env.PORT || 8000
    }`
  );
});
