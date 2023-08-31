import express, {
  Application,
  NextFunction,
  Request,
  RequestHandler,
  Response,
} from "express";
// import { globalErrorHandler } from "./modules/shared/globalErrorHandler";
// import { userRouter } from "./modules/user/user.router";
// import globalErrorHandler from "./modules/shared/globalErrorHandler";
// import cowRouter from "./modules/cow/cow.routes";
import jwt, { Secret } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import { userRouter } from "./modules/user/user.routes";
import { globalErrorHandler } from "./modules/shared/globalHandleError";
import { bookRouter } from "./modules/Book/book.routes";
import { reviewRouter } from "./modules/Review/review.route";
import { readingRouter } from "./modules/ReadingList/ReadingList.Route";
import { wishlistRouter } from "./modules/WishList/wishlist.route";

// import orderRouter from "./modules/orders/order.router";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export const auth: RequestHandler = (req: any, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({
      message: "UnAuthorized access",
    });
  }
  const token = authHeader.split(" ")[1];
  // verify a token symmetric
  jwt.verify(
    token,
    process.env.ACCESS_SECRET as Secret,
    function (err: any, decoded: any) {
      if (err) {
        return res.status(403).send({ message: "Forbidden Access" });
      }
      req.decoded = decoded;
      console.log(decoded);
    }
  );
  next();
};

app.use("/api/v1/", userRouter);
app.use("/api/v1/", bookRouter);
app.use("/api/v1/", reviewRouter);
app.use("/api/v1/", readingRouter);
app.use("/api/v1/", wishlistRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// app.use(globalErrorHandler);

export default app;
module.exports = app;
