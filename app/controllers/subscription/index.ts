import express, { Router } from "express";
import Subscriber from "../../models/subscription";

let api = Router();

//checkifthereisanavailableslot
//check if the user has clocked 0 coffee

api.post("/api/post/subscribe", async (req: any, res: any) => {
  const subscribe = new Subscriber({
    time: req.body.time,
    user: req.body.user,
    store: req.body.store,
    initial_amount: req.body.amount,
    amount_left: req.body.amount,
  });
  await subscribe.save();
  res.send(subscribe);
});

api.post("/api/post/order", async (req: any, res: any) => {
  try {
    const user_id = req.body.user;
    const store_id = req.body.store;
    const order_amount = req.body.amount;
    //id user_id store_id initial_amount amount_left
    const subscription = await Subscriber.findOne({
      user: user_id,
      store: store_id,
    });
    const initial_amount = subscription.initial_amount;
    let amount_left = subscription.amount_left;

    if (order_amount > amount_left) {
      console.log("New order greater than order left");
      res.json({ message: "new order greater than order left" });
      return;
    }
    amount_left -= order_amount;
    if (amount_left == 0) amount_left = initial_amount;
    subscription.amount_left = amount_left;
    await subscription.save();
    res.send(subscription);
  } catch (error) {
    console.log(error);
    res.json({ message: "User or store id is invalid" });
  }
});

export { api as subscribeRouter };
