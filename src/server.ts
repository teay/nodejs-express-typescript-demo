import express, { Request, Response } from "express";
import { Query } from "express-serve-static-core";
import { User } from "./model/user.type";

export interface TypedRequestQuery<T extends Query> extends Express.Request {
  query: T;
}

const app = express();

app.get("/", (req, res) => {
  res.json({ result: "ok" });
  console.log("Server is get OK");
});

app.get("/login", (req: TypedRequestQuery<User>, res: Response) => {
  res.json(req.query);
  console.log("Server is login OK");
});

app.listen(3000, () => console.log("Server is running..."));
