// var path1 = document.getElementById('path1'), path2 = document.getElementById('path2');;
// setInterval(function(){
// 	if(path1.style['stroke-dashoffset'] === '647'){
// 		path1.style['stroke-dashoffset'] = 0;
// 	}else{
// 		path1.style['stroke-dashoffset'] = 647;
// 	}

// 	setTimeout(function(){
// 		if(path2.style['stroke-dashoffset'] === '1146'){
// 			path2.style['stroke-dashoffset'] = 0;
// 		}else{
// 			path2.style['stroke-dashoffset'] = 1146;
// 		}
// 	},1000);
// },1000);

var svgNS = "http://www.w3.org/2000/svg";
var width = 1000;
var scale = width / 11;
var rate = 4 * Math.sqrt(3) / 11;
var height = rate * width;
var svg = d3.select('#svg')
  .attr('width', width)
  .attr('height', height)
  .attr('style', 'border: 2px solid #303030');

var dy = 0.5 * Math.sqrt(3) * scale;

// construct startPointsVertical
var startsHorizontal = [0.5];
for (var i = 0; i < 3; ++i) {
  var seed = 0.5 + i * 3;
  startsHorizontal.push(seed + 1, seed + 1 + 2);
}
var seed = 0.5 + 3 * 3;
startsHorizontal.push(seed + 1);

function nextPoint(x, y) {
  return ' L' + x.toString() + ' ' + y.toString();
}

var pathLength = 8 * scale;
for (var i = 0; i != startsHorizontal.length; ++i) {
  var firstDx = (i % 2 === 0 ? -0.5 : 0.5) * scale;
  var cur_x = startsHorizontal[i] * scale;
  var cur_d = 'M' + cur_x + ' 0';
  for (var j = 1; j != 9; ++j) {
    var needDx = j % 2 === 0 ? 0 : 1;
    cur_d += nextPoint(cur_x + firstDx * needDx, j * dy);
  }

  svg.append('path')
    .attr('stroke-dasharray', pathLength.toString() + ' ' + pathLength.toString())
    .attr('stroke-dashoffset', pathLength.toString())
    .attr('d', cur_d);
}

var paths = svg.selectAll('path').each(
  function (d, i, nodes) {
    console.log(d, i, nodes);
    setTimeout((function () {
      d3.select(this).attr('stroke-dashoffset', 0);
    }).bind(this), i * 80);
  }
);
for (var i = 0; i != startsHorizontal.length; ++i) {

}

