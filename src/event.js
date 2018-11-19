'use strict';

const form = document.getElementById('form');

form.addEventListener('click',function(event){
  const data = event.target.getAttribute('data-action')
  if (data === 'reset-button'){initializer.init(40,40)}
  else if (data === 'start-button'){startStop.run()}
  else {startStop.stop()};
});
