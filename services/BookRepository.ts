const Book = require('../models/Book');
import { injectable } from "inversify";

export interface IBook {
    fileBook?: string;
    id: string;
    title: string;
    description: string;
    authors: string;
    favorite: string;
    fileCover: string;
    fileName: string;
}

export interface IBookRepository {
    createBook(book: IBook): Promise<IBook>

    getBook(id: string): Promise<IBook>

    getBooks(): Promise<IBook[]>

    updateBook(id: string, data: any): Promise<IBook>

    deleteBook(id: string): Promise<void>
}

@injectable()
export default class BookRepository implements IBookRepository {
    async createBook(data: IBook): Promise<IBook> {
        const book = new Book(data);
        await book.save();
        return book;
    }

    async getBook(id: string): Promise<IBook> {
        return await Book.findById(id);
    }

    async getBooks(): Promise<IBook[]> {
        return await Book.find();
    }

    async updateBook(id: string, data: any): Promise<IBook> {
        return await Book.findByIdAndUpdate(id, data)
    }

    async deleteBook(id: string): Promise<void> {
        await Book.deleteOne({_id: id})
    }
}
