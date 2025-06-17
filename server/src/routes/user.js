import { Router } from "express";
import User from "../models/user.js";
const userRouter = Router();
import bcrypt from "bcrypt";
const saltRounds = 10;
import jwt from "jsonwebtoken";

userRouter.post("/register", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) return res.send("email already taken");
  else {
    req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    User.create(req.body);
    return res.send("user registered");
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // ---step 1: email should exist
  const user = await User.findOne({ email: email });
  // --- no: return email not found
  if (!user) return res.send({ message: "Email not found" });

  // ---yes:
  // step 2: check if password matches to that of db
  const isMatched = await bcrypt.compare(password, user.password);
  if (!isMatched) return res.send({ message: "Invalid password" });

  const token = await jwt.sign(
    { email: email },
    "33ceecfc3c914cb6dee77a8c16d08211caf46cfb1aa0b9372f24e39fbaaa1fca31d1a7ae7938579f7ed157636babf812ac42468d431128f7f3098c51a5a4a69a"
  );

  return res.send({
    message: "logged in successfully",
    user: user,
    isLoggedIn: true,
    token,
  });
});

export default userRouter;
