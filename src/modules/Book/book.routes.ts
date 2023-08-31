import express, { RequestHandler } from "express";
import { bookController } from "./book.controller";
import jwt, { Secret } from "jsonwebtoken";
const router = express.Router();

export const auth: RequestHandler = (req, res, next) => {
  // console.log(req.body);
  let authToken: any = req.headers.authorization?.split(" ")[1];
  try {
    let decoded = jwt.verify(authToken, process.env.ACCESS_SECRET as Secret);
    req.user = decoded;
    // console.log(decoded, req.user);
    next();
  } catch (err) {
    // err
    return res.status(404).send({ message: "unAuthorized Access" });
  }
};

router.post("/create-book/", auth, bookController.createBooksController);
router.get("/book/", bookController.getAllBookController);
router.get("/book/:id", bookController.getSingleBooksController);
router.patch("/book/:id", auth, bookController.updateBookController);
router.delete("/book/:id", auth, bookController.deleterSingleBooksController);

export const bookRouter = router;
