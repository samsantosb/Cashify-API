import { faker } from "@faker-js/faker";
import { User } from "../users/model/user.model";

const mongoId = "634c43c03c18f58508caf9fs";

const mockUser = (overrides: Partial<User> = {}): User => {
  const user = {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    email: faker.internet.email(),
    password: faker.internet.password(),
    balanceId: mongoId,
    ...overrides,
  };
  return user as User;
};

export const fakeUser = mockUser();
