// import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
// import { IGenericErrorMessage } from "../interfaces/IGenericErrorMessage";
// import handleValidationError from "../error/HandleValidationError";
// import handleCastError from "../error/HandleCastError";
// import ApiError from "../error/ApiError";
// // import handleValidationError from "../errors/handleValidationError";
// // import handleCastError from "../errors/handleCastError";
// // import ApiError from "../errors/ApiError";
import { ErrorRequestHandler } from "express";
// import globalErrorHandler from "./globalHandleError";

export const globalErrorHandler: ErrorRequestHandler = (
  error,
  req,
  res,
  next
) => {
  console.log(error);
  next();
};

// const globalErrorHandler: ErrorRequestHandler = (
//   error,
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   process.env.NODE_ENV === "development" &&
//     console.log(`🐱‍🏍 globalErrorHandler ~~`, { error });
//   // : errorlogger.error(`🐱‍🏍 globalErrorHandler ~~`, error);

//   let statusCode = 500;
//   let message = "Something went wrong !";
//   let errorMessages: IGenericErrorMessage[] = [];

//   if (error?.name === "ValidationError") {
//     const simplifiedError = handleValidationError(error);
//     statusCode = simplifiedError.statusCode;
//     message = simplifiedError.message;
//     errorMessages = simplifiedError.errorMessages;
//   } else if (error?.name === "CastError") {
//     const simplifiedError = handleCastError(error);
//     statusCode = simplifiedError.statusCode;
//     message = simplifiedError.message;
//     errorMessages = simplifiedError.errorMessages;
//   } else if (error instanceof ApiError) {
//     statusCode = error?.statusCode;
//     message = error.message;
//     errorMessages = error?.message
//       ? [
//           {
//             path: "",
//             message: error?.message,
//           },
//         ]
//       : [];
//   } else if (error instanceof Error) {
//     message = error?.message;
//     errorMessages = error?.message
//       ? [
//           {
//             path: "",
//             message: error?.message,
//           },
//         ]
//       : [];
//   }

//   res.status(statusCode).json({
//     success: false,
//     message,
//     errorMessages,
//     stack: process.env.NODE_ENV !== "production" ? error?.stack : undefined,
//   });
// };

// export default globalErrorHandler;
