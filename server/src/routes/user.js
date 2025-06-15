import { Router } from "express";
import User from "../models/user.js";
const userRouter = Router();
import bcrypt from "bcrypt";
const saltRounds = 10;

userRouter.post("/register", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (user) return res.send("email already taken");
  else {
    req.body.password = await bcrypt.hash(req.body.password, saltRounds);
    User.create(req.body);
    return res.send("user registered");
  }
});

export default userRouter;
