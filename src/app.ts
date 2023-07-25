import express, { Application } from "express";
// import { globalErrorHandler } from "./modules/shared/globalErrorHandler";
// import { userRouter } from "./modules/user/user.router";
// import globalErrorHandler from "./modules/shared/globalErrorHandler";
// import cowRouter from "./modules/cow/cow.routes";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
// import orderRouter from "./modules/orders/order.router";
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use("/api/v1/", userRouter);
// app.use("/api/v1/", cowRouter);
// app.use("/api/v1/", orderRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// app.use(globalErrorHandler);

export default app;
module.exports = app;
