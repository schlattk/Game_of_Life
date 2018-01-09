var FieldsToCheck = (function(){

  var checkFields = function(grid,x,y){
    var fields = [grid[x][y-1], grid[x][y+1]];
    if (grid[x-1]){fields.push(grid[x-1][y], grid[x-1][y-1], grid[x-1][y+1])};
    if (grid[x+1]){fields.push(grid[x+1][y], grid[x+1][y+1], grid[x+1][y-1])};
    return fields;
  };
  return {fields :checkFields}
})();
