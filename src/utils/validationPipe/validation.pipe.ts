import joi from "joi";
import { User } from "../../domain/users/model/user.model";
import { userSchema } from "./joi/user.schema";

export class ValidationPipe {
  constructor() {}

  validateUser(user: User) {
    const { error, value } = userSchema.validate(user);

    if (error) {
      throw new Error(String(error));
    }

    return value;
  }
}
