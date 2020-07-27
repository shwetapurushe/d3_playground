function draw_linear() {
  var margin = ({
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  });
  var size = ({
    width: Math.min(window.innerWidth, 1000),
    height: 100
  }); //size of the svg

  var svg = d3.select("body").append("svg")
              .attr("viewBox", [0, 0 , size.width, size.height])
              .style("border", "dotted")
              ;
  var data = d3.range(0, 100, 10);

  var data = d3.range(0, 450, 5);

  var x_scale = d3.scaleLinear()
                  .domain(d3.extent(data))
                  .range([0, size.width- margin.right])
                  ;
  var color_scale = d3.scaleSequential(d3.extent(data), d3.interpolateMagma);

  var rect = svg.selectAll("rects")
                .data(data)
                .enter()
                .append("rect")
                .attr("x", (d) => {
                  return x_scale(d);
                })
                .attr("width", 10)
                .attr("height", size.height)
                .attr("fill", (d) => {
                  return(color_scale(d));
                })
                ;

}

export {
  draw_linear
};
