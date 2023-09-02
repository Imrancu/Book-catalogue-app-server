"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = exports.auth = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = express_1.default.Router();
const auth = (req, res, next) => {
    var _a;
    // console.log(req.body);
    let authToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    try {
        let decoded = jsonwebtoken_1.default.verify(authToken, process.env.ACCESS_SECRET);
        req.user = decoded;
        // console.log(decoded, req.user);
        next();
    }
    catch (err) {
        // err
        return res.status(404).send({ message: "unAuthorized Access" });
    }
};
exports.auth = auth;
router.post("/create-book/", exports.auth, book_controller_1.bookController.createBooksController);
router.get("/book/", book_controller_1.bookController.getAllBookController);
router.get("/book/:id", book_controller_1.bookController.getSingleBooksController);
router.patch("/book/:id", exports.auth, book_controller_1.bookController.updateBookController);
router.delete("/book/:id", exports.auth, book_controller_1.bookController.deleterSingleBooksController);
exports.bookRouter = router;
