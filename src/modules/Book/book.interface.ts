// Define the Book schema
export interface IBook extends Document {
  Email: string;
  Title: string;
  Author: string;
  Genre: string;
  Img_URL: string;
  Publication_Date: string;
}
