import { RequestHandler } from "express";
import { createReviewService, getReviewService } from "./review.service";
import { StatusCodes } from "http-status-codes";

const createReviewController: RequestHandler = async (req, res) => {
  try {
    const review = await req.body;
    const result = await createReviewService(review);

    console.log(result);

   return res.status(StatusCodes.OK).json({
      success: true,
      statusCode: 200,
      message: "Review added in successfully",
      data: {
        result,
      },
    });
  } catch (err) {
    console.log(err);

   return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      statusCode: 404,
      message: "Something went wrong",
      data: err,
    });
  }
};

const getReviewController: RequestHandler = async (req, res) => {
  try {
    const id = req.params.bookId;
    // console.log(id);

    const result = await getReviewService(id);
    // console.log(result);

 return   res.status(StatusCodes.OK).json({
      success: true,
      statusCode: 200,
      message: "Review get in successfully",
      data: {
        result,
      },
    });
  } catch (err) {
  return  res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      statusCode: 404,
      message: "Something went wrong",
      data: err,
    });
  }
};

export const reviewController = {
  createReviewController,
  getReviewController,
};
