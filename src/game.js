'use strict';

var Game = function(x,y){
  this.grid = new Array(x);
  for(let i = 0; i < this.grid.length; i ++){this.grid[i] = new Array(y)};

};

Game.prototype.seed = function(number){
  this.grid.forEach((item) => {for(let j = 0; j < item.length; j++){
                                item[j] = Randomizer.random(number);}
                              }
                    );
};

Game.prototype.move = function(){
  var length = this.grid.length;
  var counter_grid = new Array(length);
  for(let i = 0; i < length; i ++){counter_grid[i] = new Array(length)};

  counter_grid.forEach((item) => {for(let j = 0; j < length; j++){item[j] = "O";}});

  counter_grid.forEach((item, i) => {for(let j = 0; j < length; j++){item[j] = Scanner.scan(this.grid,i,j);}});

  this.grid.forEach((item, i) => {for(let j = 0; j < length; j++){
                                  if(this.grid[i][j] === "X"){counter_grid[i][j] < 2 || counter_grid[i][j] > 3 ? this.grid[i][j] = "O" : this.grid[i][j] = "X"}
                                  else {counter_grid[i][j] === 3 ? this.grid[i][j] = "X" : this.grid[i][j] = "O"}
                                  }}
                    );
  };

Game.prototype.print = function(){
  let display = document.getElementById("grid");
  let newGrid = new Array(this.grid.length);
  for(let i = 0; i < this.grid[0].length; i ++){newGrid[i] = new Array(this.grid[0].length)};
  let red_element = '<svg class = "red" width="50" height="50"><rect width="50" height="50"/></svg>';
  let blue_element = '<svg class = "blue" width="50" height="50"><rect width="50" height="50"/></svg>';
  this.grid.forEach((item, i) => {for(let j = 0; j < this.grid.length; j++){
                                if(this.grid[i][j] === "X"){newGrid[i][j] = red_element;}
                                else {newGrid[i][j] = blue_element;}
                                }}
                  );
  display.innerHTML = "";
  console.log(newGrid);
  newGrid.forEach((array) =>{display.insertAdjacentHTML('afterbegin',array.join(" ") + "<br>")});


  Printer.print(this.grid);
};
