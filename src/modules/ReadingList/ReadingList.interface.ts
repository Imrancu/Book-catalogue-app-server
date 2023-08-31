import { Schema } from "mongoose";

export interface IReadinglist {
  BookId: Schema.Types.ObjectId;
  Email: string;
  Status: "Reading" | "Finished";
}
