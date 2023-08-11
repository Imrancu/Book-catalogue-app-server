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
    const token = await req.headers?.authorization;
    // Compare passwords
    //  const passwordMatch = await bcrypt.compare(password, admin.password);

    //  if (!passwordMatch) {
    //    return res.status(401).json({
    //      success: false,
    //      statusCode: 401,
    //      message: "Invalid password",
    //    });
    //  }

    // Generate an access token
    const accessToken = jwt.sign(
      { email: email, name: name, password: password },
      process.env.ACCESS_SECRET as Secret,
      { expiresIn: "1h" }
    );

    const refreshToken = jwt.sign(
      { email: email, name: name, password: password },
      process.env.REFRESH_SECRET as Secret,
      { expiresIn: "7d" }
    );

    // Set the refresh token as a cookie in the response
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });
    let varifiedToken;
    // const token = accessToken;
    //  Verify the token
    varifiedToken = jwt.verify(
      token as string,
      process.env.ACCESS_SECRET as Secret
    );
    // console.log(varifiedToken);
    console.log(varifiedToken);

    res.status(StatusCodes.OK).json({
      statusCode: StatusCodes.OK,
      success: true,
      message: "User retrieved successfully !",
      data: {
        accessToken,
        result,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

const userLoginController: RequestHandler = async (req, res) => {
  try {
    const { password, email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        statusCode: 404,
        message: "User not found",
      });
    }
    console.log(user);

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({
        success: false,
        statusCode: 401,
        message: "Invalid password",
      });
    }
    console.log(passwordMatch);

    // Generate an access token
    const accessToken = jwt.sign(
      { email: email, password: password },
      process.env.ACCESS_SECRET as Secret,
      { expiresIn: "1h" }
    );

    const refreshToken = jwt.sign(
      { email: email, password: password },
      process.env.REFRESH_SECRET as Secret,
      { expiresIn: "7d" }
    );

    // Set the refresh token as a cookie in the response
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "User logged in successfully",
      data: {
        accessToken,
      },
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      statusCode: 405,
      message: "Forbidden",
      data: err,
    });
  }
};

export const userController = {
  userCreateController,
  userLoginController,
};
