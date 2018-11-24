const extractor = (function () {
  let extract = function () {
    let grid = document.getElementById('grid')
    let extractedArray = []
    let length = grid.getElementsByTagName('rect').length
    for (let i = 0; i < length; i++){
        extractedArray.push(grid.getElementsByTagName('rect')[i].className.baseVal)
      }
      return extractedArray
  }
  return {extract: extract}
})()
