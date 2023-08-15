import { RequestHandler } from "express";
import {
  createBooks,
  deleteBooks,
  getAllBooks,
  getSingleBooks,
  updateBooks,
} from "./book.service";
import { Book } from "./book.model";

const createBooksController: RequestHandler = async (req, res) => {
  try {
    const singleBook = await req.body;
    const book = await createBooks(singleBook);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Book added in successfully",
      data: {
        book,
      },
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      statusCode: 405,
      message: "Forbidden",
      data: err,
    });
  }
};
const getAllBookController: RequestHandler = async (req, res) => {
  try {
    const { Title, Author, Genre, Publication_Date, searchQuery } = req.query;

    const query: any = {};
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
      console.log(Genre, "1");
    } else if (Genre) {
      query.Genre = Genre;
      console.log(Genre, "2");
    } else {
      const searchRegex = new RegExp(searchQuery as string, "i");
      query.$or = [{ Genre: searchRegex }, { Publication_Date: searchRegex }];
      console.log(searchQuery);
    }

    const books = await Book.find(query);
    const count = books.length;

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Get all Book  in successfully",
      data: {
        count,
        books,
      },
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      statusCode: 405,
      message: "Forbidden",
      data: err,
    });
  }
};
const getSingleBooksController: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const singlebook = await getSingleBooks(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Get Single book in successfully",
      data: {
        singlebook,
      },
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      statusCode: 405,
      message: "Forbidden",
      data: err,
    });
  }
};
const deleterSingleBooksController: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteSinglebook = await deleteBooks(id);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Deleted book in successfully",
      data: {
        deleteSinglebook,
      },
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      statusCode: 405,
      message: "Forbidden",
      data: err,
    });
  }
};
const updateBookController: RequestHandler = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await req.body;
    const updatedBook = await updateBooks(id, data);
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Updated Book  in successfully",
      data: {
        updatedBook,
      },
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      statusCode: 405,
      message: "Forbidden",
      data: err,
    });
  }
};
export const bookController = {
  createBooksController,
  getAllBookController,
  getSingleBooksController,
  updateBookController,
  deleterSingleBooksController,
};
