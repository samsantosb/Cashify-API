import { UserModel, User } from "./../users/model/user.model";
import { IUserModel } from "./../users/model/user.model";
import { fakeUser } from "./user.mock";

export const fakeUserModel = {
  find: () => Promise.resolve([fakeUser]),
  findById: () => Promise.resolve(fakeUser),
  findOne: () => Promise.resolve(fakeUser),
  create: () => Promise.resolve(fakeUser),
  findByIdAndUpdate: () => Promise.resolve(fakeUser),
} as unknown as IUserModel;
