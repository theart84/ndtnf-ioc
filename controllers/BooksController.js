"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var BookRepository_1 = require("../services/BookRepository");
var inversify_1 = require("inversify");
var container = new inversify_1.Container();
container.bind(BookRepository_1.default).toSelf();
var service = container.get(BookRepository_1.default);
var BooksController = /** @class */ (function () {
    function BooksController(service) {
        var _this = this;
        this.getBooks = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.getBooks()];
                    case 1:
                        data = _a.sent();
                        res.render('index', {
                            title: 'Главная',
                            books: data
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        this.getBook = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, book;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, this.service.getBook(id)];
                    case 1:
                        book = _a.sent();
                        if (book) {
                            res.render('view', {
                                title: 'Главная',
                                book: book
                            });
                        }
                        else {
                            res.status(404).redirect('error/404');
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.createBookGet = function (req, res) {
            res.render('create', {
                title: 'Главная',
                book: [],
            });
        };
        this.createBookPost = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, title, description, authors, favorite, fileCover, fileName, fileBook, book;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, title = _a.title, description = _a.description, authors = _a.authors, favorite = _a.favorite, fileCover = _a.fileCover, fileName = _a.fileName;
                        fileBook = '';
                        if (req.file) {
                            fileBook = req.file.path;
                        }
                        return [4 /*yield*/, this.service.createBook({
                                id: "",
                                title: title,
                                description: description,
                                authors: authors,
                                favorite: favorite,
                                fileCover: fileCover,
                                fileName: fileName,
                                fileBook: fileBook
                            })];
                    case 1:
                        book = _b.sent();
                        res.status(200).redirect('/');
                        return [2 /*return*/];
                }
            });
        }); };
        this.updateBookGet = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var _a, title, description, authors, favorite, fileCover, fileName, id, book;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, title = _a.title, description = _a.description, authors = _a.authors, favorite = _a.favorite, fileCover = _a.fileCover, fileName = _a.fileName;
                        id = req.params.id;
                        return [4 /*yield*/, this.service.getBook(id)];
                    case 1:
                        book = _b.sent();
                        if (book) {
                            res.render('update', {
                                title: book.title,
                                book: book,
                            });
                        }
                        else {
                            res.status(404).redirect('error/404');
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.updateBookPost = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id, findBook, fileBook, updateData, book;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, this.service.getBook(id)];
                    case 1:
                        findBook = _a.sent();
                        fileBook = '';
                        if (req.file) {
                            fileBook = req.file.path;
                        }
                        else {
                            fileBook = findBook.fileBook;
                        }
                        console.log(fileBook);
                        updateData = __assign(__assign({}, req.body), { fileBook: fileBook });
                        return [4 /*yield*/, this.service.updateBook(id, updateData)];
                    case 2:
                        book = _a.sent();
                        if (book) {
                            res.status(200).redirect("/books/update/" + id);
                        }
                        else {
                            res.status(404).redirect('error/404');
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        this.deleteBook = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
            var id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        return [4 /*yield*/, this.service.deleteBook(id)];
                    case 1:
                        _a.sent();
                        res.status(200).redirect('/');
                        return [2 /*return*/];
                }
            });
        }); };
        this.service = service;
    }
    return BooksController;
}());
module.exports = new BooksController(service);
