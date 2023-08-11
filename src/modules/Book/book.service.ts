import { IBook } from "./book.interface";
import { Book } from "./book.model";

export const createBooks = async (data: IBook) => {
  const resutl = await Book.create(data);
  return resutl;
};

export const getAllBooks = async () => {
  const result = await Book.find();
  return result;
};
export const getSingleBooks = async (id: string) => {
  const result = await Book.findById({ _id: id });
  return result;
};

export const deleteBooks = async (id: string) => {
  const result = await Book.findByIdAndDelete({ _id: id });
  return result;
};
export const updateBooks = async (id: string, payload: any) => {
  const result = await Book.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
