'use strict';
const scanner = ( function () {
  let scan = function (grid, x, y) {
    let live_neighbours = 0;
    let fields = fieldsToCheck.fields(grid, x, y);
    fields.forEach((item) => { if (item === 'X'){ live_neighbours ++ } });
    return live_neighbours;
    };
  return { scan: scan }
})();
