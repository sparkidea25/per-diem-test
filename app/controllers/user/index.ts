import express, { Request, Response, Router } from "express";
import User from "../../models/user";

let api = express.Router();

api.post("/api/post", async (req: any, res: any) => {
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    status: req.body.status,
  });
  await user.save();
  if (!user) {
    return res.status(500).json({ message: "user not found" });
  }
  res.send(user);
});

export { api as userRouter };
