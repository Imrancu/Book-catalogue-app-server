"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const express_1 = __importDefault(require("express"));
// import { globalErrorHandler } from "./modules/shared/globalErrorHandler";
// import { userRouter } from "./modules/user/user.router";
// import globalErrorHandler from "./modules/shared/globalErrorHandler";
// import cowRouter from "./modules/cow/cow.routes";
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const user_routes_1 = require("./modules/user/user.routes");
const book_routes_1 = require("./modules/Book/book.routes");
const review_route_1 = require("./modules/Review/review.route");
const ReadingList_Route_1 = require("./modules/ReadingList/ReadingList.Route");
const wishlist_route_1 = require("./modules/WishList/wishlist.route");
// import orderRouter from "./modules/orders/order.router";
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send({
            message: "UnAuthorized access",
        });
    }
    const token = authHeader.split(" ")[1];
    // verify a token symmetric
    jsonwebtoken_1.default.verify(token, process.env.ACCESS_SECRET, function (err, decoded) {
        if (err) {
            return res.status(403).send({ message: "Forbidden Access" });
        }
        req.decoded = decoded;
        console.log(decoded);
    });
    next();
};
exports.auth = auth;
app.use("/api/v1/", user_routes_1.userRouter);
app.use("/api/v1/", book_routes_1.bookRouter);
app.use("/api/v1/", review_route_1.reviewRouter);
app.use("/api/v1/", ReadingList_Route_1.readingRouter);
app.use("/api/v1/", wishlist_route_1.wishlistRouter);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
// app.use(globalErrorHandler);
exports.default = app;
module.exports = app;
