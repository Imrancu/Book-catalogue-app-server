import express from "express";
import { auth } from "../Book/book.routes";
import { wishlistController } from "./wishlist.controller";
const route = express.Router();
route.post("/wishlist", auth, wishlistController.createWishListController);
route.get("/wishlist", auth, wishlistController.getWishlistBookController);
route.delete(
  "/wishlist/:id",
  auth,
  wishlistController.wishlistDeleteController
);

export const wishlistRouter = route;
