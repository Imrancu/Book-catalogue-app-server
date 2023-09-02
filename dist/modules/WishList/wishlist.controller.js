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
exports.wishlistController = void 0;
const wishlist_service_1 = require("./wishlist.service");
const createWishListController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const Email = yield ((_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.email);
        const wishlistBookService = yield Object.assign({ Email }, req === null || req === void 0 ? void 0 : req.body);
        const result = yield (0, wishlist_service_1.wishlistService)(wishlistBookService);
        // console.log(result);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Get ReadingList  in successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(404).json({
            success: false,
            statusCode: 404,
            message: "Soming went wrong",
            data: err,
        });
    }
});
const getWishlistBookController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const Email = yield ((_b = req === null || req === void 0 ? void 0 : req.user) === null || _b === void 0 ? void 0 : _b.email);
        const result = yield (0, wishlist_service_1.wishlistServiceGet)(Email);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Get wishList  in successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(404).json({
            success: false,
            statusCode: 404,
            message: "Soming went wrong",
            data: err,
        });
    }
});
const wishlistDeleteController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = yield req.params.id;
        // console.log(id);
        const result = yield (0, wishlist_service_1.wishlistServiceDelete)(id);
        // console.log(result);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Delete wishList  in successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(404).json({
            success: false,
            statusCode: 404,
            message: "Soming went wrong",
            data: err,
        });
    }
});
exports.wishlistController = {
    createWishListController,
    getWishlistBookController,
    wishlistDeleteController,
};
