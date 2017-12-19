describe('Printer', function(){
    it('has a print function', function(){
      expect(Printer.print).toBeDefined();
    });
    it("should test for console.log to be triggered", function () {
      console.log = jasmine.createSpy("log");
      var game = new Game(5,5);
      game.seed(0);
      Printer.print(game.grid);
      expect(console.log).toHaveBeenCalled();
    });
});
