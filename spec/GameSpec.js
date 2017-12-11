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
  })

});
