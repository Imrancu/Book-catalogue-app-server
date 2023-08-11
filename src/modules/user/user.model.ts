import mongoose, { Schema } from "mongoose";
import { IUser } from "./user.interface";
import bcrypt from "bcrypt";

const userSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});
export const User = mongoose.model("User", userSchema);
