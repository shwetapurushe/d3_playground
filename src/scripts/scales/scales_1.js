/*
EXPLANATION OF THE Y SCALE BETWEEN VIEWBOX AND DATA COORDINATES

(0,0) on the viewbox coordinate system is the               top left
(0,0) on the user coodinate system (what we're used to ) is bottom left
Hence flipped


Ignoring margins for simplicity of math
extent of data                  0 -- 10
range of y                      0 -- size.height (dim of Viewbox)
actual range of y               size.height -- 0 (viewbox coordinate system if flipped on Y compared to the user coordinate system)
in this example                 100         -- 0

so

0   -- 10  data
↓↓↓↓↓↓↓↓
100 -- 0   coordinate system (pixels)

1 data unit
↓↓↓↓↓↓↓↓
10 coordinate units

to represent 25 coordinate units (25 on a chart/graph eg. scatter plot)
1 ---> 10
? <--- 25

25/10 = 2.5

*
*/



function draw_scale() {

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

  console.log("Size of ViewBox is", size);

  var  data = [
    { gpa: 0, height: 0 },
    { gpa: 100, height: 50 },
    { gpa: 250, height: 75 }
  ];

  var data1 = [ 0, 2.5, 5, 7.5, 10 ];
  const svg = d3.select("body").append("svg")
                //.attr("width", )
                .attr("viewBox", [0, 0, size.width, size.height])
                .style("background-color", "orange")
                .style("opacity", 0.6);

// WITH all these calculations, we dont need a G to show the data
  // var g = svg.append("g")
  //   .attr("width", size.width).attr("height",  size.height)
  //   .attr(
  //     "transform",
  //     //"translate(" + size.width / 4 + "," + size.height / 4 + ")"
  //     "translate(" + 10 + "," + 10 + ")"
  //   );

  const x_scale = d3.scaleLinear()
                .domain(d3.extent(data1))
                .range([margin.left, size.width - margin.right]); /*To accommodate the entire circle */
                //.range([0, size.width]);

  const y_scale = d3.scaleLinear()
                .domain(d3.extent(data1))
                //.range([size.height - margin.bottom , margin.top]); /*To accommodate the entire circle */
                .range([size.height, 0]); //flip the Y axis coordinate (ViewBox is reverse of normal coordinate system for Y)

  console.log("Y scale transformation", y_scale(5)); //first is 100 along with margins = 80


  var circles = svg.selectAll("circles")
                .data(data1)
                .enter()
                .append("circle")
                .attr("r", 5)
                .attr("cx", (d) => {
                  return x_scale(d);
                })
                .attr("cy", y_scale(5)) // how did i arrive at 2.5 ? explaination above
                ;

}

export {
  draw_scale
};
