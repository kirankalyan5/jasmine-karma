describe("Jagat Math which must work as it's by Jagat", function() {
  it("Should add two operands", function() {
    // Arrange

    // Assign
    var result = JagatMath.add(4, 6);

    // Assert
    expect(result).toEqual(10);
  });

  it("Should multiply two operands", function() {
    // Arrange

    // Assign
    var result = JagatMath.multiply(4, 6);

    // Assert
    expect(result).toEqual(24);
  });
});
