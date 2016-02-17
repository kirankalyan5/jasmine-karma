describe("Hello", function() {
  it("Should say hello", function() {
    // Hello(); // "Hello"
    expect(Hello()).toEqual("Hello");
  });
});
