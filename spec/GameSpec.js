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
  it('seed populates the grid with a random number of "X" and ""', function(){
    game = new Game(10,5);
    game.seed(0.5);
    var flat_array = game.grid.reduce((a, b) => a.concat(b), []);
    expect(flat_array).toContain('X');
    expect(flat_array).toContain('');
  })
  it('counts the number of "X" neighbours for a given cell in the grid', function(){
    game = new Game(10,5);
    game.seed(1);
    expect(game.scan).toBeDefined();
    expect(game.scan(2,2)).toEqual(0);
    game.seed(0);
    expect(game.scan).toBeDefined();
    expect(game.scan(3,3)).toEqual(8);
  });
  it('counts the number of "X" neighbours correctly for corner cells', function(){
    game = new Game(5,5);
    game.seed(0);
    expect(game.scan(0,4)).toEqual(3);
    expect(game.scan(4,0)).toEqual(3);
  });
  it('counts the number of "X" neighbours correctly for edge cells', function(){
    game = new Game(5,5);
    game.seed(0);
    expect(game.scan(0,1)).toEqual(5);
    expect(game.scan(4,2)).toEqual(5);
  });

});
