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
exports.readingController = void 0;
const ReadingList_service_1 = require("./ReadingList.service");
const creatReadingBookController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const Email = yield ((_a = req === null || req === void 0 ? void 0 : req.user) === null || _a === void 0 ? void 0 : _a.email);
        const readingBook = yield Object.assign({ Email }, req === null || req === void 0 ? void 0 : req.body);
        const result = yield (0, ReadingList_service_1.createReadingService)(readingBook);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Create ReadingList  in successfully",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
        res.status(404).json({
            success: false,
            statusCode: 404,
            message: "Soming went wrong",
            data: err,
        });
    }
});
const getReadingBookController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        const Email = (_b = req === null || req === void 0 ? void 0 : req.user) === null || _b === void 0 ? void 0 : _b.email;
        // console.log(Email);
        const result = yield (0, ReadingList_service_1.GetReadingService)(Email);
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
const deleteReadinglistController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = yield req.params.id;
        const result = yield (0, ReadingList_service_1.ReadingServiceDelete)(id);
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Delete Reading book  in successfully",
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
const updateReadingListController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = yield req.params.id;
        const Status = "Finished";
        const result = yield (0, ReadingList_service_1.ReadingUpdateBooksService)(id, { Status: Status });
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Updated Reading book  in successfully",
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
exports.readingController = {
    creatReadingBookController,
    getReadingBookController,
    deleteReadinglistController,
    updateReadingListController,
};
