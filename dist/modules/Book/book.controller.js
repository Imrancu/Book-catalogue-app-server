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
exports.bookController = void 0;
const book_service_1 = require("./book.service");
const book_model_1 = require("./book.model");
const createBooksController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const Email = (_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.email;
        const singleBook = yield Object.assign(Object.assign({}, req.body), { Email });
        const book = yield (0, book_service_1.createBooks)(singleBook);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Book added in successfully",
            data: {
                book,
            },
        });
    }
    catch (err) {
        res.status(404).json({
            success: false,
            statusCode: 405,
            message: "Forbidden",
            data: err,
        });
    }
});
const getAllBookController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { Title, Author, Genre, Publication_Date, searchQuery } = req.query;
        const query = {};
        if (Title) {
            query.Title = { $regex: Title, $options: "i" };
        }
        if (Author) {
            query.Author = { $regex: Author, $options: "i" };
        }
        if (Genre) {
            query.Genre = { $regex: Genre, $options: "i" };
            console.log(Genre, "1");
        }
        if (Publication_Date) {
            query.Publication_Date = Publication_Date;
        }
        if (Genre) {
            query.Genre = { $regex: Genre, $options: "i" };
            // console.log(Genre, "1");
        }
        else if (Genre) {
            query.Genre = Genre;
            // console.log(Genre, "2");
        }
        else {
            const searchRegex = new RegExp(searchQuery, "i");
            query.$or = [{ Genre: searchRegex }, { Publication_Date: searchRegex }];
            // console.log(searchQuery);
        }
        const books = yield (book_model_1.Book === null || book_model_1.Book === void 0 ? void 0 : book_model_1.Book.find(query));
        const count = books === null || books === void 0 ? void 0 : books.length;
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Get all Book  in successfully",
            data: {
                count,
                books,
            },
        });
    }
    catch (err) {
        res.status(404).json({
            success: false,
            statusCode: 405,
            message: "Forbidden",
            data: err,
        });
    }
});
const getSingleBooksController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const singlebook = yield (0, book_service_1.getSingleBooks)(id);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Get Single book in successfully",
            data: {
                singlebook,
            },
        });
    }
    catch (err) {
        res.status(404).json({
            success: false,
            statusCode: 405,
            message: "Forbidden",
            data: err,
        });
    }
});
const deleterSingleBooksController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const id = req.params.id;
        const Email = yield ((_b = req === null || req === void 0 ? void 0 : req.user) === null || _b === void 0 ? void 0 : _b.email);
        const isUserCorrect = yield (book_model_1.Book === null || book_model_1.Book === void 0 ? void 0 : book_model_1.Book.findOne({ Email: Email }));
        if (Email === (isUserCorrect === null || isUserCorrect === void 0 ? void 0 : isUserCorrect.Email)) {
            const deleteSinglebook = yield (0, book_service_1.deleteBooks)(id);
            res.status(200).json({
                success: true,
                statusCode: 200,
                message: "Deleted book in successfully",
                data: {
                    deleteSinglebook,
                },
            });
        }
        else {
            res.status(404).json({
                success: false,
                statusCode: 404,
                message: "You are Not user",
            });
        }
    }
    catch (err) {
        res.status(404).json({
            success: false,
            statusCode: 405,
            message: "Forbidden",
            data: err,
        });
    }
});
const updateBookController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    try {
        const id = req.params.id;
        // console.log(id, "ata id");
        const Email = yield ((_c = req === null || req === void 0 ? void 0 : req.user) === null || _c === void 0 ? void 0 : _c.email);
        // console.log(Email, "ata email");
        const isUserCorrect = yield (book_model_1.Book === null || book_model_1.Book === void 0 ? void 0 : book_model_1.Book.findOne({ Email: Email }));
        if (Email === (isUserCorrect === null || isUserCorrect === void 0 ? void 0 : isUserCorrect.Email)) {
            const data = yield req.body;
            const updatedBook = yield (0, book_service_1.updateBooks)(id, data);
            res.status(200).json({
                success: true,
                statusCode: 200,
                message: "Updated Book  in successfully",
                data: {
                    updatedBook,
                },
            });
        }
        else {
            res.status(404).json({
                success: false,
                statusCode: 404,
                message: "You are Not user",
            });
        }
    }
    catch (err) {
        res.status(404).json({
            success: false,
            statusCode: 405,
            message: "Forbidden",
            data: err,
        });
    }
});
exports.bookController = {
    createBooksController,
    getAllBookController,
    getSingleBooksController,
    updateBookController,
    deleterSingleBooksController,
};
