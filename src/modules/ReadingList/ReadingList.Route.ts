import express from "express";
import { readingController } from "./ReadingList.Controller";
import { auth } from "../Book/book.routes";
const route = express.Router();
route.post("/readinglist", auth, readingController.creatReadingBookController);
route.get("/readinglist", auth, readingController.getReadingBookController);
route.delete(
  "/readinglist/:id",
  auth,
  readingController.deleteReadinglistController
);
route.patch(
  "/readinglist/:id",
  auth,
  readingController.updateReadingListController
);
export const readingRouter = route;
