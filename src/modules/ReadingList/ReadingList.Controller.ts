import { RequestHandler } from "express";
import {
  GetReadingService,
  ReadingServiceDelete,
  ReadingUpdateBooksService,
  createReadingService,
} from "./ReadingList.service";

const creatReadingBookController: RequestHandler = async (req, res) => {
  try {
    const Email = await req?.user?.email;
    const readingBook = await {
      Email,
      ...req?.body,
    };
    const result = await createReadingService(readingBook);
   return res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Create ReadingList  in successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
   return res.status(404).json({
      success: false,
      statusCode: 404,
      message: "Soming went wrong",
      data: err,
    });
  }
};

const getReadingBookController: RequestHandler = async (req, res) => {
  try {
    const Email = req?.user?.email;
    // console.log(Email);
    const result = await GetReadingService(Email);
   return res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Get ReadingList  in successfully",
      data: result,
    });
  } catch (err) {
  return  res.status(404).json({
      success: false,
      statusCode: 404,
      message: "Soming went wrong",
      data: err,
    });
  }
};
const deleteReadinglistController: RequestHandler = async (req, res) => {
  try {
    const id = await req.params.id;
    const result = await ReadingServiceDelete(id);
return    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Delete Reading book  in successfully",
      data: result,
    });
  } catch (err) {
 return   res.status(404).json({
      success: false,
      statusCode: 404,
      message: "Soming went wrong",
      data: err,
    });
  }
};

const updateReadingListController: RequestHandler = async (req, res) => {
  try {
    const id = await req.params.id;
    const Status = "Finished";
    const result = await ReadingUpdateBooksService(id, { Status: Status });
 return   res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Updated Reading book  in successfully",
      data: result,
    });
  } catch (err) {
  return  res.status(404).json({
      success: false,
      statusCode: 404,
      message: "Soming went wrong",
      data: err,
    });
  }
};
export const readingController = {
  creatReadingBookController,
  getReadingBookController,
  deleteReadinglistController,
  updateReadingListController,
};
