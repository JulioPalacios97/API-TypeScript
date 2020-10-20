import { Request, Response } from "express";
import User, { IUser } from "../models/user";
import jwt from "jsonwebtoken";

//register
export const SignUp = async (req: Request, res: Response) => {
  //saving a new user
  const user: IUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  user.password = await user.encryptPassword(user.password);
  const saveUser = await user.save();
  //create token
  const token: string = jwt.sign(
    { _id: saveUser._id },
    process.env.TOKEN_SECRET || "token-secret"
  );

  res.header("auth-token", token).json(saveUser);
};

//login
export const SignIn = async (req: Request, res: Response) => {
  const userSign = await User.findOne({ email: req.body.email });
  if (!userSign) return res.status(400).json("wrong e-mail or password");

  const correctPassword: boolean = await userSign.validatePassword(
    req.body.password
  );
  if (!correctPassword) return res.status(400).json("invalid password");

  const token: string = jwt.sign(
    { _id: userSign._id },
    process.env.TOKEN_SECRET || "token-secret",
    {
      expiresIn: 60 * 60 * 24,
    }
  );
  res.header("auth-token", token).json(userSign);
};

//data user
export const Profile = async (req: Request, res: Response) => {
  const userProfile = await User.findById(req.userId, { password: 0 });
  if (!userProfile) return res.status(400).json("user not found");
  res.json(userProfile);
};
