'use strict';

var Game = function(x,y){
  this.grid = new Array(x).fill(new Array(y));
};

Game.prototype.seed = function(number){
  this.grid.forEach((item) => {for(let j = 0; j < item.length; j++){
      item[j] = Randomizer.random(number);}
  });
};

Game.prototype.scan = function(x,y){
  var live_neighbours = 0;
  var fields = FieldsToCheck.fields(this.grid,x,y);
  fields.forEach((item) => {if (item === "X"){live_neighbours ++}});
  return live_neighbours;
};

Game.prototype.move = function(){
  var counters = [];
  var arr = [];
  var new_grid = [];
  this.grid.forEach((item,i) => {for(let j = 0; j < item.length; j++){
                                            counters.push(this.scan(i,j));
                                            arr.push(item[j])}
                      });
  counters.forEach((item,i) => {if(arr[i] === "X"){item < 2 || item > 3 ? arr[i] = "" : arr[i] = "X"}
                                    else {item === 3 ? arr[i] = "X" : arr[i] = ""}
                            });

  while (arr.length > 0) {new_grid.push(arr.splice(0, this.grid.length));}
  this.grid = new_grid;
};

Game.prototype.print = function(){
  Printer.print(this.grid);
};
