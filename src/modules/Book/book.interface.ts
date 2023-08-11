// Define the Review schema
export interface IReview {
  user: string;
  rating: number;
  comment: string;
}

// Define the Book schema
export interface IBook extends Document {
  Title: string;
  Author: string;
  Genre: string;
  Img_URL: string;
  Publication_Date: string;
  Reviews: IReview[];
}
