describe("Randomizer", () => {
  it("should return a X or empty string based on a seed example => ' '' ", () => {
    var game = new Game(5,5);
    var fill = Randomizer.random(1);
    expect(fill).toEqual("");
  });
  it("should return a X or empty string based on a seed example => X ", () => {
    var game = new Game(5,5);
    var fill = Randomizer.random(0);
    expect(fill).toEqual("X");
  });
});
