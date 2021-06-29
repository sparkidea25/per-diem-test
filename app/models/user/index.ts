import mongoose, { Schema, Document, Types } from "mongoose";

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  status: {
    type: Schema.Types.String,
    enum: ["admin", "merchant", "public"],
  },
  __v: { type: Number, select: false },
});

export default mongoose.model("User", userSchema);
