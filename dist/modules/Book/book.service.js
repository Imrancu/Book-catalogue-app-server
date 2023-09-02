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
exports.updateBooks = exports.deleteBooks = exports.getSingleBooks = exports.getAllBooks = exports.createBooks = void 0;
const book_model_1 = require("./book.model");
const createBooks = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const resutl = yield book_model_1.Book.create(data);
    return resutl;
});
exports.createBooks = createBooks;
const getAllBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.find();
    return result;
});
exports.getAllBooks = getAllBooks;
const getSingleBooks = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.findById({ _id: id });
    return result;
});
exports.getSingleBooks = getSingleBooks;
const deleteBooks = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.findByIdAndDelete({ _id: id });
    return result;
});
exports.deleteBooks = deleteBooks;
const updateBooks = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_model_1.Book.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
exports.updateBooks = updateBooks;
