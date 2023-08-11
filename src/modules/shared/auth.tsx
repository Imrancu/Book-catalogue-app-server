// const { Response } = require("express");
// const { NextFunction, Request, RequestHandler, Response } = require("express");
// const { NextFunction, Request, RequestHandler, Response } = require("express");
// const express = require('express');
// import { StatusCodes } from "http-status-codes";
// import jwt, { Secret } from "jsonwebtoken";
// // import ApiError from "../error/ApiError";
// // // import ApiError from "../errors/ApiError";

// export async function auth(req: any, res: any, next: any) {
//   const authHeader = await req.headers.authorization;
//   if (!authHeader) {
//     return res.status(401).send({
//       message: "UnAuthorized access",
//     });
//   }
//   const token = authHeader.split(" ")[1];
//   // verify a token symmetric
//   jwt.verify(
//     token,
//     process.env.ACCESS_SECRET as Secret,
//     function (err: any, decoded: any) {
//       if (err) {
//         return res.status(403).send({ message: "Forbidden Access" });
//       }
//       req.decoded = decoded;
//       console.log(decoded);
//     }
//   );

//   next();
// }

// const auth :RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
//   let varifiedToken;
//   try {
//     //get authorization token
//     const token = await req.headers?.authorization;
//     // console.log(token);

//     if (!token) {
//       throw new ApiError(StatusCodes.UNAUTHORIZED, "unauthorized user");
//     }
//     //Verify the token
//     varifiedToken = jwt.verify(token, process.env.ACCESS_SECRET as Secret);
//     // console.log(varifiedToken);

//     req?.user = varifiedToken;
//     // console.log(req.user);

//     // Get the user from the database based on the decoded user ID
//     // const user = await User.findById({ _id: varifiedToken.id });
//     // const admin = await Admin.findById({ _id: varifiedToken.id });

//     // if (!user || !admin) {
//     //   return res.status(401).json({ message: "Unauthorized" });
//     // }

//     // Add the user object to the request for further use
//     // req.user = user;
//     // req.admin = admin;
//     // console.log(user);

//     next();
//   } catch (err) {
//     next(err);
//     console.log(err);

//     return res.status(401).json({
//       success: true,
//       statusCode: 401,
//       message: err,
//     });
//   }
// };

// export default auth;
