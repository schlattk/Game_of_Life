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

* **Implementation using Javascript with a class and revealing modules**

to run Jasmine tests drag Specrunner into the browser - all tests should be passing

to run the app drag the html file into the browser

Press start/reset to get a new playing grid
press run to let it change every half second according to the rules
press stop to freeze the current grid
press start/reset to start again
