describe('Game', function(){
  game  = new Game(10,10);
  it('has a game grid', function(){
      expect(game.grid).toBeDefined();
  });
  it('has a grid with dimensions x,y', function(){
    game = new Game(10,5);
    expect(game.grid.length).toBe(10);
    expect(game.grid[9].length).toBe(5);
    expect(game.grid[0].length).toBe(5);
  });
  it('has a function that seeds the grid', function(){
    game = new Game(10,5);
    expect(game.seed).toBeDefined();
  });
  it('populates the grid with a random number of "X" and ""', function(){
    game = new Game(10,5);
    game.seed(0.5);
    var flat_array = game.grid.reduce((a, b) => a.concat(b), []);
    expect(flat_array).toContain('X');
    expect(flat_array).toContain('');
  })
});
