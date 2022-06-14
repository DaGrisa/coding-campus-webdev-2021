const sum = require("./app");

test("adds 1 + 2 to equal 3", () => {
  // Arrange
  const expectedResult = 3;

  // Act
  const actualResult = sum(1, 2);

  // Assert
  expect(actualResult).toBe(expectedResult);
});
