describe("Scanner",() => {
    it('counts the number of "X" neighbours for a given cell in the grid', function(){
    game = new Game(10,5);
    game.seed(1);
    expect(Scanner.scan).toBeDefined();
    expect(Scanner.scan(game.grid,2,2)).toEqual(0);
    game.seed(0);
    expect(Scanner.scan).toBeDefined();
    expect(Scanner.scan(game.grid,3,3)).toEqual(8);
    });
    it('counts the number of "X" neighbours correctly for corner cells', function(){
    game = new Game(5,5);
    game.seed(0);
    expect(Scanner.scan(game.grid,0,4)).toEqual(3);
    expect(Scanner.scan(game.grid,4,0)).toEqual(3);
    });
    it('counts the number of "X" neighbours correctly for edge cells', function(){
    game = new Game(5,5);
    game.seed(0);
    expect(Scanner.scan(game.grid,0,1)).toEqual(5);
    expect(Scanner.scan(game.grid,4,2)).toEqual(5);
    });
});