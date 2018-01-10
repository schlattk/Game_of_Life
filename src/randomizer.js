var Randomizer = (function(){
  var random = function(number){
      return Math.random() > number ? "X" : "";
  };
  return{random: random};
})();
