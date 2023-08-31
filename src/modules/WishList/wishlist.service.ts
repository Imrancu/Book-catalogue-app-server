import { IWishlist } from "./wishlist.interface";
import { WishList } from "./wishlist.model";

export const wishlistService = async (data: IWishlist) => {
  const result = await WishList.create(data);
  return result;
};
export const wishlistServiceGet = async (email: string) => {
  const result = await WishList.find({ Email: email })
    .populate("BookId")
    .exec();
  return result;
};

export const wishlistServiceDelete = async (id: string) => {
  const result = await WishList.findByIdAndDelete({ _id: id });
  // console.log(result);
  return result;
};
