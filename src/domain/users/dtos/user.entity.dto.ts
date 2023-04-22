import { User } from "../model/user.model";
import { ValidationPipe } from "../../../utils/validationPipe/validation.pipe";

export class UserEntityDTO extends ValidationPipe {
  constructor(user: User) {
    super();
    return this.validateUser(user);
  }
}
