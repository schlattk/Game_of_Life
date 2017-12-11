'use strict';

var Game = function(x,y){
  this.grid = new Array(x);
  for(let i = 0; i < this.grid.length; i ++){this.grid[i] = new Array(y)};
};

Game.prototype.seed = function(number){
  for(let i = 0; i < this.grid.length; i ++)
  {for(let j = 0; j < this.grid[i].length; j++){this.grid[i][j] = Math.random() > number ? "X" : "";}};
};
