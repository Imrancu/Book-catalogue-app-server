import { Schema } from "mongoose";

export interface IWishlist {
  BookId: Schema.Types.ObjectId;
  Email: string;
}
