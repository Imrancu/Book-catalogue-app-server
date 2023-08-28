import mongoose, { Schema } from "mongoose";
import { IReview } from "./review.interface";

const ReviewSchema = new Schema<IReview>(
  {
    email: {
      type: String,
      trim: true,
      require: true,
    },
    comment: {
      type: String,
      trim: true,
      require: true,
    },
    rating: {
      type: Number,
      trim: true,
      require: true,
    },
    bookId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Book",
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Review = mongoose.model<IReview>("Review", ReviewSchema);
