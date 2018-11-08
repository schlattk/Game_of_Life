var game;
var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var resetButton = document.getElementById('reset');

const initializer = function(x,y){

        game = "";
        game = new Game(x,y)
        game.seed(0.5);
        game.print();
};

const functionCall = function(){
  game.move();
  game.print();
};

var starter;

var run = function() {
      starter = setInterval(functionCall, 500);
    };

var stop = function() {
      clearInterval(starter);
    };

resetButton.addEventListener('click',function(){initializer(40,40)});
startButton.addEventListener('click',run);
stopButton.addEventListener('click',stop);
