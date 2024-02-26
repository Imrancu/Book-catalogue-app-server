import { RequestHandler } from "express";
import {
  wishlistService,
  wishlistServiceDelete,
  wishlistServiceGet,
} from "./wishlist.service";

const createWishListController: RequestHandler = async (req, res) => {
  try {
    const Email = await req?.user?.email;
    const wishlistBookService = await {
      Email,
      ...req?.body,
    };
    const result = await wishlistService(wishlistBookService);
    // console.log(result);

  return  res.status(200).json({
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

const getWishlistBookController: RequestHandler = async (req, res) => {
  try {
    const Email = await req?.user?.email;
    const result = await wishlistServiceGet(Email);
 return  res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Get wishList  in successfully",
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

const wishlistDeleteController: RequestHandler = async (req, res) => {
  try {
    const id = await req.params.id;
    // console.log(id);
    const result = await wishlistServiceDelete(id);
    // console.log(result);

 return   res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Delete wishList  in successfully",
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

export const wishlistController = {
  createWishListController,
  getWishlistBookController,
  wishlistDeleteController,
};
