import { IReadinglist } from "./ReadingList.interface";
import { ReadingList } from "./ReadingList.model";

export const createReadingService = async (data: any) => {
  const service = await ReadingList.create(data);
  return service;
};

export const GetReadingService = async (email: string) => {
  const service = await ReadingList.find({ Email: email })
    .populate("BookId")
    .exec();
  return service;
};

export const ReadingServiceDelete = async (id: string) => {
  const result = await ReadingList.findByIdAndDelete({ _id: id });
  return result;
};

export const ReadingUpdateBooksService = async (id: string, payload: any) => {
  const result = await ReadingList.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};
