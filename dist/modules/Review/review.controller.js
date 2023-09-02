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
Object.defineProperty(exports, "__esModule", { value: true });
exports.reviewController = void 0;
const review_service_1 = require("./review.service");
const http_status_codes_1 = require("http-status-codes");
const createReviewController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const review = yield req.body;
        const result = yield (0, review_service_1.createReviewService)(review);
        console.log(result);
        res.status(http_status_codes_1.StatusCodes.OK).json({
            success: true,
            statusCode: 200,
            message: "Review added in successfully",
            data: {
                result,
            },
        });
    }
    catch (err) {
        console.log(err);
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            success: false,
            statusCode: 404,
            message: "Something went wrong",
            data: err,
        });
    }
});
const getReviewController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.bookId;
        // console.log(id);
        const result = yield (0, review_service_1.getReviewService)(id);
        // console.log(result);
        res.status(http_status_codes_1.StatusCodes.OK).json({
            success: true,
            statusCode: 200,
            message: "Review get in successfully",
            data: {
                result,
            },
        });
    }
    catch (err) {
        res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
            success: false,
            statusCode: 404,
            message: "Something went wrong",
            data: err,
        });
    }
});
exports.reviewController = {
    createReviewController,
    getReviewController,
};
