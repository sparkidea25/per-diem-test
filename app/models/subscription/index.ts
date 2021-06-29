import mongoose, { Schema, Types } from "mongoose";

const subSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ["paid", "not_paid"],
    required: true,
  },
  time: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  store: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Store",
    required: true,
  },
  initial_amount: {
    type: Number,
    required: true,
    },
amount_left: {
        type: Number,
        required: true,
      },
});

export default mongoose.model("Subscriber", subSchema);
