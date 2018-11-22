'use strict';

const form = document.getElementById('form');
const grid = document.getElementById('grid');
form.addEventListener('click',function (event) {
const data = event.target.getAttribute('data-action')
if ( data === 'reset-button'){ initializer.init(40,40) }
else if ( data === 'start-button') { startStop.run(); }
else { startStop.stop(); }
});

// grid.addEventListener('click', function (event) {
//     let aim = event.target;
//     let el = aim.getAttribute('class');
//     el === "blue" ? aim.setAttribute("class", "red") : aim.setAttribute("class", "blue");
// });



//let el = grid.getElementsByTagName('rect')[41].className.baseVal;
