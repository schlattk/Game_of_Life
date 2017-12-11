'use strict';

var Game = function(x,y){
  this.grid = new Array(x);
  for(let i = 0; i < this.grid.length; i ++){this.grid[i] = new Array(y)};
};

Game.prototype.seed = function(number){
  for(let i = 0; i < this.grid.length; i ++)
  {for(let j = 0; j < this.grid[i].length; j++){this.grid[i][j] = Math.random() > number ? "X" : "";}};
};

Game.prototype.scan = function(x,y){
  var live_neighbours = 0;
  var c = this.grid;
  var check = [c[x][y-1], c[x][y+1]];
  if (c[x-1]){check.push(c[x-1][y], c[x-1][y-1], c[x-1][y+1])};
  if (c[x+1]){check.push(c[x+1][y],c[x+1][y+1], c[x+1][y-1])};
  for(let i = 0; i < check.length; i++){if(check[i]){if(check[i] === "X") {live_neighbours ++}}};
  return live_neighbours;
};
