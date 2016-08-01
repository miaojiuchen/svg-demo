// var width = 1000;
// var scale = width / 11;
// var rate = 4 * Math.sqrt(3) / 11;
// var height = rate * width;
// var svg = d3.select('#svg')
//   .attr('width', width)
//   .attr('height', height)
//   .attr('style', 'border: 2px solid #303030');

// var dy = 0.5 * Math.sqrt(3) * scale;

// // construct startPointsVertical
// var starts = [0.5];
// for (var i = 0; i < 3; ++i) {
//   var seed = 0.5 + i * 3;
//   starts.push(seed + 1, seed + 1 + 2);
// }
// var seed = 0.5 + 3 * 3;
// starts.push(seed + 1);

// function nextPoint(x, y) {
//   return ' L' + x.toString() + ' ' + y.toString();
// }

// var pathLength = 8 * scale;
// for (var i = 0; i != starts.length; ++i) {
//   var firstDx = (i % 2 === 0 ? -0.5 : 0.5) * scale;
//   var cur_x = starts[i] * scale;
//   var cur_d = 'M' + cur_x + ' 0';
//   for (var j = 1; j != 9; ++j) {
//     var needDx = j % 2 === 0 ? 0 : 1;
//     cur_d += nextPoint(cur_x + firstDx * needDx, j * dy);
//   }

//   svg.append('path')
//     .attr('stroke-dasharray', pathLength.toString() + ' ' + pathLength.toString())
//     .attr('stroke-dashoffset', pathLength.toString())
//     .attr('d', cur_d);
// }

// var paths = svg.selectAll('path').each(
//   function (d, i, nodes) {
//     console.log(d, i, nodes);
//     setTimeout((function () {
//       d3.select(this).attr('stroke-dashoffset', 0);
//     }).bind(this), Math.random() * (500 - 300) + 300);
//   }
// );

// for (var i = 0; i != starts.length; ++i) {

// }




// 1、选择一个基点，向外辐射渲染节点
// 2、

const svg = d3.select('#svg')
  .attr('width', '100%')
  .attr('height', '100%');

const initPoint = {
  x: 200,
  y: 200
};
const edgeSize = 10;
svg.append('path')
  .attr('d', `M${edgeSize}`);

