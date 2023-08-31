import mongoose, { Schema } from "mongoose";

import { IWishlist } from "./wishlist.interface";

const WishlistSchema = new Schema<IWishlist>(
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
export const WishList = mongoose.model<IWishlist>("Wishlist", WishlistSchema);
