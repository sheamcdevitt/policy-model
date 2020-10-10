window.indicatorData = []
//Empty JSON to populate
var jsonToPass = {
  nodes: [],
  links: [],
};
var modelData = {
  nodes: [],
  links: []
};
var zoomLevel = 1,
  panX = 0,
  panY = 0,
  descriptionUpdated = false,
  descClickId;

//Todo need to brainstorm ideas what to do here but plenty of ideas
var menu = [{
    title: "Info",
    action: function (elm, d, i) {},
  },
  {
    title: "Delete",
    action: function (elm, d, i) {},
  },
];



//js to retrieve checked boxes and add to array
window.onload=function(){
 var checkboxes = document.querySelectorAll("input[type=checkbox]");
var submit = document.getElementById("submit");

function getCheckedValue() {
  var checked = [];

  for (var i = 0; i < checkboxes.length; i++) {
    var checkbox = checkboxes[i];
    if (checkbox.checked) checked.push(checkbox.value);
  }

  return checked;
}


submit.addEventListener("click", function() {
  var checked = getCheckedValue();
  console.log(checked);
});

}






var originalPass;
//Array for all the policies websites
//TODO finish inserting rest of the websites

//todo configure select box behaviour

var groups = [];
$.getJSON("json/nodes.json", function (data) {
  //for each distinct group, push distinct value to array
  $.each(data, function (key, value) {
    if ($.inArray(value.group, groups) === -1) {
      groups.push(value.group);
    }
  });

  //display group values from array
  $.each(groups, function (key, value) {
    $("#selectStrategy").append("<option>" + value + "</option>");
  });
});

//add selected groups to temp array

var selectedgroups = [];
$("#selectStrategy").on("change", function () {
  selectedgroups.push($(this).val());
  selectedgroups;
});

//Search box function; searches nodes.json by id, group and description
$(document).ready(function () {
  $.ajaxSetup({
    cache: false,
  });
  $("#search").on("keyup", function () {
    $("#result").html("");
    $("#state").val("");
    var searchField = $("#search").val();
    var expression = new RegExp(searchField, "i");
    $.getJSON("json/Data.json", function (data) {
      $.each(data.nodes, function (key, value) {
        if (
          value.id.search(expression) != -1 ||
          value.description.search(expression) != -1 ||
          value.group.search(expression) != -1
        ) {
          $("#result").append(
            '<li class="list-group-item link-class result-li">' +
            value.group +
            ' | <span class="text-muted">' +
            value.description +
            '<style = "visibility:hidden;"> | *' +
            value.id +
            "  "
          );
        }

        $("#result").on("click", function (e) {
          e.stopPropagation();
        });

        $(document).on("click", function (e) {
          $("#result").empty();
        });

        //   TODO: ux improvement - remove list when clicked off, when anywhere other than id clicked, remove children - todo: bug fixes

        //    $('html').click(function(e){
        //     if(!$(e.target).is('#result-list') || (!$(e.target).is('#list-text'))) {
        //         $('#result').empty();
        //     }

        // });
      });

      //Adds clicked node value to jsonToPass

      $("#result").on("click", "li", function () {
        $(this).removeClass("link-class");
        $(this).addClass("clicked-background");
        var click_text = $(this).text().split("*");
        $("#search").val($.trim(click_text[1]));
        var clickedId = $("#search").val();

        //Loop through nodes.json and return the node based on whats been selected
        //? Better way to do this? Works but seems lazy way of doing it
        for (var i = 0; i < data.nodes.length; i++) {
          if (
            data.nodes[i]["id"] == clickedId &&
            !jsonToPass.nodes.some((item) => item.id === clickedId)
          ) {
            jsonToPass.nodes.push(data.nodes[i]);
          }
        }
      });

      $.ajaxSetup({
        // Disable caching of AJAX responses
        // Used when debugging
        cache: false,
      });

      //TODO: figure out better way to track how many times a button has been clicked, otherwise going to get pretty messy
      var UNSDGCLICKS = 0;
      //Declare svg values from existing svg
      var svg = d3.select("svg"),
        width = svg.property("viewBox").baseVal.width,
        height = svg.property("viewBox").baseVal.height;
      (padding = 15), // separation between same-color circles
      (clusterPadding = 60), // separation between different-color circles
      (maxRadius = 55);

      // Put the svg into an image tag so that the Canvas element can read it in.

      var tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

      //If "Create Model" is clicked, create the model using whatever is passed into jsonToPass
      document.getElementById("CreateModel").onclick = function () {
        modelData = create(jsonToPass);
        jsonToPass = {
          nodes: [],
          links: [],
        };
      };


    // modelDataSend = create(pass)
     modelDataToSend = JSON.stringify(modelData);

     //testing it with seperate button submit & click
 
        $('#SendModel').one('click', function () {
          $.ajax({
            method: "POST",
            url: "add.php",
            data: { "pass" : modelDataToSend 

          },
          
            success: function () {
              alert(modelDataToSend);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
              console.log("unsuccessful");
            }
          });
        });



      //create function: holds all functions for creating model
      function create(pass) {
        //Remove previous model
        svg.selectAll("*").remove();
        svg.property("viewBox").baseVal.height = height;

        //Pass in Data.json so we can access all nodes and links that exist
        d3.json("json/Data.json", function (error, json) {
          if (error) throw error;

          /*
          //onclick function for showOnly function (UNSDG)
          //TODO: write more general for other parentGroups
          document.getElementById("SHOWONLYUNSDG").onclick = function () {
            showOnly("UN Sustainable Development Goals");
          };
          document.getElementById(
            "SHOWONLYA Bolder Vision for Belfast"
          ).onclick = function () {
            showOnly("A Bolder Vision for Belfast");
          };
          document.getElementById(
            "SHOWONLYA City Imagining"
          ).onclick = function () {
            showOnly("A City Imagining");
          };
          document.getElementById(
            "SHOWONLYBelfast Agenda"
          ).onclick = function () {
            showOnly("Belfast Agenda");
          };
          document.getElementById(
            "SHOWONLYBelfast Agenda Immediate Priorities"
          ).onclick = function () {
            showOnly("Belfast Agenda Immediate Priorities");
          };
          document.getElementById(
            "SHOWONLYBelfast City Council Local Development Plan"
          ).onclick = function () {
            showOnly("Belfast City Council Local Development Plan");
          };
          document.getElementById(
            "SHOWONLYBelfast City Council Open Spaces Strategy"
          ).onclick = function () {
            showOnly("Belfast City Council Open Spaces Strategy");
          };
          document.getElementById(
            "SHOWONLYBelfast City Council Public Realm"
          ).onclick = function () {
            showOnly("Belfast City Council Public Realm");
          };
          document.getElementById(
            "SHOWONLYBelfast Green and Blue Infrastructure Plan"
          ).onclick = function () {
            showOnly("Belfast Green and Blue Infrastructure Plan");
          };
          document.getElementById(
            "SHOWONLYCulture 2030 Indicators"
          ).onclick = function () {
            showOnly("Culture 2030 Indicators");
          };
          document.getElementById(
            "SHOWONLYDerry City & Strabane District’s Inclusive Strategic Growth Plan"
          ).onclick = function () {
            showOnly(
              "Derry City & Strabane District’s Inclusive Strategic Growth Plan"
            );
          };
          document.getElementById(
            "SHOWONLYProgramme for Government"
          ).onclick = function () {
            showOnly("Programme for Government");
          };
          document.getElementById(
            "SHOWONLYProtect Life 2 - Suicide Prevention Strategy"
          ).onclick = function () {
            showOnly("Protect Life 2 - Suicide Prevention Strategy");
          };
          document.getElementById("SHOWONLY Resilience").onclick = function () {
            showOnly("Resilience");
          };
          document.getElementById(
            "SHOWONLYResilience - Shocks and Stresses"
          ).onclick = function () {
            showOnly("Resilience - Shocks and Stresses");
          };
          document.getElementById(
            "SHOWONLYWHO 5 Ways To Wellbeing"
          ).onclick = function () {
            showOnly("WHO 5 Ways To Wellbeing");
          };
          document.getElementById(
            "SHOWONLYWHO Arts Components"
          ).onclick = function () {
            showOnly("WHO Arts Components");
          };

          //! NEEDS A LOOP FUNCTION
          //onclick function for showGroup function
          //TODO: needs to save original model so when clicked again/unclicked it shows original model
          //* Ensure that function uses original model otherwise will connect nodes from nodes that weren't in the original model
          document.getElementById("UNSDG").onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(json, temp, "UN Sustainable Development Goals");
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById(
            "A Bolder Vision for Belfast"
          ).onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(json, temp, "A Bolder Vision for Belfast");
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById("A City Imagining").onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(json, temp, "A City Imagining");
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById("Belfast Agenda").onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(json, temp, "Belfast Agenda");
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById(
            "Belfast Agenda Immediate Priorities"
          ).onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(json, temp, "Belfast Agenda Immediate Priorities");
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById(
            "Belfast City Council Local Development Plan"
          ).onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(
                json,
                temp,
                "Belfast City Council Local Development Plan"
              );
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById(
            "Belfast City Council Open Spaces Strategy"
          ).onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(
                json,
                temp,
                "Belfast City Council Open Spaces Strategy"
              );
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById(
            "Belfast City Council Public Realm"
          ).onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(json, temp, "Belfast City Council Public Realm");
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById(
            "Belfast Green and Blue Infrastructure Plan"
          ).onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(
                json,
                temp,
                "Belfast Green and Blue Infrastructure Plan"
              );
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById(
            "Culture 2030 Indicators"
          ).onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(json, temp, "Culture 2030 Indicators");
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById(
            "Derry City & Strabane District’s Inclusive Strategic Growth Plan"
          ).onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(
                json,
                temp,
                "Derry City & Strabane District’s Inclusive Strategic Growth Plan"
              );
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById(
            "Programme for Government"
          ).onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(json, temp, "Programme for Government");
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById(
            "Protect Life 2 - Suicide Prevention Strategy"
          ).onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(
                json,
                temp,
                "Protect Life 2 - Suicide Prevention Strategy"
              );
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById("Resilience").onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(json, temp, "Resilience");
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById(
            "WHO 5 Ways To Wellbeing"
          ).onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(json, temp, "WHO 5 Ways To Wellbeing");
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          document.getElementById("WHO Arts Components").onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              showGroup(json, temp, "WHO Arts Components");
              create(temp);
              originalPass = pass;
              ////////console.log
(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
          
*/
          $(".atab")
            .unbind()
            .click(function () {
              //weird bug where it clicks loads of times
              create(pass);
              // ////console.log
              //pass;
              /* = {
              nodes: [],
              links: [],
            };*/
            });

          $(".btab")
            .unbind()
            .click(function () {
              var d = pass.nodes;

              svg.selectAll("*").remove();
              svg.on(".zoom", null);
              var defs = svg.append("defs");
              defs
                .append("style")
                .attr("type", "text/css")
                .text(
                  "@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap')"
                );

              var obj = Object.keys(countGroupsArray(d)).sort();
              var descArray = getDescription(pass.nodes);
              // console.log("desc", descArray);
              var descriptions = svg
                .append("g")
                .attr("class", "text")
                .style("pointer-events", "auto"),
                output;

              var y = 40;
              for (var i = 0; i < obj.length; i++) {
                descriptions
                  .append("text")
                  .attr("x", 50)
                  .attr("y", y)
                  .text(obj[i])
                  .style("font-size", "20px")
                  .style("font-family", "Lato")
                  .style("stroke", getColourByGroup(d, obj[i]))
                  .style("fill", getColourByGroup(d, obj[i]))
                  .attr("alignment-baseline", "middle")
                  .on("mouseover", function () {
                    //console.log(d3.select(this).text());
                  });
                for (var j = 0; j < descArray[i].length; j++) {
                  // console.log(descArray);
                  output = splitStringWithoutBreakingWords(90, descArray[i][j]);
                  //////console.log
                  //  "output", output;
                  for (var k = 0; k < output.length; k++) {
                    y += 40;
                    descriptions
                      .data(output)
                      .append("text")
                      .attr("x", 50)
                      .attr("y", y)
                      .text(output[k])
                      .style("font-size", "20px")
                      .style("font-family", "Lato")
                      .style("stroke", "Black")
                      .attr("alignment-baseline", "middle")
                      .on("mouseover", function () {
                        //
                        d3.select(this).style("stroke", "Gold");
                        d3.select(this).style("fill", "Gold");

                        // console.log(d3.select(this).text());
                      })
                      .on("mouseout", function (d, i) {
                        //

                        d3.select(this).style("stroke", "Black");
                        d3.select(this).style("fill", "Black");
                      })
                      .on("click", function (d, i) {
                        //pass.nodes.splice(i, 1);
                        descriptionUpdated = true;
                        var startNo = d.match(/([a-z]*)([\w.]+)/i);
                        var toCheck = d.split(startNo[0])[1].trim();
                        var final;
                        //  console.log("dTrue", toCheck);
                        //  console.log("clicked", d3.select(this).text());
                        final = d3.select(this).text().includes(toCheck) ?
                          toCheck :
                          toCheck + " " + d3.select(this).text();
                        // console.log("final", final);
                        var nodeToDelete;

                        for (let node of pass.nodes) {
                          if (node.description.includes(final)) {
                            var index = pass.nodes.indexOf(node);
                            pass.nodes.splice(index, 1);
                            // console.log(pass.nodes);
                          }
                        }
                        d3.select(this).style(
                          "text-decoration",
                          "line-through"
                        );
                      });
                  }
                }
                y += 40;
                svg.property("viewBox").baseVal.height = y + 25;

                // g.attr("height", y + 100);
                /* svg
                  .append("circle")
                  .attr("cx", width - 425)
                  .attr("cy", y)
                  .attr("r", 15)
                  .style("fill", "White")
                  .style("stroke-width", 5)
                  .style("stroke", getColourByParentGroup(d, obj[i]));*/
              }
              //svg.width = 3000;
              ////console.log
              // "y", y;

              /*  var test = d3
                .select("g")
                .selectAll("text")
                .data(output)
                .text(function (d, i) {
                  console.log(d);
                  console.log(i);
                  return d;
                });*/
            });

          //document.getElementById("CreateSheet").onclick = function () {};

          document.getElementById("FoyleAware").onclick = function () {
            create(westlinkOveralljson);
            //  var temp = JSON.parse(JSON.stringify(pass));
            // showGroup(json, temp, "Programme for Government");
          };

          /*document.getElementById("Foyle Groups").onclick = function () {
            //Even clicks do...
            if (UNSDGCLICKS % 2 == 0) {
              var temp = JSON.parse(JSON.stringify(pass));
              /*showGroup(json, temp, "UN Sustainable Development Goals");
              showGroup(
                json,
                temp,
                "Derry City & Strabane District’s Inclusive Strategic Growth Plan"
              );
              showGroup(
                json,
                temp,
                "Protect Life 2 - Suicide Prevention Strategy"
              );
              showGroup(json, temp, "Making Life Better");
              showGroupFoyle(json, temp);
              create(temp);
              originalPass = pass;
              ////////console.log
              originalPass;
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              ////////console.log
              originalPass;
              create(originalPass);
            }

            UNSDGCLICKS++;
          };
*/
          //If indicators clicked, add their parents to the model too (if not also clicked)

          pass.nodes = getUnique(pass.nodes, pass.nodes);
          //console.log
          pass.nodes;
          addParents(pass.nodes, json.nodes);

          /* addChildren(pass, json, "Making Life Better");
          addChildren(
            pass,
            json,
            "Derry City & Strabane District’s Inclusive Strategic Growth Plan"
          );
          addChildren(
            pass,
            json,
            "Protect Life 2 - Suicide Prevention Strategy"
          );*/
          //Protect Life 2 - Suicide Prevention Strategy
          // removeOrphans(pass.nodes);
          //Create clusters array : parentNodes which have childrenNodes (for force.cluster) and
          //give each of the relevant children a 'clusterindex' which points it to its parent's index
          //in 'clusters' which is then used by force.cluster so that children circle their parents
          var clusters = [];
          clusters = createParentArray(pass.nodes);
          pointChildToParent(pass.nodes, clusters);
          assignParentClusterIndex(pass.nodes, clusters);
          //console.log
          clusters;

          //Required functions (more information on each in //Functions Section)
          groupToColor(pass.nodes);
          typeToRadius(pass.nodes);
          shuffle(pass.nodes);
          fakeLinks(pass);
          shuffle(pass.nodes);
          fakeLinks(pass);
          shuffle(pass.nodes);
          fakeLinks(pass);

          addLinksToDynamicJSON(json, pass);

          //console.log
          pass;
          // smartLink(json, pass);
          // removeLinksBetweenSameGroup(pass);
          //Regional code
          var obj = Object.keys(countParentGroupsArray(pass.nodes)).sort();
          var w = width,
            h = height,
            Ox = 100,
            Oy = 100;
          var regionArray;
          if (countParentGroups(pass.nodes) == 1) {
            regionArray = [
              [Ox, Oy, w - 100, h - 100]
            ];
          } else if (countParentGroups(pass.nodes) == 2) {
            regionArray = [
              [Ox, Oy, w / 2 - 50, h - 100],
              [w / 2 + 50, Oy, w - 100, h - 100],
            ];
          } else if (countParentGroups(pass.nodes) == 3) {
            regionArray = [
              [Ox, Oy, w / 2 - 50, (2 * h) / 3 - 50],
              [w / 2 + 50, Oy, w - 100, (2 * h) / 3 - 50],
              [Ox, (2 * h) / 3 + 50, w - 100, h - 100],
            ];
          } else if (countParentGroups(pass.nodes) == 4) {
            regionArray = [
              [Ox, Oy, w / 2 - 50, h / 2 - 50],
              [w / 2 + 50, Oy, w - 100, h / 2 - 50],
              [Ox, h / 2 + 50, w / 2 - 50, h - 100],
              [w / 2 + 50, h / 2 + 50, w - 100, h - 100],
            ];
          } else if (countParentGroups(pass.nodes) == 5) {
            regionArray = [
              [Ox, Oy, w / 2 - 50, (2 * h) / 5 - 50],
              [w / 2 + 50, Oy, w - 100, (2 * h) / 5 - 50],
              [Ox, (2 * h) / 5 + 50, w / 2 - 50, (4 * h) / 5 - 50],
              [w / 2 - 50, (2 * h) / 5 + 50, w - 100, (4 * h) / 5 - 50],
              [Ox, (4 * h) / 5 + 50, w - 200, h - 300],
            ];
          } else if (countParentGroups(pass.nodes) == 6) {
            regionArray = [
              [Ox, Oy, w / 2 - 50, h / 3 - 50],
              [w / 2 + 50, Oy, w - 50, h / 3 - 50],
              [Ox, h / 3 + 50, w / 2 - 50, (2 * h) / 3 - 50],
              [w / 2 + 50, h / 3 + 50, w - 50, (2 * h) / 3 - 50],
              [Ox, (2 * h) / 3 + 50, w / 2 - 50, h - 50],
              [w / 2 + 50, (2 * h) / 3 + 50, w - 50, h - 50],
            ];
          } else if (countParentGroups(pass.nodes) == 7) {
            regionArray = [
              [w / 3, h / 6],
              [(2 * w) / 3, h / 6],
              [w / 6, h / 2],
              [w / 2, h / 2],
              [(5 * w) / 6, h / 2],
              [w / 3, (5 * h) / 6],
              [(2 * w) / 3, (5 * h) / 6],
            ];
          } else if (countParentGroups(pass.nodes) == 8) {
            regionArray = [
              [w / 6, h / 6],
              [w / 2, h / 6],
              [(5 * w) / 6, h / 6],
              [w / 6, h / 2],
              [(5 * w) / 6, h / 2],
              [w / 6, (5 * h) / 6],
              [w / 2, (5 * h) / 6],
              [(5 * w) / 6, (5 * h) / 6],
            ];
          } else if (countParentGroups(pass.nodes) == 9) {
            regionArray = [
              [Ox, Oy],
              [Ox, h / 4],
              [Ox, h / 2],
              [Ox, (3 * h) / 4],
              [(3 * w) / 5, Oy],
              [(4 * w) / 5, Oy],
              [(3 * w) / 5, (3 * h) / 4],
              [(4 * w) / 5, (3 * h) / 4],
              [w, h / 2],
            ];
          }
          //Physics simualtion using d3 library
          //TODO: play around with values to make best looking model
          var simulation = d3
            .forceSimulation(pass.nodes)
            .force(
              "link",
              d3
              .forceLink()
              .id(function (d) {
                return d.id;
              })
              .strength(0)
              .distance(500)
            )
            //Charge - replusion/attraction between individual nodes
            .force(
              "charge",
              d3.forceManyBody().strength(function (d) {
                //if (d.type == "Parent"){return -500;}
                ///else {return -100;}
                return -2000;
              })
            )
            //  .force("gravity", 100)
            //Attract - attracts all nodes to a target co-ordinate
            //This is used to bring nodes together to middle of canvas, allows us to be less specific with our force "y"
            //force "x" regional values below
            .force(
              "attract",
              d3
              .forceAttract()
              .target([(2 * width) / 3, height / 2])
              .strength(0.6)
            )
            //Collision - collision between individual nodes
            .force(
              "collision",
              d3
              .forceCollide()
              .radius(function (fn) {
                //if (fn.type == "Parent") {
                //  return checkNodeHasChild(fn, pass.nodes);
                // } else {
                return 1.5 * fn.radius;
                //  }
              })
              .strength(0.8)
            )
            // .force("collide", collide)
            //Set where nodes will be attracted to on the y axis
            //Different groups will have differnt y values
            .force(
              "y",
              d3
              .forceY(function (fn) {
                for (let node of pass.nodes) {
                  for (var j = 0; j < countParentGroups(pass.nodes); j++) {
                    if (fn.parentGroup == obj[j]) {
                      return regionArray[j][1];
                    }
                  }
                }
              })
              .strength(0.7)
            )
            //Set where nodes will be attracted to on the x axis
            //Different groups will have differnt x values
            //TODO refactor so that we're not writing same thing twice for x and y
            .force(
              "x",
              d3
              .forceX(function (fn) {
                for (let node of pass.nodes) {
                  for (var j = 0; j < countParentGroups(pass.nodes); j++) {
                    if (fn.parentGroup == obj[j]) {
                      return regionArray[j][0];
                    }
                  }
                }
              })
              .strength(0.7)
            )
            //! probably need to remove as does same as attract but...
            //TODO ... need to read documentation and see difference (will keep for now)
            //  .force("center", d3.forceCenter(width / 3, height / 3))
            //Cluster - as explained above: there is a "parentrray" -> clusters : all parentNodes which have children in an array
            //Then pointChildToParent function assigns each parent with a clusterIndex which tells it where in the clusters array its parent
            //is and therefore where to cluster do
            .force(
              "cluster",
              //clustering
              d3
              .forceCluster()
              .centers(function (d) {
                //Check node is a child
                if (d.type == "Child") {
                  return clusters[d.clusterIndex];
                }
              })
              .strength(1)
              .centerInertia(1.0)
            );
          // .stop()
          //.alphaDecay(0.05);
          // .velocityDecay(0.2)
          // .tick(70);
          // .stop();
          /*.on("end", function () {
              node.each(function (d) {
                d.fx = d.x;
                d.fy = d.y;
              });
            });*/
          //.stop();
          // .stop();

          //var link = svg.append("g").attr("class", "links");

          var g = svg.append("g").attr("class", "everything");
          var g_links = svg.append("g").attr("class", "links");
          var g_nodes = svg.append("g").attr("class", "nodes");

          //Define the path which links will take
          //TODO figure out the gradient function so that
          var defs = g.append("defs");
          defs
            .append("style")
            .attr("type", "text/css")
            .text(
              "@import url('https://fonts.googleapis.com/css?family=Oswald:400,700')"
            );
          var path = //g
            //.append("g")
            g_links
            .selectAll("path")
            .data(pass.links)
            .enter()
            .append("path")
            .attr("class", function (d) {
              return "link " + d.type;
            })
            .style("fill", "None")
            .style("stroke-width", ".5") //!Keeping here in case I come back to it //Mouseover functions //TODO brainstorm ideas with team if they need mouse over function or what that would show
            .style("stroke", function (fn) {
              if (
                getNodeType(pass.nodes, fn.source) == "Parent" &&
                getNodeType(pass.nodes, fn.target) == "Parent"
              ) {
                var gradient = defs
                  .append("linearGradient")
                  .attr("id", getGradID(fn))
                  .attr("x1", "0%") // getNodePosition(pass.nodes, fn.source, true))
                  .attr("x2", "100%") // getNodePosition(pass.nodes, fn.target, true))
                  .attr("y1", "0%") // getNodePosition(pass.nodes, fn.source, false))
                  .attr("y2", "100"); // getNodePosition(pass.nodes, fn.target, false));

                d3.select("#" + getGradID(fn))
                  .append("stop")
                  .attr("class", "start")
                  .attr("offset", 0)
                  .attr("stop-color", getNodeColour(pass.nodes, fn.source)) //getColour(d.source,graph.nodes))
                  .attr("stop-opacity", 0.4);
                ////////console.log
                // getNodeColour(pass.nodes, fn.source);
                ////////console.log
                // getNodeColour(pass.nodes, fn.target);
                gradient
                  .append("stop")
                  .attr("class", "end")
                  .attr("offset", 0.5)
                  .attr("stop-color", getNodeColour(pass.nodes, fn.target)) // getColour(d.target,graph.nodes))
                  .attr("stop-opacity", 0.4);
                return "url(#" + getGradID(fn) + ")";
              } else {
                return null;
              }
            });
          /*
                     .on("mouseover.tooltip", function (d) {
                       tooltip.transition().duration(300).style("opacity", 0.8);
                     })
                     .on("mouseout.tooltip", function () {
                       tooltip.transition().duration(100).style("opacity", 0);
                     })
                     .on("mouseout.fade", fade(1))
                     .on("mousemove", function () {
                       tooltip
                         .style("left", d3.event.pageX + "px")
                         .style("top", d3.event.pageY + 10 + "px");
                     });*/
          //Gradient function for links
          //TODO: fix
          /*   .style("stroke", function (fn) {
              var defs = svg.append("defs");
              var gradient = defs
                .append("linearGradient")
                .attr("id", "svgGradient")
                .attr("x1", "0%")
                .attr("x2", "100%")
                .attr("y1", "0%")
                .attr("y2", "100%");

              gradient
                .append("stop")
                .attr("class", "start")
                .attr("offset", "100%")
                .attr("stop-color", getNodeColour(pass.nodes, fn.target)) //getColour(d.source,graph.nodes))
                .attr("stop-opacity", 0.5);

              gradient
                .append("stop")
                .attr("class", "end")
                .attr("offset", "0%")
                .attr("stop-color", getNodeColour(pass.nodes, fn.source)) // getColour(d.target,graph.nodes))
                .attr("stop-opacity", 0.5);
              return "url(#svgGradient)";
            });*/

          var tip;
          var node = //g;
            //.append("g")
            // .attr("class", "nodes")
            g_nodes.selectAll("g").data(pass.nodes).enter().append("g");

          node
            .append("circle")
            .attr("r", function (fn) {
              return fn.radius;
            })
            .attr("stroke-width", 5)
            .attr("stroke", function (fn) {
              return fn.colour;
            })
            .attr("fill", function (d) {
              if (d.type == "Child") {
                return d.colour;
              } else {
                return "White";
              }
            })
            .call(
              d3
              .drag()

              .on("start", dragstarted)
              .on("drag", dragged)
              .on("end", dragended)
            )
            .on(
              "dblclick"
              /*function (d, i) {
                           d3.event.stopPropagation();
                           var data = [];
                           data.push(pass.nodes[i]);
                           console.log(data);
                           this.remove();
                           g_nodes
                             .selectAll("text")
                             .data(data)
                             .exit()
                             .remove(); //);
                           pass.nodes.splice(i, 1);
                           console.log(pass.nodes);
                           // this.attr("text").remove();
                           // force.resume();
                         }) */
              , //
              remove
            )
            // .on("dblclick", function (d) {
            /* removeSpecOrphans(pass, d);
              const index = pass.nodes.indexOf(d);
              pass.nodes.splice(index, 1);

              create(pass);*/
            /*  //console.log
(
                document.querySelector("div").getBoundingClientRect()
              );*/
            //})
            //Node click function
            //TODO: fix fade bug with children, create 'mouseout' even if mouse taken off node
            .on("contextmenu", d3.contextMenu(menu))
            .on("mouseover", function (d) {
              //   var clicks = $(this).data("clicks");
              // if (clicks == null) {
              //   clicks = false;
              // }
              //if (!clicks) {
              if (
                (d3.select(this).attr("r") >= 55 && d.type == "Parent") ||
                (d3.select(this).attr("r") >= 15 && d.type == "Child")
              ) {
                d3.select(this)
                  .transition()
                  .duration(750)
                  .attr("r", d.type == "Parent" ? 65 : 25);
                //.style("fill-opacity",0.5)
                //.style("stroke-opacity",0.5)
                d3.event.stopPropagation();

                if (tip) tip.remove();

                tip = g_nodes.append("g").classed("tip", true);

                let strGroup = d.group;

                //var esArray = strGroup.match(/[^e]s(?!.*[^e]s)/i);
                strGroup =
                  strGroup.slice(-1) == "s" ?
                  strGroup.slice(-2) == "es" ?
                  strGroup :
                  strGroup.slice(0, -1) :
                  strGroup;

                let strDescription = d.description;
                var strDesLength = strDescription.length;
                var linesNo = strDesLength / 70;
                var arr = d.id.match(/([a-z]*)([\w.]+)/i);
                var rect = tip
                  .append("rect")
                  .style("fill", "white")
                  .style("stroke", "steelblue");

                output = splitStringWithoutBreakingWords(70, strDescription);

                tip
                  .append("text")
                  .text(strGroup + " " + arr[2])
                  .attr("dy", 30)
                  .attr("x", 5)
                  .style("font-size", "26px")
                  .style("font-family", "Oswald")
                  .style("pointer-events", "none");

                for (var i = 0; i < linesNo; i++) {
                  var sub = output[i];
                  tip
                    .append("text")
                    .text(i == 0 ? "• " + sub : sub)
                    .attr("dy", (i + 2) * 30)
                    .attr("x", 5)
                    .style("font-size", "20px")
                    .style("font-family", "Oswald")
                    .style("pointer-events", "none");
                }

                var bbox = tip.node().getBBox();
                rect
                  .attr("width", bbox.width + 10)
                  .attr("height", bbox.height + 10);

                var boxX =
                  (d.x + bbox.width + (d.type == "Parent" ? 60 : 30)) *
                  zoomLevel +
                  panX,
                  boxY =
                  (d.y + bbox.height + (d.type == "Parent" ? 60 : 30)) *
                  zoomLevel +
                  panY,
                  xPos = d.x * zoomLevel + panX,
                  yPos = d.y * zoomLevel + panY,
                  startOfBox =
                  /*(d.type == "Parent")?*/
                  (d.x -
                    bbox.width -
                    (d.type == "Parent" ? 60 : 30)) *
                  zoomLevel +
                  panX, // : ,
                  endOfBox = d.x + bbox.width + (d.type == "Parent" ? 60 : 30),
                  topOfBox =
                  (d.y - bbox.height - (d.type == "Parent" ? 60 : 30)) *
                  zoomLevel +
                  panY,
                  bottomOfBox =
                  d.y + bbox.height + (d.type == "Parent" ? 60 : 30),
                  st = d.x - bbox.width - (d.type == "Parent" ? 60 : 30),
                  end = d.x - (d.type == "Parent" ? 60 : 30),
                  adjHeight = (height - panY) / zoomLevel;
                adjWidth = (width - panX) / zoomLevel;

                tip.attr("transform", function () {
                  var x, y;
                  x =
                    boxX < width ?
                    d.x + (d.type == "Parent" ? 50 : 20) :
                    startOfBox > 0 ?
                    d.x - bbox.width - (d.type == "Parent" ? 60 : 30) :
                    d.x - Math.abs(endOfBox - adjWidth) - 20;
                  y =
                    boxY < height ?
                    d.y + (d.type == "Parent" ? 50 : 20) :
                    d.y - Math.abs(bottomOfBox - adjHeight) - 20;

                  return "translate(" + x + "," + y + ")";
                });
              } else {
                d3.select(this).transition().duration(750).attr("r", d.radius);
                d3.event.stopPropagation();
                if (tip) tip.remove();
              }
              // $(this).data("clicks", !clicks);
            })

            .on("mouseover.tooltip", function (d) {
              tooltip.transition().duration(5000).style("opacity", 0.8);
            })
            .on("mouseover.fade", fade(0.1))
            .on("mouseout.tooltip", function (d) {
              tooltip.transition().duration(100).style("opacity", 0);
              if (tip) tip.remove();
              d3.select(this).transition().duration(750).attr("r", d.radius);
              d3.event.stopPropagation();
            })
            .on("mouseout.fade", fade(1))
            .on("mousemove", function () {
              tooltip
                .style("left", d3.event.pageX + "px")
                .style("top", d3.event.pageY + 10 + "px");
            });

          node
            .append("text")
            //.attr("class", "nodeText")
            .attr("dy", function (d) {
              return 22;
            })
            .attr("text-anchor", "middle")
            .style("fill", function (d) {
              if (d.type == "Parent") {
                return d.colour;
              } else {
                return "White";
              }
            })
            .style("font-family", "Oswald")
            //Text function for nodes
            .text(function (d) {
              if (d.type == "Child" && d.display == "") {
                //Split name into number and letter parts: only return number for 'Child' circles
                var arr = d.id.match(/([a-z]*)([\w.]+)/i);
                return arr[2];
              } else {
                if (d.display == "") {
                  return d.id;
                }
              }
            })
            .attr("y", function (d) {
              output = splitStringWithoutBreakingWords(5, d.display);
              // yValue;
              switch (output.length) {
                case 1:
                  return -15;
                case 2:
                  return -25;
                case 3:
                  return -35;
                case 4:
                  return -45;
                default:
                  break;
              }
            })
            .selectAll("tspan.text")
            .data(function (d) {
              output = splitStringWithoutBreakingWords(5, d.display);
              return output;
            })
            .enter()
            .append("tspan")
            .attr("class", "display")
            .text(function (d) {
              //////////console.log
              d;
              if (d.type == "Child" && d.display == "") {
                //////////console.log
                ("CHILD");
                //Split name into number and letter parts: only return number for 'Child' circles
                var arr = d.id.match(/([a-z]*)([\w.]+)/i);
                return arr[2];
              } else {
                return d;
              }
            })
            .attr("x", 0)
            .attr("dx", 0)
            .attr("dy", 20)
            //.attr("text-anchor", "middle")
            .style("font-size", function (d) {
              if (d.display != null) {
                if (d.display.length > 20) {
                  return "10px";
                } else {
                  return "15px";
                }
              }
            })
            .style("pointer-events", "none");

          simulation.nodes(pass.nodes).on("tick", ticked);
          simulation.force("link").links(pass.links);

          //   simulation.force("collide");
          legend(g, pass.nodes);
          highlightStrandList(g);

          var drag_handler = d3
            .drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended);

          drag_handler(node);

          //add zoom capabilities



          var zoom_handler = d3
            .zoom()


            .on("zoom", zoomActions)
            .scaleExtent([0.5, 3]);

          zoom_handler(svg);

          //Sort links alphanumerically for removing duplicates
          pass.links.forEach(function (d) {
            var sourceTemp = d.source,
              targetTemp = d.target;

            if (d.source.id > d.target.id) {
              d.source = targetTemp;
              d.target = sourceTemp;
            }
          });
          removeDups(pass.links);

          // removeChildLinks(pass);
          //Node remove function
          function mousedownNode(d, i) {
            nodes.splice(i, 1);
            links = links.filter(function (l) {
              return l.source !== d && l.target !== d;
            });
            d3.event.stopPropagation();

            simulation.restart();
          }
          //Zoom functions
          function zoomActions() {
            g.attr("transform", d3.event.transform);
            g_links.attr("transform", d3.event.transform);
            g_nodes.attr("transform", d3.event.transform);
            (zoomLevel = d3.event.transform.k),
            (panX = d3.event.transform.x),
            (panY = d3.event.transform.y);
            // //console.log
            d3.event.transform;
            //zoomLevel +

            //g.call(zoomX);
          }
          //Node drag functions
          function dragstarted(d) {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
          }

          function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
          }

          function dragended(d) {
            if (!d3.event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
          }

          //Speed up tick functionality

          var ticksPerRender = 300;

          function ticked() {
            var radius = 60;

            node.attr("transform", function (d) {
              d.x = Math.max(radius, Math.min(width - radius, d.x));
              d.y = Math.max(radius, Math.min(height - radius, d.y));
              return "translate(" + d.x + "," + d.y + ")";
            });
            //for (var i = 0; i < ticksPerRender; i++) {
            path.attr("d", linkArc);
            // }
          }

          // These are implementations of the custom forces.
          function clustering(alpha) {
            // //console.log
            "Clusters",
            clusters;
            pass.nodes.forEach(function (d) {
              var cluster = clusters[d.clusterIndex];
              ////console.log
              cluster;
              if (cluster === d) return;
              ////console.log
              "d", d;
              //  //console.log
              "cluster", cluster;
              if (!typeof cluster == "undefined") {
                var x = d.x - cluster.x,
                  y = d.y - cluster.y,
                  l = Math.sqrt(x * x + y * y),
                  r = d.radius + cluster.radius;
                if (l !== r) {
                  l = ((l - r) / l) * alpha;
                  d.x -= x *= l;
                  d.y -= y *= l;
                  cluster.x += x;
                  cluster.y += y;
                }
              }
            });
          }

          function collide(alpha) {
            var quadtree = d3
              .quadtree()
              .x((d) => d.x)
              .y((d) => d.y)
              .addAll(pass.nodes);

            pass.nodes.forEach(function (d) {
              var r = d.radius + maxRadius + Math.max(padding, clusterPadding),
                nx1 = d.x - r,
                nx2 = d.x + r,
                ny1 = d.y - r,
                ny2 = d.y + r;
              quadtree.visit(function (quad, x1, y1, x2, y2) {
                if (quad.data && quad.data !== d) {
                  var x = d.x - quad.data.x,
                    y = d.y - quad.data.y,
                    l = Math.sqrt(x * x + y * y),
                    r =
                    d.r +
                    quad.data.r +
                    (d.cluster === quad.data.cluster ?
                      padding :
                      clusterPadding);
                  if (l < r) {
                    l = ((l - r) / l) * alpha;
                    d.x -= x *= l;
                    d.y -= y *= l;
                    quad.data.x += x;
                    quad.data.y += y;
                  }
                }
                return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
              });
            });
          }

          //redraw-
          function reDraw() {
            //if (tip) tip.remove();
            console.log(pass.nodes);
            var update_nodes = g_nodes.selectAll("g").data(pass.nodes);
            update_nodes.exit().remove();

            node = update_nodes.enter().append("g").merge(update_nodes);
            var update_links = g_links.selectAll("path").data(pass.links);
            update_links.exit().remove();
            path = update_links
              .enter()
              .append("path")

              .merge(update_links);
          }
          //remove-
          function remove(n, i) {
            Array.prototype.delete = function (arr) {
              console.log(arr);

              var t = [];
              for (let j = 0; j < this.length; ++j) {
                let f = false;
                for (let i = 0; i < arr.length; ++i) {
                  if (j == arr[i]) {
                    f = true;
                  }
                }
                if (!f) {
                  t.push(this[j]);
                }
              }

              return t;
            };
            d3.event.bubbles = false;
            if (d3.event.target.tagName == "circle") {
              d3.event.stopPropagation();
            }
            var linkIndex = pass.links.filter((d) => {
              return d.target.index == i || d.source.index == i;
            });
            var nodeIndex = pass.nodes.filter((d) => {
              return d.id.index == i;
            });

            pass.links = pass.links.delete(
              linkIndex.map((d) => {
                return d.index;
              })
            );
            /*  console.log(
              "Nodes before",
              pass.nodes.map(function (node) {
                return node["id"];
              })
            );*/
            //pass.nodes = pass.nodes.slice(i, 1);
            // pass.nodes.push(pass.nodes.splice(i, 1)[0]);
            pass.nodes.splice(i, 1);

            /* console.log(
              "Nodes after",
              pass.nodes.map(function (node) {
                return node["id"];
              })
            );*/

            simulation.nodes(pass.nodes).on("tick", ticked);
            simulation.force("link").links(pass.links);

            //simulation.alpha(1);
            simulation.restart();
            reDraw();
          }
          //Functions for the fade/mouse over events
          const linkedByIndex = {};
          pass.links.forEach((d) => {
            linkedByIndex[`${d.source.index},${d.target.index}`] = 1;
          });

          function isConnected(a, b) {
            return (
              linkedByIndex[`${a.index},${b.index}`] ||
              linkedByIndex[`${b.index},${a.index}`] ||
              a.index === b.index
            );
          }

          function fade(opacity) {
            return (d) => {
              node
                .transition()
                .duration(500)
                .style("opacity", function (o) {
                  const thisOpacity = isConnected(d, o) ? 1 : opacity;
                  return thisOpacity;
                });

              path
                .transition()
                .duration(500)
                .style("stroke-opacity", (o) =>
                  o.source === d || o.target === d ? 1 : opacity
                );
            };
          }
          var store = $.extend(true, {}, pass);

          function showOnly(pG) {
            //TODO: Lots of generalising
            showOnlyFade(pG);
          }

          var printArray = {
            nodes: []
          };
          for (let node of pass.nodes) {
            element = {
              id: "",
              group: "",
              description: ""
            };
            element.id = node.id;
            element.group = node.group;
            element.description = node.description;
            printArray.nodes.push(element);
          }
          ////console.log
          JSON.stringify(printArray);
        });

        //
        //Table Function - now with datatables implementation
        //



    
    
   
        let tableData = [];
        let id = "row_" ;
        var id_string = document.getElementById("id").innerHTML;
        var id_no = parseInt(id_string);
        
        for (let node of pass.nodes) {
          var noArr = node.id.match(/([a-z]*)([\w.]+)/i);
          
          id_no += 1;
         

          element = {
            data: [{
              DT_RowId: "",
              indicator: "",
              action: "",
              measurables: "",
              partners: "",
              project: ""
            }]
           
          }
          //////////console.log
          noArr;

          indicators = node.id + " - " + node.description;

          element.DT_RowId = id + id_no;
          element.indicator = "";
          element.action = "";
          element.measurables = "";
          element.partners = "";
          element.project = "";


          indicatorData.push(indicators);
          console.log(indicatorData);

          tableData.push(element);
        }

     

        $( "#CreateTable" ).click(function() {
          console.log(tableData);
            var table = $('#example').DataTable();  
           table.rows.add(tableData).draw();
           var tr = $('#example tbody tr:eq(0)');
           table
              .rows(tr)
              .invalidate()
              .draw();


            //   editor.add( {
            //     type:     'select',
            //     label:    'Locations:',
            //     name:     'locations',
            //     multiple: true,
            //     separator: ',',
            //     options: [
            //         { label: 'Edinburgh', value: 51 },
            //         { label: 'London',    value: 76 }
            //         // etc
            //     ]
            // } );

          
        });


         $( "#save" ).click(function() {
          var table = $('#example').DataTable();  
          table.draw

        });

        //Save as svg function
        d3.select("#download-svg").on("click", function () {
          var config = {
            filename: document.getElementById("projectName").value + " Model",
          };
          d3_save_svg.save(d3.select("svg").node(), config);
        });

        //Save as png function

        d3.select("#download-png").on("click", function () {
          //Save as image function
          var html = d3
            .select("svg")
            .attr("version", 1.1)
            .attr("xmlns", "http://www.w3.org/2000/svg")
            .node().parentNode.innerHTML;

          var imgsrc =
            "data:image/svg+xml;base64," +
            btoa(unescape(encodeURIComponent(html)));
          var img = '<img src="' + imgsrc + '">';
          d3.select("#svgdataurl").html(img);
          ////console.log
          //  html;

          var canvas = document.querySelector("canvas"),
            context = canvas.getContext("2d");
          context.clearRect(0, 0, canvas.width, canvas.height);
          var image = new Image();
          image.src = imgsrc;
          image.onload = function () {
            context.drawImage(image, 0, 0);

            var canvasdata = canvas.toDataURL("image/jpg", 1);

            var pngimg = '<img src="' + canvasdata + '">';
            d3.select("#jpgdataurl").html(pngimg);

            var a = document.createElement("a");
            a.download =
              document.getElementById("projectName").value + " Model.jpg";
            a.href = canvasdata;
            a.click();
            ////console.log
            // getParentGroupArray(pass.nodes);
          };
        });
        //document;
        //display image
        /*  var img = document.createElement("img");
        img.setAttribute("src", "data:image/svg+xml;base64," + btoa(svgData));

        img.onload = function () {
          ctx.drawImage(img, 0, 0);

          //image link
          ////console.log
(canvas.toDataURL("image/png"));

          //open image
          window.location.href = canvas.toDataURL("image/png");
        };*/

        //  d3.selectAll("svg").style("font-family", "Oswald");

        /*d3.select("#dl").on("click", function () {
          ////////console.log
("download");
          // Get the d3js SVG element and save using saveSvgAsPng.js
          saveSvgAsPng(document.getElementsByTagName("svg")[0], "plot.png", {
            scale: 2,
            backgroundColor: "#FFFFFF",
          });
        });*/
        var modelPHP = $("#pass").val();




        
        // $(document).ready(function () {
        //   $('#CreateModel').one('click', function () {
        //     $.ajax({
        //       method: "POST",
        //       url: "add.php",
        //       data: {
        //         'pass': pass
        //       },

        //       success: function (data) {
        //         alert("success!");
        //       },
        //       error: function (XMLHttpRequest, textStatus, errorThrown) {
        //         console.log("Achievement SQL unsuccessful");
        //       }
        //     });
        //   });
        // });

        console.log(pass);
        // $.ajax({
        //   method: "POST",
        //   url: "add.php",
        //   dataType: "json",
        //   data: {
        //     pass: pass
        //   },

        //   success: function (data) {
        //     alert("success!");
        //   },
        // });
        return pass;
      }

      /*  modelData = JSON.stringify(modelData);
        modelData.replace("nodes", '"nodes"');
        modelData.replace("links", '"links"');
        var modelPHP = $("#modelData").val();*/
      // var modelData = $(this).attr("pass");

      //linkArc - defines curved path that links should take
      function linkArc(d) {
        var maxMultiplier = 10 / 7,
          minMultiplier = 5 / 7;
        //    posOrNeg = Math.floor(Math.random() * 1.1);
        //////console.log
        //(posOrNeg);
        var dx = d.target.x - d.source.x,
          dy = d.target.y - d.source.y,
          dr = Math.sqrt(dx * dx + dy * dy);
        dR = getRandomArbitrary(dr * minMultiplier, dr * maxMultiplier);
        return (
          "M" +
          d.source.x +
          "," +
          d.source.y +
          "A" +
          dr +
          "," +
          dr +
          " 0 0,1" +
          d.target.x +
          "," +
          d.target.y
        );
      }

      //
      //Functions
      //

      function getRadius(d) {
        return d.radius;
      }

      function getGradID(link) {
        return "linkGrad-" + link.source + link.target;
      }

      function getColourById(d, a) {
        for (i = 0; i < d.length; i++) {
          if (d[i]["id"] == a) {
            return d[i]["colour"];
          }
        }
      }

      function getNodeType(d, a) {
        for (i = 0; i < d.length; i++) {
          if (d[i]["id"] == a) {
            return d[i]["type"];
          }
        }
      }

      function getNodeGroup(d, a) {
        for (i = 0; i < d.length; i++) {
          if (d[i]["id"] == a) {
            return d[i]["parentGroup"];
          }
        }
      }

      function getColourByParentGroup(d, a) {
        for (i = 0; i < d.length; i++) {
          if (d[i]["parentGroup"] == a) {
            return d[i]["colour"];
          }
        }
      }

      function getColourByGroup(d, a) {
        for (i = 0; i < d.length; i++) {
          if (d[i]["group"] == a) {
            return d[i]["colour"];
          }
        }
      }

      function getNodePosition(d, a, pos) {
        for (i = 0; i < d.length; i++) {
          if (d[i]["id"] == a && pos) {
            return d[i].x;
          } else if (d[i]["id"] == a && !pos) {
            return d[i].y;
          }
        }
      }

      function getNodeColour(d, a) {
        for (i = 0; i < d.length; i++) {
          if (d[i]["id"] == a) {
            return d[i]["colour"];
          }
        }
      }

      //groupToColor - Go through nodes and assign a colour based on parentGroup
      function groupToColor(d) {
        for (var i = 0; i < d.length; i++) {
          if (d[i]["parentGroup"] == "UN Sustainable Development Goals") {
            d[i]["colour"] = "Red";
          } else if (d[i]["parentGroup"] == "WHO Arts Components") {
            d[i]["colour"] = "DeepPink";
          } else if (d[i]["parentGroup"] == "WHO 5 Ways To Wellbeing") {
            d[i]["colour"] = "LightSalmon";
          } else if (d[i]["parentGroup"] == "Programme for Government") {
            d[i]["colour"] = "Blue";
          } else if (d[i]["parentGroup"] == "Belfast Agenda") {
            d[i]["colour"] = "Purple";
          } else if (d[i]["parentGroup"] == "A City Imagining - Priorities") {
            d[i]["colour"] = "Orange";
          } else if (
            d[i]["parentGroup"] == "Resilience - Shocks and Stresses"
          ) {
            d[i]["colour"] = "Green";
          } else if (d[i]["parentGroup"] == "Resilience") {
            d[i]["colour"] = "DarkOrchid";
          } else if (
            d[i]["parentGroup"] == "Belfast Agenda Immediate Priorities"
          ) {
            d[i]["colour"] = "Aquamarine";
          } else if (d[i]["parentGroup"] == "Culture 2030 Indicators") {
            d[i]["colour"] = "Cornsilk";
          } else if (
            d[i]["parentGroup"] == "Belfast City Council Public Realm"
          ) {
            d[i]["colour"] = "DarkSeaGreen";
          } else if (
            d[i]["parentGroup"] == "Belfast City Council Local Development Plan"
          ) {
            d[i]["colour"] = "Tomato";
          } else if (
            d[i]["parentGroup"] == "Belfast City Council Open Spaces Strategy"
          ) {
            d[i]["colour"] = "Indigo";
          } else if (
            d[i]["parentGroup"] ==
            "Derry City & Strabane District’s Inclusive Strategic Growth Plan"
          ) {
            d[i]["colour"] = "LightCoral";
          } else if (
            d[i]["parentGroup"] ==
            "Protect Life 2 - Suicide Prevention Strategy"
          ) {
            d[i]["colour"] = "DarkSlateBlue";
          } else if (d[i]["parentGroup"] == "Making Life Better") {
            d[i]["colour"] = "FireBrick";
          } else if (
            d[i]["parentGroup"] == "Belfast Green and Blue Infrastructure Plan"
          ) {
            d[i]["colour"] = "MediumSeaGreen";
          } else if (d[i]["parentGroup"] == "A Bolder Vision for Belfast") {
            d[i]["colour"] = "Sienna";
          }
          //Making Life Better A Bolder Vision for Belfast
          //default:   d[i]['colour'] = "Black";
        }
      }
      //sheet

      //legend - Create legend based off passedNodes
      function legend(g, x) {
        var obj = Object.keys(countParentGroupsArray(x)).sort();
        var data = d3.range(obj.length).map((d) => ({
          id: d,
        }));

        var y = height - 400 + i * 40;
        g.selectAll()
          .data(data)
          .enter()
          .append("text")
          .attr("x", width - 400)
          .attr("y", (d, i) => height - 400 + i * 40)
          .text((d, i) => obj[i])
          .style("font-size", "15px")
          .style("font-family", "Oswald")
          .attr("alignment-baseline", "middle");
        g.selectAll()
          .data(data)
          .enter()
          .append("circle")
          .attr("cx", width - 425)
          .attr("cy", (d, i) => height - 400 + i * 40)
          .attr("r", 15)
          .style("fill", "White")
          .style("stroke-width", 5)
          .style("stroke", (d, i) => getColourByParentGroup(x, obj[i]))
          .on("click", function (d) {
            d.noFill = d.noFill || false;

            if (!d.noFill) {
              d3.select(this).style("fill", d3.select(this).style("stroke"));
              showOnlyFadeGroup(
                getKeyByValue(groupColours, d3.select(this).style("stroke")),
                d.noFill
              );
            } else {
              d3.select(this).style("fill", "white");
              showOnlyFadeGroup(
                getKeyByValue(groupColours, d3.select(this).style("stroke")),
                d.noFill
              );
            }
            d.noFill = !d.noFill;
          });
      }

      //highlightStrandList
      var noFill = true;

      function highlightStrandList(g) {
        var data = d3.range(countProperties(highlightObject)).map((d) => ({
          id: d,
        }));

        g.selectAll()
          .data(data)
          .enter()
          .append("text")
          .attr("x", width - 600)
          .attr("y", (d, i) => height - 400 + i * 40)
          .text((d, i) =>
            getKeyByValue(
              highlightObject,
              highlightObject[Object.keys(highlightObject)[i]]
            )
          )
          .style("font-size", "15px")
          .style("font-family", "Oswald")
          .attr("alignment-baseline", "middle");
        g.selectAll()
          .data(data)
          .enter()
          .append("circle")
          .attr("class", "highlight")
          .attr("cx", width - 625)
          .attr("cy", (d, i) => height - 400 + i * 40)
          .attr("r", 15)
          .style("fill", "White")
          .style("stroke-width", 5)
          .style(
            "stroke",
            (d, i) => highlightObject[Object.keys(highlightObject)[i]]
          )
          .on("click", function (d) {
            d.noFill = d.noFill || false;
            console.log(d);
            if (!d.noFill) {
              highlightStore[d.id] = !d.noFill;
              console.log(highlightStore);
              d3.select(this).style("fill", d3.select(this).style("stroke"));
              showOnlyFade(
                getKeyByValue(highlightObject, d3.select(this).style("stroke")),
                d.noFill,
                d.id
              );
            } else {
              highlightStore[d.id] = !d.noFill;
              console.log(highlightStore);
              d3.select(this).style("fill", "white");
              showOnlyFade(
                getKeyByValue(highlightObject, d3.select(this).style("stroke")),
                // d.noFill
                d.noFill,
                d.id
              );
            }
            d.noFill = !d.noFill;
          });
      }

      //getKeyByValue
      function getKeyByValue(object, value) {
        return Object.keys(object).find((key) => object[key] === value);
      }

      //typeToRadius - Go through nodes and assign a raidus based on type (Child/Parent)
      function typeToRadius(d) {
        for (var i = 0; i < d.length; i++) {
          if (d[i]["type"] == "Parent") {
            d[i]["radius"] = 55;
          } else if (d[i]["type"] == "Child") {
            d[i]["radius"] = 15;
          }
        }
      }

      //fakelinks
      function fakeLinks(d) {
        for (var i = 0; i < d.nodes.length - 1; i++) {
          var element = {
            source: "",
            target: ""
          };
          element.source = d.nodes[i].id;
          element.target = d.nodes[i + 1].id;
          //console.log
          //element;
          d.links.push(element);
        }
      }

      //shuffle
      function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          x = a[i];
          a[i] = a[j];
          a[j] = x;
        }
        return a;
      }

      //createParentArray - find all parentNodes and put those nodes in an array
      function createParentArray(d) {
        var obj = countParents(d);
        var arr = Array(countParents(d));
        var index = 0;
        for (var i = 0; i < d.length; i++) {
          if (d[i].type == "Parent") {
            arr[index] = d[i];
            index++;
          }
        }
        return arr;
      }

      //checkNodeHasChild - check that a parentNode has a child node
      function checkNodeHasChild(d, data) {
        d["collision"] = "false";
        var collision;
        for (var i = 0; i < data.length; i++) {
          var parent = d.id.match(/([a-z]*)([\w.]+)/i);
          var child = data[i].id.match(/([a-z]*)([\w.]+)/i);
          if (d["collision"] == "true") {
            break;
          } else if (
            d["parentGroup"] == data[i]["parentGroup"] &&
            Math.floor(parseInt(child[2])) == parseInt(parent[2]) &&
            data[i]["type"] == "Child" &&
            d["collision"] == "false"
          ) {
            d["collision"] = "true";
            collision = d.radius + 15;
          } else {
            collision = d.radius * 2.25;
          }
        }
        return collision;
      }

      /*  function showMore(pG) {
        //Even clicks do...
        if (UNSDGCLICKS % 2 == 0) {
          var temp = JSON.parse(JSON.stringify(pass));
          showGroup(json, temp, pG);
          create(temp);
          originalPass = pass;
          ////////console.log
(originalPass);
        }

        //Odd clicks do...
        //TODO: needs to clear the temp nodes and pass in the orignal model
        else {
          originalPass = originalPass;
          ////////console.log
(originalPass);
          create(originalPass);
        }

        UNSDGCLICKS++;
      };*/

      //showOnlyFade - fade out anything that isn't the pG (parentGroup)
      var showOnlyFadeClicks;

      function showOnlyFade(pG, flag, id) {
        /*if (typeof showOnlyFadeClicks == "undefined") {
          showOnlyFadeClicks = 0;
        }*/
        //////////console.log
        // showOnlyFadeClicks;

        d3.select(".nodes")
          // .append("svg")
          .selectAll("circle")
          .transition()
          .duration(500)
          .style("opacity", function (d) {
            for (var i = 0; i < highlightStore.length; i++) {
              if (highlightStore[i] == true) {
                //if (!flag) {

                if (
                  typeof d != "undefined" &&
                  //  (d.description.includes(pG) ||
                  // !d.description.includes(pG.toLowerCase()) )
                  !d.description.includes(
                    getKeyByValue(
                      highlightObject,
                      highlightObject[Object.keys(highlightObject)[i]]
                    ).toLowerCase()
                  )
                ) {
                  highlightStore[id] = !flag;
                  console.log(highlightStore);
                  return 0.2;
                }
              } else {
                highlightStore[id] = !flag;
                console.log(highlightStore);
                return 1;
              }
            }
          });
        d3.select(".nodes")
          .selectAll("text")
          .transition()
          .duration(500)
          .style("opacity", function (d) {
            // if (showOnlyFadeClicks % 2 == 0) {
            console.log(highlightStore);
            if (highlightStore[i] == true) {
              //if (!flag) {
              console.log(d);
              console.log(
                getKeyByValue(
                  highlightObject,
                  highlightObject[Object.keys(highlightObject)[i]]
                ).toLowerCase()
              );
              if (
                typeof d != "undefined" &&
                //  (d.description.includes(pG) ||
                !d.description.includes(
                  getKeyByValue(
                    highlightObject,
                    highlightObject[Object.keys(highlightObject)[i]]
                  ).toLowerCase()
                )
              ) {
                console.log("success");
                return 0.2;
              }
            } else {
              console.log("failure");
              return 1;
            }
          });
        d3.selectAll("path")
          .transition()
          .duration(500)
          .style("opacity", function () {
            //  if (showOnlyFadeClicks % 2 == 0) {
            if (highlightStore[i] == true) {
              // if (!flag) {
              return 0;
            } else {
              return 0.5;
            }
          });
      }

      //showOnlyFadeParentGroup
      function showOnlyFadeGroup(pG, flag) {
        if (typeof showOnlyFadeClicks == "undefined") {
          showOnlyFadeClicks = 0;
        }
        //////////console.log
        // showOnlyFadeClicks;

        d3.select(".nodes")
          .selectAll("circle")
          .transition()
          .duration(500)
          .style("opacity", function (d) {
            if (!flag) {
              if (typeof d != "undefined" && !d.parentGroup.includes(pG)) {
                return 0.2;
              }
            } else {
              return 1;
            }
          });
        d3.select(".nodes")
          .selectAll("text")
          .transition()
          .duration(500)
          .style("opacity", function (d) {
            if (!flag) {
              if (typeof d != "undefined" && !d.parentGroup.includes(pG)) {
                return 0.2;
              }
            } else {
              return 1;
            }
          });
        d3.selectAll("path")
          .transition()
          .duration(500)
          .style("opacity", function () {
            if (!flag) {
              return 0;
            } else {
              return 0.5;
            }
          });

        showOnlyFadeClicks++;
      }

      //showGroup - only show nodes of a specified parentGroup
      //! will rewrite to make other nodes fade out
      function showGroup(data, pass, pG) {
        for (var i = 0; i < pass.nodes.length; i++) {
          for (var j = 0; j < data.links.length; j++) {
            if (pass.nodes[i].id == data.links[j].source) {
              for (var k = 0; k < data.nodes.length; k++) {
                if (
                  data.nodes[k].id == data.links[j].target &&
                  pG == data.nodes[k].parentGroup
                ) {
                  if (!pass.nodes.some((item) => item === data.nodes[k])) {
                    pass.nodes.push(data.nodes[k]);
                  }
                }
              }
            } else if (pass.nodes[i].id == data.links[j].target) {
              for (var k = 0; k < data.nodes.length; k++) {
                if (
                  data.nodes[k].id == data.links[j].source &&
                  pG == data.nodes[k].parentGroup
                ) {
                  if (!pass.nodes.some((item) => item === data.nodes[k])) {
                    pass.nodes.push(data.nodes[k]);
                  }
                }
              }
            }
          }
        }
      }

      function showGroupFoyle(data, pass) {
        var pg1 = "UN Sustainable Development Goals",
          pg2 =
          "Derry City & Strabane District’s Inclusive Strategic Growth Plan",
          pg3 = "Protect Life 2 - Suicide Prevention Strategy",
          pg4 = "Making Life Better",
          pg5 = "Programme for Government";
        for (var i = 0; i < pass.nodes.length; i++) {
          for (var j = 0; j < data.links.length; j++) {
            for (var k = 0; k < data.nodes.length; k++) {
              if (pass.nodes[i].id == data.links[j].source) {
                if (
                  data.nodes[k].id == data.links[j].target &&
                  (pg1 == data.nodes[k].parentGroup ||
                    pg2 == data.nodes[k].parentGroup ||
                    pg3 == data.nodes[k].parentGroup ||
                    pg4 == data.nodes[k].parentGroup ||
                    pg5 == data.nodes[k].parentGroup)
                ) {
                  if (!pass.nodes.some((item) => item === data.nodes[k])) {
                    pass.nodes.push(data.nodes[k]);
                  }
                }
              } else if (pass.nodes[i].id == data.links[j].target) {
                if (
                  data.nodes[k].id == data.links[j].source &&
                  (pg1 == data.nodes[k].parentGroup ||
                    pg2 == data.nodes[k].parentGroup ||
                    pg3 == data.nodes[k].parentGroup ||
                    pg4 == data.nodes[k].parentGroup ||
                    pg5 == data.nodes[k].parentGroup)
                ) {
                  if (!pass.nodes.some((item) => item === data.nodes[k])) {
                    pass.nodes.push(data.nodes[k]);
                  }
                }
              }
            }
          }
        }
      }

      //removeOrphans - remove any child nodes that don't have a parent
      function removeOrphans(d) {
        for (var i = 0; i < d.length; i++) {
          if (d[i].type == "Child" && d[i].clusterIndex == null) {
            d.splice(i, 1);
          }
        }
      }

      //removeSpecOrphans - remove any child nodes that don't have a parent
      function removeSpecOrphans(pass, d) {
        //for (let node of pass.nodes) {
        // ////////console.log
        "pass.node",
        pass.nodes;
        for (var i = pass.nodes.length - 1; i > 0; i--) {
          // ////////console.log
          //  node;
          if (pass.nodes[i].type == "Child") {
            var node = pass.nodes[i];
            ////////console.log
            // node;
            var child = node.id.match(/([a-z]*)([\w.]+)/i);
            var parent = d.id.match(/([a-z]*)([\w.]+)/i);
            ////////console.log
            // "parent", parent;
            ////////console.log
            //  "child", child;

            if (
              node.parentGroup == d.parentGroup &&
              Math.floor(parseInt(child[2])) == parseInt(parent[2]) &&
              node.type == "Child"
            ) {
              const index = pass.nodes.indexOf(node);
              pass.nodes.splice(index, 1);
            }
          }
        }
        // }
      }
      //addParents - if a child node is selected in search, add it's parent also

      //!Exceptions: PFG
      function addParents(pass, data) {
        for (var i = 0; i < pass.length; i++) {
          if (pass[i].type == "Child" && pass[i].clusterIndex == null) {
            for (var j = 0; j < data.length; j++) {
              var child = pass[i]["id"].match(/([a-z]*)([\w.]+)/i);
              var parent = data[j]["id"].match(/([a-z]*)([\w.]+)/i);
              if (
                pass[i]["parentGroup"] == data[j]["parentGroup"] &&
                Math.floor(parseInt(child[2])) == parseInt(parent[2]) &&
                data[j].type == "Parent" &&
                data[j].parentGroup != "Programme for Government"
              ) {
                if (!checkPassHasNode(pass, data[j].id)) {
                  pass.push(data[j]);
                }
              }
            }
          }
        }
      }

      //addChildren -
      function addChildren(pass, data, pG) {
        for (let passNode of pass.nodes) {
          if (passNode.parentGroup == pG && passNode.type == "Parent") {
            for (let dataNode of data.nodes) {
              var child = dataNode.id.match(/([a-z]*)([\w.]+)/i);
              var parent = passNode.id.match(/([a-z]*)([\w.]+)/i);
              if (
                passNode.parentGroup == dataNode.parentGroup &&
                Math.floor(parseInt(child[2])) == parseInt(parent[2]) &&
                dataNode.type == "Child"
              ) {
                if (!checkPassHasNode(pass.nodes, dataNode.id)) {
                  pass.nodes.push(dataNode);
                }
              }
            }
          }
        }
      }

      //https://stackoverflow.com/questions/40166958/removing-duplicate-edges-from-an-array-for-a-d3-force-directed-graph/40167473#40167473
      //removeDups - remove any duplicate links that exist
      function removeDups(myArray) {
        myArray.sort();
        for (var i = 1; i < myArray.length;) {
          if (
            myArray[i - 1].source === myArray[i].source &&
            myArray[i - 1].target === myArray[i].target
          ) {
            myArray.splice(i, 1);
          } else {
            i++;
          }
        }
        return myArray;
      }

      //removeDups - remove any duplicate links that exist
      function getUnique(arr) {
        let newArray = [];

        // Declare an empty object
        let uniqueObject = {};

        // Loop for the array elements
        for (let i in arr) {
          // Extract the title
          id = arr[i]["id"];

          // Use the title as the index
          uniqueObject[id] = arr[i];
        }

        // Loop to push unique object into array
        for (i in uniqueObject) {
          newArray.push(uniqueObject[i]);
        }
        return newArray;
      }

      //isolate - looks at current nodes and creates new model with nodes of a certain parentGroup
      //! - changing this completely as per 10/08/20
      function isolate(pass, pG) {
        temp = {
          nodes: [],
          links: [],
        };
        for (var i = 0; i < pass.nodes.length; i++) {
          if (pass.nodes[i].parentGroup == pG) {
            temp.nodes.push(pass.nodes[i]);
          }
        }
        //////////console.log
        //temp;
        return temp;
      }

      //removeLinksBetweenSameGroup - if there exists links between nodes of the same parentGroup, remove them
      function removeLinksBetweenSameGroup(pass) {
        for (var i = pass.links.length - 1; i >= 0; i--) {
          //////////////console.log
          // getNodeGroup(pass.nodes, pass.links[i].source);
          ////////////console.log
          // getNodeGroup(pass.nodes, pass.links[i].target);
          if (
            getNodeGroup(pass.nodes, pass.links[i].source) ==
            getNodeGroup(pass.nodes, pass.links[i].target)
          ) {
            //////////console.log
            // "dlinks[i]", pass.links[i];
            pass.links.splice(i, 1);
          }
        }
      }

      //removeChildLinks
      function removeChildLinks(pass) {
        var id, index;
        //for (let node of pass.nodes) {
        //if (node.type == "Child") {
        //id = node.id, index = pass.links.indexOf(id);
        for (var i = pass.links.length - 1; i >= 0; i--) {
          for (let node of pass.nodes) {
            //  id = pass.links.target;
            if (node.id == pass.links.target && node.type == "Child") {
              pass.links.splice(i, 1);
            } else if (node.id == pass.links.source && node.type == "Child") {
              pass.links.splice(i, 1);
            }
          }
        }
        // }
        // }
      }

      //pointChildToParent - give child a clusterIndex which points to its parent in the clusters array
      function pointChildToParent(d, arr) {
        var childArr = [];
        for (var i = 0; i < arr.length; i++) {
          for (var j = 0; j < d.length; j++) {
            var parent = arr[i]["id"].match(/([a-z]*)([\w.]+)/i);
            var child = d[j]["id"].match(/([a-z]*)([\w.]+)/i);
            if (
              arr[i]["parentGroup"] == d[j]["parentGroup"] &&
              Math.floor(parseInt(child[2])) == parseInt(parent[2]) &&
              d[j]["type"] == "Child"
            ) {
              d[j]["clusterIndex"] = i;
            } else {
              childArr[i] = 0;
            }
          }
        }
      }

      //assignParentClusterIndex()
      function assignParentClusterIndex(d, clusters) {
        for (let node of d) {
          for (let c of clusters) {
            if (node.id == c.id) {
              node.clusterIndex = clusters.indexOf(c);
            }
          }
        }
      }

      //addLinksToDynamicJSON - in search box, we select nodes that we want in model, this function determines
      //the links between those nodes and pushes thme to the pass object
      function addLinksToDynamicJSON(allData, jsonData) {
        var linkToPush;
        for (var i = 0, len = jsonData.nodes.length; i < len; i++) {
          for (var j = 0; j < jsonData.nodes.length; j++) {
            for (var k = 0; k < allData.links.length; k++) {
              if (
                (allData.links[k]["source"] == jsonData.nodes[i]["id"] &&
                  allData.links[k]["target"] == jsonData.nodes[j]["id"]) ||
                (allData.links[k]["source"] == jsonData.nodes[j]["id"] &&
                  allData.links[k]["target"] == jsonData.nodes[i]["id"])
              ) {
                linkToPush = allData.links[k];
                if (!jsonData.links.some((item) => item === linkToPush)) {
                  jsonData.links.push(linkToPush);
                }
              }
            }
          }
        }
      }

      //getRandomArbitrary - gets a random number betweena defined range
      function getRandomArbitrary(a, b) {
        return Math.random() * (b - a) + a;
      }

      //distance - Get distance between two nodes
      //! Don't currently use but may do in future
      function distance(node1, node2) {
        var x = Math.abs(node1["fx"] - node2["fx"]);
        var y = Math.abs(node1["fy"] - node2["fy"]);

        var dist = Math.sqrt(x * x + y * y);
        return dist;
      }

      //Edit of : https://stackoverflow.com/questions/15052702/count-unique-elements-in-array-without-sorting
      //countGroups - returns the number of groups in the selected nodes
      //! - will count parent nodes and child nodes from same parentGroup as two seperate groups
      function countGroups(d) {
        var counts = {};
        for (var i = 0; i < d.length; i++) {
          counts[d[i]["group"]] = 1 + (counts[d[i]["group"]] || 0);
        }
        return countProperties(counts);
      }
      //countGroupsArray - returns an array of all the groups in the selected nodes
      function countGroupsArray(d) {
        var counts = {};
        for (var i = 0; i < d.length; i++) {
          counts[d[i]["group"]] = 1 + (counts[d[i]["group"]] || 0);
        }
        return counts;
      }

      //countParentGroups - returns the number of parentGroups in the selected nodes
      function countParentGroups(d) {
        var counts = {};
        for (var i = 0; i < d.length; i++) {
          counts[d[i]["parentGroup"]] = 1 + (counts[d[i]["parentGroup"]] || 0);
        }

        return countProperties(counts);
      }
      //sortByDigits
      function sortByDigits(array) {
        var re = /\D/g;

        array.sort(function (a, b) {
          return (
            parseInt(a.replace(re, ""), 10) - parseInt(b.replace(re, ""), 10)
          );
        });
        return array;
      }

      //sortArray - custom sort
      function sortArray(arr) {
        var tempArr = [],
          n;
        for (var i in arr) {
          tempArr[i] = arr[i].match(/([^0-9]+)|([0-9]+)/g);
          for (var j in tempArr[i]) {
            if (!isNaN((n = parseInt(tempArr[i][j])))) {
              tempArr[i][j] = n;
            }
          }
        }
        tempArr.sort(function (x, y) {
          for (var i in x) {
            if (y.length < i || x[i] < y[i]) {
              return -1; // x is longer
            }
            if (x[i] > y[i]) {
              return 1;
            }
          }
          return 0;
        });
        for (var i in tempArr) {
          arr[i] = tempArr[i].join("");
        }
        return arr;
      }

      //sortTitleIndicatorsToTop - simple bubble sort for bring 1. above 1.1 in array as above sort puts below
      function sortTitleIndicatorsToTop(arr) {
        var s1, s2, n1, n2;
        for (var i = 0; i < arr.length; i++) {
          for (var j = 0; j < arr.length; j++) {
            if (j < arr.length - 1) {
              (s1 = arr[j].substring(0, 4)),
              (s2 = arr[j + 1].substring(0, 4)),
              (n1 = s1.search(/\d[.]\s/g)),
              (n2 = s2.search(/\d[.]\s/g));

              if (
                n2 >= 0 &&
                n1 < 0 // &&
                //arr[j].substring(0, 1) === arr[j + 1].substring(0, 1) //can take this line out if we prefer
              ) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
              }
            }
          }
        }
        return arr;
      }
      //stringSimularity
      function stringSimilarity(s1, s2) {
        var longer = s1;
        var shorter = s2;
        if (s1.length < s2.length) {
          longer = s2;
          shorter = s1;
        }
        var longerLength = longer.length;
        if (longerLength == 0) {
          return 1.0;
        }
        return (
          (longerLength - editDistance(longer, shorter)) /
          parseFloat(longerLength)
        );
      }

      //editDistance

      function editDistance(s1, s2) {
        s1 = s1.toLowerCase();
        s2 = s2.toLowerCase();

        var costs = new Array();
        for (var i = 0; i <= s1.length; i++) {
          var lastValue = i;
          for (var j = 0; j <= s2.length; j++) {
            if (i == 0) costs[j] = j;
            else {
              if (j > 0) {
                var newValue = costs[j - 1];
                if (s1.charAt(i - 1) != s2.charAt(j - 1))
                  newValue =
                  Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                costs[j - 1] = lastValue;
                lastValue = newValue;
              }
            }
          }
          if (i > 0) costs[s2.length] = lastValue;
        }
        return costs[s2.length];
      }

      //getDescription
      function getDescription(d) {
        var descArray = [];
        var tempArray = [];
        var obj = Object.keys(countGroupsArray(d)).sort();
        for (var i = 0; i < obj.length; i++) {
          descArray.push([]);

          for (var j = 0; j < d.length; j++) {
            if (d[j].group == obj[i]) {
              // console.log(obj[i]);
              var child = d[j].id.match(/([a-z]*)([\w.]+)/i);

              descArray[i].push(child[2] + ". " + d[j].description);
            }
          }
          sortArray(descArray[i]);
          sortTitleIndicatorsToTop(descArray[i]);

          //test//
        }

        return descArray;
      }
      //getParentGroupArray = returns an array of parent groups
      function getParentGroupArray(d) {
        var arr = [];
        var noParents = countParents(d);
        for (var j = 0; j < noParents;) {
          for (var i = 0; i < d.length; i++) {
            if (!arr.includes(d[i].parentGroup)) {
              arr[j] = d[i].parentGroup;
              j++;
            }
          }
        }
        return arr;
      }
      //countParentGroupsArray - returns an object of all the groups in the selected nodes
      function countParentGroupsArray(d) {
        var counts = {};
        for (var i = 0; i < d.length; i++) {
          counts[d[i]["parentGroup"]] = 1 + (counts[d[i]["parentGroup"]] || 0);
        }

        return counts;
      }
      //countParents - returns the number of nodes of type Parent in the selected nodes
      function countParents(d) {
        var counts = 0;
        for (var i = 0; i < d.length; i++) {
          if (d[i]["type"] == "Parent") {
            counts++;
          }
        }
        return counts;
      }

      //https://stackoverflow.com/questions/956719/number-of-elements-in-a-javascript-object
      function countProperties(obj) {
        return Object.keys(obj).length;
      }

      //getColour - returns colour of node (used for linkGradient function mainly)
      function getColour(d1, d2) {
        for (var i = 0; i < d2.length; i++) {
          if (d1 == d2[i]["id"]) {
            return d2[i]["colour"];
          }
        }
      }

      //checkPassHasNode - check the current selected nodes 'd' contains a node by id 'src'
      function checkPassHasNode(d, src) {
        var hasNode = false;
        for (var i = 0; i < d.length; i++) {
          if (d[i].id == src) {
            hasNode = true;
            break;
          }
        }
        return hasNode;
      }

      //smartLink - link node targets with the same source
      //e.g. If A->B & A->C, then B->C
      function smartLink(allData, jsonData) {
        for (var i = 0; i < jsonData.nodes.length; i++) {
          for (var j = 0; j < allData.links.length; j++) {
            for (var k = 0; k < allData.links.length; k++) {
              var linkToPush = {
                source: "",
                target: "",
              };
              var reverseLink = {
                source: "",
                target: "",
              };
              var pass = jsonData.nodes;
              var passLinks = jsonData.links;
              var all = allData.links;

              if (
                pass[i].id == all[j].source &&
                pass[i].id == all[k].source &&
                all[j].target != all[k].target &&
                checkPassHasNode(pass, all[j].target) &&
                checkPassHasNode(pass, all[k].target)
              ) {
                linkToPush.source = all[j].target;
                linkToPush.target = all[k].target;
                reverseLink.source = linkToPush.target;
                reverseLink.target = linkToPush.source;
                for (var l = 0; l < jsonData.links.length; l++) {
                  var contains = false;
                  if (
                    JSON.stringify(passLinks[l]) !=
                    JSON.stringify(linkToPush) &&
                    JSON.stringify(passLinks[l]) != JSON.stringify(reverseLink)
                  ) {
                    contains = true;
                  }
                }
                if (contains) {
                  jsonData.links.push(linkToPush);
                }
              } else if (
                pass[i].id == all[j].target &&
                pass[i].id == all[k].target &&
                all[j].source != all[k].source &&
                checkPassHasNode(pass, all[j].source) &&
                checkPassHasNode(pass, all[k].source)
              ) {
                linkToPush.source = all[j].source;
                linkToPush.target = all[k].source;
                reverseLink.source = linkToPush.target;
                reverseLink.target = linkToPush.source;
                for (var l = 0; l < jsonData.links.length; l++) {
                  var contains = false;
                  if (
                    JSON.stringify(passLinks[l]) !=
                    JSON.stringify(linkToPush) &&
                    JSON.stringify(passLinks[l]) != JSON.stringify(reverseLink)
                  ) {
                    contains = true;
                  }
                }
                if (contains) {
                  jsonData.links.push(linkToPush);
                }
              } else if (
                pass[i].id == all[j].target &&
                pass[i].id == all[k].source &&
                all[j].source != all[k].target &&
                checkPassHasNode(pass, all[j].source) &&
                checkPassHasNode(pass, all[k].target)
              ) {
                linkToPush.source = all[j].source;
                linkToPush.target = all[k].target;
                reverseLink.source = linkToPush.target;
                reverseLink.target = linkToPush.source;
                for (var l = 0; l < jsonData.links.length; l++) {
                  var contains = false;
                  if (
                    JSON.stringify(passLinks[l]) !=
                    JSON.stringify(linkToPush) &&
                    JSON.stringify(passLinks[l]) != JSON.stringify(reverseLink)
                  ) {
                    contains = true;
                  }
                }
                if (contains) {
                  jsonData.links.push(linkToPush);
                }
              } else if (
                pass[i].id == all[j].source &&
                pass[i].id == all[k].target &&
                all[j].target != all[k].source &&
                checkPassHasNode(pass, all[j].target) &&
                checkPassHasNode(pass, all[k].source)
              ) {
                linkToPush.source = all[j].target;
                linkToPush.target = all[k].source;
                reverseLink.source = linkToPush.target;
                reverseLink.target = linkToPush.source;
                for (var l = 0; l < jsonData.links.length; l++) {
                  var contains = false;
                  if (
                    JSON.stringify(passLinks[l]) !=
                    JSON.stringify(linkToPush) &&
                    JSON.stringify(passLinks[l]) != JSON.stringify(reverseLink)
                  ) {
                    contains = true;
                  }
                }
                if (contains) {
                  jsonData.links.push(linkToPush);
                }
              }
            }
          }
        }
      }

      //https://stackoverflow.com/questions/6632530/chunk-split-a-string-in-javascript-without-breaking-words
      function splitStringWithoutBreakingWords(len, str) {
        var curr = len;
        var prev = 0;

        output = [];

        while (str[curr]) {
          if (str[curr++] == " ") {
            output.push(str.substring(prev, curr));
            prev = curr;
            curr += len;
          }
        }
        output.push(str.substr(prev));
        return output;
      }
    });
  });
});




// This sample uses the Autocomplete widget to help the user select a
// place, then it retrieves the address components associated with that
// place, and then it populates the form fields with those details.
// This sample requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script
// src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
let placeSearch;
let autocomplete;
const componentForm = {
  street_number: "short_name",
  route: "long_name",
  locality: "long_name",
  administrative_area_level_1: "short_name",
  country: "long_name",
  postal_code: "short_name",
};

function initAutocomplete() {
  // Create the autocomplete object, restricting the search predictions to
  // geographical location types.
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("autocomplete"), {
      types: ["geocode"]
    }
  );
  // Avoid paying for data that you don't need by restricting the set of
  // place fields that are returned to just the address components.
  autocomplete.setFields(["address_component"]);
  // When the user selects an address from the drop-down, populate the
  // address fields in the form.
  autocomplete.addListener("place_changed", fillInAddress);
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  const place = autocomplete.getPlace();

  for (const component in componentForm) {
    document.getElementById(component).value = "";
    document.getElementById(component).disabled = false;
  }

  // Get each component of the address from the place details,
  // and then fill-in the corresponding field on the form.
  for (const component of place.address_components) {
    const addressType = component.types[0];

    if (componentForm[addressType]) {
      const val = component[componentForm[addressType]];
      document.getElementById(addressType).value = val;
    }
  }
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      const circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy,
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}