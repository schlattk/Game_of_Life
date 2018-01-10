'use strict';

var Game = function(x,y){
  this.grid = new Array(x).fill(new Array(y));
};

Game.prototype.seed = function(number){
  for(let i = 0; i < this.grid.length; i++)
    {for(let j = 0; j < this.grid[i].length; j++){
      this.grid[i][j] = Randomizer.random(number);}
  };
};

Game.prototype.scan = function(x,y){
  var live_neighbours = 0;
  var fields = FieldsToCheck.fields(this.grid,x,y);
  for(let i = 0; i < fields.length; i++){if(fields[i] === "X") {live_neighbours ++}};
  return live_neighbours;
};

Game.prototype.move = function(){
  var counters = [];
  var arr = [];
  var new_grid = [];
  for(let i = 0; i < this.grid.length; i++){for(let j = 0; j < this.grid[i].length; j++){
                                            counters.push(this.scan(i,j));
                                            arr.push(this.grid[i][j])}
                                            };
  counters.forEach(function(item,i){if(arr[i] === "X"){counters[i] < 2 || counters[i] > 3 ? arr[i] = "" : arr[i] = "X"}
                                    else {counters[i] === 3 ? arr[i] = "X" : arr[i] = ""}
                            });

  while (arr.length > 0) {new_grid.push(arr.splice(0, this.grid.length));}
  this.grid = new_grid;
};

Game.prototype.print = function(){
  Printer.print(this.grid);
};
