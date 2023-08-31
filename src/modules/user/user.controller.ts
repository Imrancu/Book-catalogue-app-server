import { RequestHandler } from "express";
import { createUser } from "./user.service";
import { StatusCodes } from "http-status-codes";
import jwt, { Secret } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User } from "./user.model";

const userCreateController: RequestHandler = async (req, res) => {
  try {
    const { password, name, email } = await req.body;
    const user = { password, name, email };
    const result = await createUser(user);
    // console.log(result);

    res.status(StatusCodes.OK).json({
      statusCode: StatusCodes.OK,
      success: true,
      message: "User Register successfully !Please Login",
      data: {
        result,
      },
    });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({
      statusCode: StatusCodes.BAD_REQUEST,
      success: false,
      message: "User not SignIn successfully !",
      err: err,
    });
  }
};

const userLoginController: RequestHandler = async (req, res) => {
  try {
    const { password, email, _id } = await req.body;
    const user = await User.findOne({ email });
    // console.log(user);

    if (!user) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: "User not found",
      });
    }
    // console.log(user);

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        statusCode: 401,
        message: "Invalid password",
      });
    }
    // console.log(passwordMatch);

    // Generate an access token
    const accessToken = jwt.sign(
      { email: email, password: password, id: _id },
      process.env.ACCESS_SECRET as Secret,
      { expiresIn: "7d" }
    );

    // const refreshToken = jwt.sign(
    //   { email: email, password: password, id: _id },
    //   process.env.REFRESH_SECRET as Secret,
    //   { expiresIn: "7d" }
    // );

    // Set the refresh token as a cookie in the response
    // res.cookie("refreshToken", refreshToken, {
    //   httpOnly: true,
    // });

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User logged in successfully",
      data: {
        accessToken,
      },
    });
  } catch (err) {
    res.status(StatusCodes.UNAUTHORIZED).json({
      statusCode: StatusCodes.UNAUTHORIZED,
      success: false,
      message: "UNAUTHORIZED USER",
      err: err,
    });
  }
};

export const userController = {
  userCreateController,
  userLoginController,
};
