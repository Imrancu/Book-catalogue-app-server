import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUser = async (user: IUser) => {
  const result = await User.create(user);
  // console.log(user);

  if (!result) {
    throw new Error("Server Error");
  }
  return result;
};
// export const loginUser = async (user:string) => {
//   const result = await User.create(user);
//   // console.log(user);

//   if (!result) {
//     throw new Error("Server Error");
//   }
//   return result;
// };
