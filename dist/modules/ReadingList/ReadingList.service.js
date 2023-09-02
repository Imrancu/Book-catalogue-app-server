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
exports.ReadingUpdateBooksService = exports.ReadingServiceDelete = exports.GetReadingService = exports.createReadingService = void 0;
const ReadingList_model_1 = require("./ReadingList.model");
const createReadingService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield ReadingList_model_1.ReadingList.create(data);
    return service;
});
exports.createReadingService = createReadingService;
const GetReadingService = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield ReadingList_model_1.ReadingList.find({ Email: email })
        .populate("BookId")
        .exec();
    return service;
});
exports.GetReadingService = GetReadingService;
const ReadingServiceDelete = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ReadingList_model_1.ReadingList.findByIdAndDelete({ _id: id });
    return result;
});
exports.ReadingServiceDelete = ReadingServiceDelete;
const ReadingUpdateBooksService = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ReadingList_model_1.ReadingList.findByIdAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
exports.ReadingUpdateBooksService = ReadingUpdateBooksService;
