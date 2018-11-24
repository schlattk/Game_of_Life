'use strict';

const form = document.getElementById('form');
const grid = document.getElementById('grid');
form.addEventListener('click',function (event) {
const data = event.target.getAttribute('data-action')
if ( data === 'reset-button'){ initializer.init(40,40) }
else if (data === 'start-button') { extractor.extract(); startStop.run() }
else if (data === 'make-button') { initializer.blank(40,40); changeGrid() }
else { startStop.stop(); }
});

const changeGrid = function () {
  grid.addEventListener('click', function (event) {
    let aim = event.target;
    let el = aim.getAttribute('class');
    el === "blue" ? aim.setAttribute("class", "red") : aim.setAttribute("class", "blue");
  });
};
