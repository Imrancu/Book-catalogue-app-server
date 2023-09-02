"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
// import globalErrorHandler from "./globalHandleError";
const globalErrorHandler = (error, req, res, next) => {
    console.log(error);
    next();
};
exports.globalErrorHandler = globalErrorHandler;
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
