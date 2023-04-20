import { fakeUser } from "../../../__mocks__/user.mock";
import { fakeUserModel } from "../../../__mocks__/user.model.mock";
import { UserRepository } from "../details/user.repository";

const userRepository = new UserRepository(fakeUserModel);

describe("UserRepository", () => {
  describe("getAll", () => {
    it("should return an array of users", async () => {
      const users = await userRepository.getAll();
      expect(users).toEqual([fakeUser]);
    });
    it("should return an empty array", async () => {
      jest.spyOn(fakeUserModel, "find").mockResolvedValueOnce(null as any);
      const users = await userRepository.getAll();

      expect(users).toEqual([]);
    });
  });
  describe("getById", () => {
    it("should return a user", async () => {
      const user = await userRepository.getById("3232");
      expect(user).toEqual(fakeUser);
    });
    it("should return an empty object", async () => {
      jest.spyOn(fakeUserModel, "findById").mockResolvedValueOnce(null as any);
      const user = await userRepository.getById("3232");
      expect(user).toEqual({});
    });
  });
  describe("getByEmail", () => {
    it("should return a user", async () => {
      const user = await userRepository.getByEmail("sam@email.com");
      expect(user).toEqual(fakeUser);
    });
    it("should return an empty object", async () => {
      jest.spyOn(fakeUserModel, "findOne").mockResolvedValueOnce(null as any);
      const user = await userRepository.getByEmail("9323");
      expect(user).toEqual({});
    });
  });
  describe("create", () => {
    it("should return a user", async () => {
      jest.spyOn(fakeUserModel, "findOne").mockResolvedValueOnce(null as any);
      const user = await userRepository.create(fakeUser);
      expect(user).toEqual(fakeUser);
    });
    it("should return an empty object", async () => {
      jest.spyOn(fakeUserModel, "findOne").mockResolvedValueOnce(fakeUser);
      const user = await userRepository.create(fakeUser);
      expect(user).toEqual({});
    });
  });
  describe("update", () => {
    it("should return a user", async () => {
      const user = await userRepository.update("3232", fakeUser);
      expect(user).toEqual(fakeUser);
    });
    it("should return an empty object", async () => {
      jest.spyOn(fakeUserModel, "findById").mockResolvedValueOnce(null as any);
      const user = await userRepository.update("3232", fakeUser);
      expect(user).toEqual({});
    });
  });
});
