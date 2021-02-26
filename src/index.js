
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = []
  if (matrix !== undefined && matrix.length !== 0) {
    newArr = matrix.reduce(function(prev, cur, i) {
       return (i%2 == 0) ? prev.concat(cur)  : prev.concat(cur.reverse());
    });
  }
return newArr
}
