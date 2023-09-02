"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("./user.service");
const http_status_codes_1 = require("http-status-codes");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = require("./user.model");
const userCreateController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password, name, email } = yield req.body;
        const user = { password, name, email };
        const result = yield (0, user_service_1.createUser)(user);
        // console.log(result);
        res.status(http_status_codes_1.StatusCodes.OK).json({
            statusCode: http_status_codes_1.StatusCodes.OK,
            success: true,
            message: "User Register successfully !Please Login",
            data: {
                result,
            },
        });
    }
    catch (err) {
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST,
            success: false,
            message: "User not SignIn successfully !",
            err: err,
        });
    }
});
const userLoginController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { password, email, _id } = yield req.body;
        const user = yield user_model_1.User.findOne({ email });
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
        const passwordMatch = yield bcrypt_1.default.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({
                success: false,
                statusCode: 401,
                message: "Invalid password",
            });
        }
        // console.log(passwordMatch);
        // Generate an access token
        const accessToken = jsonwebtoken_1.default.sign({ email: email, password: password, id: _id }, process.env.ACCESS_SECRET, { expiresIn: "7d" });
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
    }
    catch (err) {
        res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).json({
            statusCode: http_status_codes_1.StatusCodes.UNAUTHORIZED,
            success: false,
            message: "UNAUTHORIZED USER",
            err: err,
        });
    }
});
exports.userController = {
    userCreateController,
    userLoginController,
};
