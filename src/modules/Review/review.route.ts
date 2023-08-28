import express from "express";
import { reviewController } from "./review.controller";

const router = express.Router();

router.post("/review", reviewController.createReviewController);
router.get("/review/:bookId", reviewController.getReviewController);

export const reviewRouter = router;
