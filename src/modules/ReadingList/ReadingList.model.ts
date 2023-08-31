import mongoose, { Schema } from "mongoose";
import { IReadinglist } from "./ReadingList.interface";

const ReadingSchema = new Schema<IReadinglist>(
  {
    Email: {
      type: String,
      required: true,
      trim: true,
    },
    BookId: {
      type: Schema.Types.ObjectId,
      ref: "Book", // Reference to the Book model
      required: true,
    },
    Status: {
      type: String,
      enum: ["Reading", "Finished"],
      default: "Reading",
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);
export const ReadingList = mongoose.model<IReadinglist>(
  "ReadingList",
  ReadingSchema
);
