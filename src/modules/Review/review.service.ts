import { IReview } from "./review.interface";
import { Review } from "./review.model";

export const createReviewService = async (data: IReview) => {
  const result = await Review.create(data);
  return result;
};
export const getReviewService = async (bookId: string) => {
  const result = await Review.find({ bookId: bookId });
  return result;
};
