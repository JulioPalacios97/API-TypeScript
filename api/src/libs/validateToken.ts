import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface IData {
  _id: string;
  iat: number;
  exp: number;
}

export const Token = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header("auth-token");

  if (!token) return res.status(400).json("Access denied");
  const data = jwt.verify(
    token,
    process.env.TOKEN_SECRET || "token-secret"
  ) as IData;
  req.userId = data._id;
  next();
};
