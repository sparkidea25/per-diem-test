import express, { Router } from "express";
import Store from "../../models/store";

let api = Router();

api.post("/api/post/store", async (req: any, res: any) => {
  const store = new Store({
    name: req.body.name,
  });
  await store.save();
  if (!store) {
    return res.status(500).json({ message: "Store is not found" });
  }
  res.send(store);
});

export { api as storeRouter };
