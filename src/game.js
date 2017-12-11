'use strict';

var Game = function(x,y){
  this.grid = new Array(x);
  for(let i = 0; i < this.grid.length; i ++){this.grid[i] = new Array(y)};
}



// for(let i = 0; i<x.length; i++){for (let j = 0; i<x.length; i++){x[i][j] = Math.random > 0.5 "X" : ""}};
