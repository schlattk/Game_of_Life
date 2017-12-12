# Game_of_Life
Conway's Game of Life

The rules are as follows:

The game evolves in turns, commonly known as 'ticks'.
All changes occur at the same time.
Any live cell with 2 or 3 live neighbours survives until next tick.
Any live cell with less than 2 live neighbours dies (underpopulation).
Any live cell with more than 3 live neighbours dies (overpopulation).
Any dead cell with exactly 3 neighbours becomes a live cell (reproduction).
Write code that is capable of calculating each new generation, given a starter board. Although you don't have to build a visualisation tool to be able to see the evolution, it should be easy to extend the program to add on a web or command line ui.

##Implementation using Javascript prototype method

##Console instructions below
###the seed takes an argument between 0 and 1 - the lower the input the bigger the population
###instantiating the game takes two arguments - the height and the width of the grid
###the move function makes the one step changes according to the rules of the game

1. game = new Game(5,5);

2. game.seed(0.2);

3. game.print();

*  (5) [Array(5), Array(5), Array(5), Array(5), Array(5)]

*  (5) ["", "X", "X", "X", "X"]

*  (5) ["", "X", "X", "X", "X"]

*  (5) ["", "X", "X", "X", "X"]

*  (5) ["X", "X", "", "X", "X"]

*  (5) ["X", "X", "", "X", ""]

4. game.move();

5. game.print();

*  (5) [Array(5), Array(5), Array(5), Array(5), Array(5)]

*  (5) ["", "X", "", "", "X"]

*  (5) ["X", "", "", "", ""]

*  (5) ["", "", "", "", ""]

*  (5) ["", "", "", "", ""]

*  (5) ["X", "X", "", "X", "X"]
