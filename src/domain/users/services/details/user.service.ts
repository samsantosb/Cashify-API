import { User } from "../../model/user.model";
import { IUserRepository } from "../../repositories/user.repository.interface";

class UserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async getAll() {
    return this.userRepository.getAll();
  }

  async getById(id: string) {
    return this.userRepository.getById(id);
  }

  async getByEmail(email: string) {
    return this.userRepository.getByEmail(email);
  }

  async create(user: User) {
    return this.userRepository.create(user);
  }

  async update(id: string, user: User) {
    return this.userRepository.update(id, user);
  }
}
