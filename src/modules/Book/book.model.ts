import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import { IBook, IReview } from "./book.interface";

// Define the Review schema
const reviewSchema = new Schema<IReview>({
  user: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

const bookSchema = new Schema<IBook>(
  {
    Title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    Img_URL: {
      type: String,
      required: true,
      trim: true,
    },
    Author: {
      type: String,
      required: true,
      trim: true,
    },
    Genre: {
      type: String,
      required: true,
      trim: true,
    },
    Publication_Date: {
      type: String,
      required: true,
      trim: true,
    },
    Reviews: [reviewSchema],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
// bookSchema.pre("save", async function (next) {
//   this.password = await bcrypt.hash(this.password, 10);
//   next();
// });
export const Book = mongoose.model<IBook>("Book", bookSchema);
