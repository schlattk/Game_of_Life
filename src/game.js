'use strict';

var Game = function(x,y){
  this.grid = new Array(x);
  for(let i = 0; i < this.grid.length; i ++){this.grid[i] = new Array(y)};
};

Game.prototype.seed = function(number){
  for(let i = 0; i < this.grid.length; i++)
    {for(let j = 0; j < this.grid[i].length; j++){this.grid[i][j] = Math.random() > number ? "X" : "";}
  };
};

Game.prototype.scan = function(x,y){
  var live_neighbours = 0;
  var c = this.grid;
  var check = [c[x][y-1], c[x][y+1]];
  if (c[x-1]){check.push(c[x-1][y], c[x-1][y-1], c[x-1][y+1])};
  if (c[x+1]){check.push(c[x+1][y],c[x+1][y+1], c[x+1][y-1])};
  for(let i = 0; i < check.length; i++){if(check[i] === "X") {live_neighbours ++}};
  return live_neighbours;
};

Game.prototype.move = function(){
  var c = this.grid;
  var counters = [];
  var arr = [];
  var new_grid = [];
  for(let i = 0; i < c.length; i++){for(let j = 0; j < c[i].length; j++){counters.push(this.scan(i,j))}};
  for(let i = 0; i < c.length; i++){for(let j = 0; j < c[i].length; j++){arr.push(c[i][j])}};
  for(let i = 0; i < counters.length; i++){if(arr[i] === "X"){if (counters[i] < 2 || counters[i] > 3){
                                           arr[i] = ""}}
                                           if(arr[i] === ""){if (counters[i] === 3){
                                           arr[i] = "X"}
                                           }
                                          }
    while (arr.length > 0) {
    new_grid.push(arr.splice(0, this.grid.length));
  }
  this.grid = new_grid;
};
