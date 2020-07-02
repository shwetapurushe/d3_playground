function animate_curve() {

  var margin = ({
    top: 10,
    right: 20,
    bottom: 10,
    left: 25
  });
  var size = ({
    width: Math.min(window.innerWidth, 1000),
    height: 500
  }); //size of the svg

  var data = Array.from({
    length: 20
  }, (_, i) => [
    ((i + .5) * size.width) / 21,
    Math.random() * size.height
  ]);

  var line = d3.line().curve(d3.curveBasis)(data);

  var svg = d3.select("body").append("svg")
    .attr("viewBox", [0, 0, size.width, size.height])
    .style("background-color", "orange")
    .style("opacity", 0.6);


  // var g = svg.append("g")
  //   .attr("width", 700).attr("height", 200)
  //   .attr(
  //     "transform",
  //     //"translate(" + size.width / 4 + "," + size.height / 4 + ")"
  //     "translate(" + 10 + "," + 10 + ")"
  //   );

  var path = svg.append("path")
    .attr("d", line)
    .attr("stroke_width", "0.5")
    .attr("stroke", "#000")
    .attr("fill", "none");

  // data is created inside the function so it is always unique
  let repeat = () => {
    var totalLength = path.node().getTotalLength();

    // d3 animation
    path
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .duration(4000)
      .ease(d3.easeLinear)
      .attr("stroke-dashoffset", 0)
      .on("end", repeat);
  };
  //repeat();

}

export {
  animate_curve
};
