import { User } from "../model/user.model";

export interface IUserRepository {
  getAll(): Promise<User[]>;
  getById(id: string): Promise<User | {}>;
  getByEmail(email: string): Promise<User | {}>;
  create(user: User): Promise<User | {}>;
  update(id: string, user: User): Promise<User | {}>;
}
