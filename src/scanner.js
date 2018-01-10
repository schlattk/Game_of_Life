var Scanner = (function(){
  var scan = function(grid,x,y){
    var live_neighbours = 0;
    var fields = FieldsToCheck.fields(grid,x,y);
    fields.forEach((item) => {if (item === "X"){live_neighbours ++}});
    return live_neighbours;};
  return {scan: scan}
})();
