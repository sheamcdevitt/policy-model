//Preview
var subIndicatorsFlag = false,
  idAcronym;
document.getElementById("nodeColour").style.display = "none";
document.getElementById("nodeID").style.display = "none";
$("#nodeID").val("00000");
//document.getElementById("nodeType").style.display = "none";

/*

$('#list').append('<ul>  <li><a class="suggest-click">Indicator 1TEST</a></li> </ul>')
$('#overallList').append('<ul>  <li><a class="suggest-click">Indicator 1TEST</a></li> </ul>')

*/

var svg = d3.select("#preview-svg"),
  width = svg.property("viewBox").baseVal.width, ///play with this for more and more nodes
  height = svg.property("viewBox").baseVal.height;

var circle = svg

  .append("circle")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("r", 55)
  .attr("fill", "White")
  .attr("stroke-width", 5)
  .attr("stroke", "Blue");
var text = svg
    .append("text")
    .style("font-family", "Oswald")
    .attr("dy", width / 2 + 8)
    .attr("dx", height / 2)
    .attr("text-anchor", "middle")
    .style("fill", "Blue")
    .text("Preview"),
  textLine2 = svg
    .append("text")
    .style("font-family", "Oswald")
    .attr("dy", width / 2 + 8)
    .attr("dx", height / 2)
    .attr("text-anchor", "middle")
    .style("fill", "Blue")
    .text("");
/*textLine3 = svg
    .append("text")
    .style("font-family", "Oswald")
    .attr("dy", width / 2 + 8)
    .attr("dx", height / 2)
    .attr("text-anchor", "middle")
    .style("fill", "Red")
    .text(""),
  textLine4 = svg
    .append("text")
    .style("font-family", "Oswald")
    .attr("dy", width / 2 + 8)
    .attr("dx", height / 2)
    .attr("text-anchor", "middle")
    .style("fill", "Red")
    .text("");*/

//Example
var svgExample = d3.select("#example-svg");

var circleExample = svgExample

  .append("circle")
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .attr("r", 55)
  .attr("fill", "White")
  .attr("stroke-width", 5)
  .attr("stroke", "Blue");
var textExample = svgExample
  .append("text")
  .style("font-family", "Oswald")
  .attr("dy", width / 2 + 8)
  .attr("dx", height / 2)
  .attr("text-anchor", "middle")
  .style("fill", "Blue")
  .text("Economy");

$.ajaxSetup({
  cache: false,
});

$("#parentChildSwitch").on("click", () => {
  subIndicatorsFlag = document.getElementById("parentChildSwitch").checked;
});
$("#nodeColour").val($("#colorpicker").val());

/*$("#nodeGroup").on("keyup", () => {
  idAcronym = $("#nodeGroup")
    .val()
    .split(/\s/)
    .reduce((response, word) => (response += word.slice(0, 1)), "")
    .toUpperCase()
    .substring(0, 5);

  $("#nodeID").val(idAcronym);
});*/

$("#nodeParentGroup").on("keyup", () => {
  var groupName = $("#nodeParentGroup").val();
  $("#nodeGroup").val(groupName);
});
$("#nodeDisplay").on("keyup", () => {
  var output = splitStringWithoutBreakingWords(5, $("#nodeDisplay").val());

  switch (output.length) {
    case 1:
      text.text(output[0]);
      text.attr("dy", width / 2 + 8);
      textLine2.text("");
      break;
    case 2:
      textLine2.text(output[1]);
      text.attr("dy", width / 2 - 2);
      textLine2.attr("dy", width / 2 + 16);
      break;
  }

  // output.length <= 1 ? text.text(output[0]) : textLine2.text(output[1]);
});

$("#colorpicker").on("input", () => {
  circle.attr("stroke", $("#colorpicker").val());
  text.style("fill", $("#colorpicker").val());
  textLine2.style("fill", $("#colorpicker").val());
  $("#nodeColour").val($("#colorpicker").val());
});

document.getElementById("example-modal-exit").onclick = () => {
  console.log();
  $("#example-modal").modal("hide");
};
