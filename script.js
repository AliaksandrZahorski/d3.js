const w = 300;
const h = 100;
const padding = 15;

var dataset = [
  [5, 20],
  [480, 90],
  [250, 50],
  [100, 33],
  [330, 95],
  [410, 12],
  [475, 44],
  [25, 67],
  [85, 21],
  [220, 88]
];

var xScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset, d => d[0])])
  .range([padding, w - padding]);
var yScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataset, d => d[1])])
  .range([h - padding, padding]);

const svg = d3
  .select("body")
  .append("svg")
  .attr("width", w)
  .attr("height", h);

svg
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", d => xScale(d[0]))
  .attr("cy", d => yScale(d[1]))
  .attr("r", 5)
  .attr('fill', "rgba(1,1,1,0)")
  .attr("stroke", "black")
  .style("stroke-width", "2px")

const scale = d3
  .scaleLinear()
  .domain([0, 500])
  .range([0, 100]);
console.log(scale(55));
