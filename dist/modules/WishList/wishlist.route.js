"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wishlistRouter = void 0;
const express_1 = __importDefault(require("express"));
const book_routes_1 = require("../Book/book.routes");
const wishlist_controller_1 = require("./wishlist.controller");
const route = express_1.default.Router();
route.post("/wishlist", book_routes_1.auth, wishlist_controller_1.wishlistController.createWishListController);
route.get("/wishlist", book_routes_1.auth, wishlist_controller_1.wishlistController.getWishlistBookController);
route.delete("/wishlist/:id", book_routes_1.auth, wishlist_controller_1.wishlistController.wishlistDeleteController);
exports.wishlistRouter = route;
