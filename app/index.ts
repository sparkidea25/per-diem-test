const express = require("express");
const mongoose = require("mongoose");
import { userRouter } from "./controllers/user";
import { storeRouter } from "./controllers/store";
import { subscribeRouter } from "./controllers/subscription";

let app = express();
let port = 6000;
app.use(express.json());
app.use(userRouter);
app.use(storeRouter);
app.use(subscribeRouter);

mongoose
  .connect("mongodb://127.0.0.1:27017/kazifie-sevice", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "kazifie-service",
  })
  .then(() => {
    console.log("Database connection is ready");
  })
  .catch((err: any) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Perdiem is running on http://localhost:${port}`);
});
