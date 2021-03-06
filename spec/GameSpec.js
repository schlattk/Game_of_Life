describe('Game', function () {
  let game  = new Game(10, 10);
  it('has a game grid', () => {
      expect(game.grid).toBeDefined();
  });
  it('has a grid with dimensions x, y', () => {
    game = new Game(10, 5);
    expect(game.grid.length).toBe(10);
    expect(game.grid[9].length).toBe(5);
    expect(game.grid[0].length).toBe(5);
  });
  it('has a function that seeds the grid', () => {
    game = new Game(10, 5);
    expect(game.seed).toBeDefined();
  });
  it('seed populates the grid with a random number of X and O', () => {
    game = new Game(20, 20);
    game.seed(0.5);
    let flat_array = game.grid.reduce((a, b) => a.concat(b), []);
    expect(flat_array).toContain('X');
    expect(flat_array).toContain('O');
  })
  it('changes the cells according to the rules of Game of Life example 1 ', () => {
    game = new Game(5, 5);
    game.seed(0)
    game.move();
    expect(game.grid[2][2]).toEqual('O');
    expect(game.grid[0][0]).toEqual('X');
    expect(game.grid[2][4]).toEqual('O');
  });
  it('changes the cells according to the rules of Game of Life example 2', () => {
    game = new Game(5, 5);
    game.seed(1);
    game.grid[1][1] = 'X';
    game.grid[0][1] = 'X';
    game.grid[2][1] = 'X';
    game.move();
    expect(game.grid[1][1]).toEqual('X');
    expect(game.grid[1][2]).toEqual('X');
    expect(game.grid[2][4]).toEqual('O');
  });
});
