function hello_d3_world() {
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

  var data = [
    [0, 0],
    [500, 250],
    [980, 500]
  ];



  var svg = d3.select("body").append("svg")
    .attr("viewBox", [0, 0, size.width, size.height])
    .style("background-color", "skyblue");

  var g = svg.append("g")
    .attr("fill", "red")
    .attr("width", size.width).attr("height", size.height)
    .attr(
      "transform",
      //"translate(" + size.width / 4 + "," + size.height / 4 + ")"
      "translate(" + 10 + "," + 10 + ")"
    );

  //single circle
  // g.append("circle")
  // .attr("cx", 0)
  // .attr("cy", 0)
  // .attr("r", 35)
  // .attr("fill", "lightblue");


  var circles = svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", function(d, i) {
      return d[0];
    })
    .attr("cy", function(d) {
      return d[1];
    })
    .attr("fill", "yellow")
    .attr("r", 20);
}

export {
  hello_d3_world
};
