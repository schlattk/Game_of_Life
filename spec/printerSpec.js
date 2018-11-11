describe('Printer', function(){
    it('has a print function', function(){
      expect(printer.print).toBeDefined();
    });
    it(" function to have been called", function () {
      spyOn(printer, 'print');
      var game = new Game(5,5);
      game.seed(0);
      game.print();
      expect(printer.print).toHaveBeenCalled();
    });
});
