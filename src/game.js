'use strict';

var Game = function(x,y){
  this.grid = new Array(x);
  for(let i = 0; i < this.grid.length; i ++){this.grid[i] = new Array(y)};

};

Game.prototype.seed = function(number){
  this.grid.forEach((item) => {for(let j = 0; j < item.length; j++){
      item[j] = Randomizer.random(number);}
  });
  console.log(this.grid);
};

Game.prototype.move = function(){
  var length = this.grid.length;
  var counter_grid = new Array(length);

  for(let i = 0; i < length; i ++){counter_grid[i] = new Array(length)};
  counter_grid.forEach((item) => {for(let j = 0; j < length; j++){item[j] = "";}
                            });

  counter_grid.forEach((item,i) => {for(let j = 0; j < length; j++){
                                            counter_grid[i][j] = Scanner.scan(this.grid,i,j);
                                          }});

  this.grid.forEach((item, i) => {for(let j = 0; j < length; j++){
                                            if(this.grid[i][j] === "X"){counter_grid[i][j] < 2 || counter_grid[i][j] > 3 ? this.grid[i][j] = "" : this.grid[i][j] = "X"}
                                            else {counter_grid[i][j] === 3 ? this.grid[i][j] = "X" : this.grid[i][j] = ""}
                                          }});
  };

Game.prototype.print = function(){
  Printer.print(this.grid);
};
