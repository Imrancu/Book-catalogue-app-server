import express from "express";
import { bookController } from "./book.controller";
const router = express.Router();

router.post("/book", bookController.createBooksController);
router.get("/book", bookController.getAllBookController);
router.get("/book/:id", bookController.getSingleBooksController);
router.patch("/book/:id", bookController.updateBookController);
router.delete("/book/:id", bookController.deleterSingleBooksController);

export const bookRouter = router;
