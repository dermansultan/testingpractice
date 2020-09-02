const calculator = require("./calculator");

test("Add two numbers together", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("subtract two numbers together", () => {
  expect(calculator.subtract(2, 1)).toBe(1);
});

test("Multiply two numbers together", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test("divide two numbers together", () => {
  expect(calculator.divide(10, 5)).toBe(2);
});
