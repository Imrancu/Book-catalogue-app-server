"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readingRouter = void 0;
const express_1 = __importDefault(require("express"));
const ReadingList_Controller_1 = require("./ReadingList.Controller");
const book_routes_1 = require("../Book/book.routes");
const route = express_1.default.Router();
route.post("/readinglist", book_routes_1.auth, ReadingList_Controller_1.readingController.creatReadingBookController);
route.get("/readinglist", book_routes_1.auth, ReadingList_Controller_1.readingController.getReadingBookController);
route.delete("/readinglist/:id", book_routes_1.auth, ReadingList_Controller_1.readingController.deleteReadinglistController);
route.patch("/readinglist/:id", book_routes_1.auth, ReadingList_Controller_1.readingController.updateReadingListController);
exports.readingRouter = route;
