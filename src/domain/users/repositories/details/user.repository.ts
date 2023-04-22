import { IUserRepository } from "../user.repository.interface";
import { IUserModel, User } from "./../../model/user.model";
import { UserEntityDTO } from "../../dtos/user.entity.dto";

export class UserRepository implements IUserRepository {
  constructor(private readonly userModel: IUserModel) {}

  async getAll() {
    const users = await this.userModel.find();

    if (!users) {
      return [];
    }

    return users;
  }

  async getById(id: string) {
    const user = await this.userModel.findById(id);

    if (!user) {
      return {};
    }

    return user;
  }

  async getByEmail(email: string) {
    const user = await this.userModel.findOne({ email });

    if (!user) {
      return {};
    }

    return user;
  }

  async create(user: User) {
    const userExists = await this.userModel.findOne({ email: user.email });

    if (userExists) {
      return {};
    }

    return this.userModel.create(user);
  }

  async update(id: string, user: User) {
    const userExists = await this.userModel.findById(id);

    if (!userExists) {
      return {};
    }

    const updatedUser = await this.userModel.findByIdAndUpdate(id, user);

    if (!updatedUser) {
      return {};
    }

    return updatedUser;
  }
}
