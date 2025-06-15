import { Router } from "express";
import User from "../models/user.js";
const userRouter = Router();

userRouter.post("/register", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) return res.send("email already taken");
  else User.create(req.body);
  return res.send("user registered");
});

export default userRouter;
