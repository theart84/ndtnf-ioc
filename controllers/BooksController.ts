import "reflect-metadata";
import BookRepository, { IBookRepository } from '../services/BookRepository';
import { Container } from "inversify";

const container = new Container();
container.bind(BookRepository).toSelf();

const service = container.get(BookRepository);

class BooksController {
  service: IBookRepository
  constructor(service) {
    this.service = service;
  }
  getBooks = async (req, res) => {
    const data = await this.service.getBooks();
    res.render('index', {
      title: 'Главная',
      books: data
    });
  }

  getBook = async (req, res) => {
    const {id} = req.params;
    const book = await this.service.getBook(id);
    if (book) {
      res.render('view', {
        title: 'Главная',
        book
      });
    } else {
      res.status(404).redirect('error/404');
    }
  }

  createBookGet = (req, res) => {
    res.render('create', {
      title: 'Главная',
      book: [],
    });
  }

  createBookPost = async (req, res) => {
    const {title, description, authors, favorite, fileCover, fileName} = req.body;
    let fileBook = '';
    if (req.file) {
      fileBook = req.file.path;
    }
    const book = await this.service.createBook({
      id: "",
      title,
      description,
      authors,
      favorite,
      fileCover,
      fileName,
      fileBook
    });
    res.status(200).redirect('/')
  }

  updateBookGet = async (req, res) => {
    const {title, description, authors, favorite, fileCover, fileName} = req.body;
    const {id} = req.params;
    const book = await this.service.getBook(id);
    if (book) {
      res.render('update', {
        title: book.title,
        book: book,
      });
    } else {
      res.status(404).redirect('error/404');
    }
  }

  updateBookPost = async (req, res) => {
    const {id} = req.params;
    const findBook = await this.service.getBook(id);
    let fileBook = '';
    if (req.file) {
      fileBook = req.file.path;
    } else {
      fileBook = findBook.fileBook
    }
    console.log(fileBook)
    const updateData = {
      ...req.body,
      fileBook
    }
    const book = await this.service.updateBook(id, updateData);
    if (book) {
      res.status(200).redirect(`/books/update/${id}`);
    } else {
      res.status(404).redirect('error/404');
    }
  }

  deleteBook = async (req, res) => {
    const {id} = req.params;
    await this.service.deleteBook(id)
    res.status(200).redirect('/');
  }
}

module.exports = new BooksController(service);
