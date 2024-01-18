import ErrorRepository from "../app";

const repository = new ErrorRepository();
repository.errors.set(404, "Not Found");
repository.errors.set(408, "Request Timeout");
repository.errors.set(504, "Gateway Timeout");

test("известная ошибка", () => {
  expect(repository.translate(504)).toBe("Gateway Timeout");
});

test("неизвестная ошибка", () => {
  expect(repository.translate(501)).toBe("Unknown error");
});
