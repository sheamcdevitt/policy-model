//Empty JSON to populate
var jsonToPass = { nodes: [], links: [] };
var originalPass;
//Array for all the policies websites
//TODO finish inserting rest of the websites
var websites = [
  "https://www.un.org/sustainabledevelopment/sustainable-development-goals/",
  "https://www.northernireland.gov.uk/consultations/draft-programme-government-framework-2016-21-and-questionnaire",
  "https://whc.unesco.org/en/culture2030indicators/",
  //to be continued
];

//Array for all the colors that will be used by each parentGroup
//*: colors need to be assigned to their colour and not change
//TODO write function for above
var colours = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "LightSteelBlue",
  "LightYellow",
  "Lime",
  "LimeGreen",
  "Linen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "MintCream",
  "MistyRose",
  "Moccasin",
  "NavajoWhite",
  "Navy",
  "OldLace",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "SeaShell",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "Snow",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "White",
  "WhiteSmoke",
  "Yellow",
  "YellowGreen",
];

//Search box function; searches nodes.json by id, group and description
$(document).ready(function () {
  $.ajaxSetup({ cache: false });
  $("#search").on("change paste keyup", function () {
    $("#result").html("");
    $("#state").val("");
    var searchField = $("#search").val();
    var expression = new RegExp(searchField, "i");
    $.getJSON("nodes.json", function (data) {
      $.each(data, function (key, value) {
        if (
          value.id.search(expression) != -1 ||
          value.description.search(expression) != -1 ||
          value.group.search(expression) != -1
        ) {
          $("#result").append(
            '<li class="list-group-item link-class">' +
              value.group +
              ' | <span class="text-muted">' +
              value.description +
              '<style = "visibility:hidden;"> | *' +
              value.id +
              "  "
          );
        }

        //   TODO: ux improvement - remove list when clicked off, when anywhere other than id clicked, remove children - todo: bug fixes

        //    $('html').click(function(e){
        //     if(!$(e.target).is('#result-list') || (!$(e.target).is('#list-text'))) {
        //         $('#result').empty();
        //     }

        // });
      });

      //Adds clicked node value to jsonToPass
      $("#result").on("click", "li", function () {
        var click_text = $(this).text().split("*");
        $("#search").val($.trim(click_text[1]));
        var clickedId = $("#search").val();
        console.log(clickedId + " added!");
        //Loop through nodes.json and return the node based on whats been selected
        //? Better way to do this? Works but seems lazy way of doing it
        for (var i = 0; i < data.length; i++) {
          if (
            data[i]["id"] == clickedId &&
            !jsonToPass.nodes.some((item) => item.id === clickedId)
          ) {
            jsonToPass.nodes.push(data[i]);
            $("#add").append(
              '<li class="list-group-item list-group-item-success">' +
                clickedId +
                ' added!<span class="badge">X</span></li>'
            );
          }
        }
      });

      //TODO: figure out better way to track how many times a button has been clicked, otherwise going to get pretty messy
      var UNSDGCLICKS = 0;
      //Declare svg values from existing svg
      var svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");

      var tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

      //If "Create Model" is clicked, create the model using whatever is passed into jsonToPass
      document.getElementById("CreateModel").onclick = function () {
        create(jsonToPass);
        jsonToPass = { nodes: [], links: [] };
      };

      //create function: holds all functions for creating model
      function create(pass) {
        //Remove previous model
        svg.selectAll("*").remove();

        //Pass in Data.json so we can access all nodes and links that exist
        d3.json("Data.json", function (error, json) {
          if (error) throw error;

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
              console.log(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              console.log(originalPass);
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
              console.log(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              console.log(originalPass);
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
              console.log(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              console.log(originalPass);
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
              console.log(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              console.log(originalPass);
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
              console.log(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              console.log(originalPass);
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
              console.log(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              console.log(originalPass);
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
              console.log(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              console.log(originalPass);
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
              console.log(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              console.log(originalPass);
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
              console.log(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              console.log(originalPass);
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
              console.log(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              console.log(originalPass);
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
              console.log(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              console.log(originalPass);
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
              console.log(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              console.log(originalPass);
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
              console.log(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              console.log(originalPass);
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
              console.log(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              console.log(originalPass);
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
              console.log(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              console.log(originalPass);
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
              console.log(originalPass);
            }

            //Odd clicks do...
            //TODO: needs to clear the temp nodes and pass in the orignal model
            else {
              originalPass = originalPass;
              console.log(originalPass);
              create(originalPass);
            }

            UNSDGCLICKS++;
          };

          //If indicators clicked, add their parents to the model too (if not also clicked)
          addParents(pass.nodes, json.nodes);
          //Create clusters array : parentNodes which have childrenNodes (for force.cluster) and
          //give each of the relevant children a 'clusterindex' which points it to its parent's index
          //in 'clusters' which is then used by force.cluster so that children circle their parents
          var clusters = createParentArray(pass.nodes);
          pointChildToParent(pass.nodes, clusters);

          //Required functions (more information on each in //Functions Section)
          groupToColor(pass.nodes);
          typeToRadius(pass.nodes);
          addLinksToDynamicJSON(json, pass);
          smartLink(json, pass);
          removeLinksBetweenSameGroup(pass);
          legend(pass.nodes);

          //Physics simualtion using d3 library
          //TODO: play around with values to make best looking model
          var simulation = d3
            .forceSimulation()
            .force(
              "link",
              d3
                .forceLink()
                .id(function (d) {
                  return d.id;
                })
                .strength(0.01)
                .distance(300)
            )
            //Charge - replusion/attraction between individual nodes
            .force(
              "charge",
              d3.forceManyBody().strength(function (d) {
                //if (d.type == "Parent"){return -500;}
                ///else {return -100;}
                return -500;
              })
            )
            //Attract - attracts all nodes to a target co-ordinate
            //This is used to bring nodes together to middle of canvas, allows us to be less specific with our force "y"
            //force "x" regional values below
            .force(
              "attract",
              d3
                .forceAttract()
                .target([width / 2, height / 2])
                .strength(0.4)
            )
            //Collision - collision between individual nodes
            .force(
              "collision",
              d3
                .forceCollide()
                .radius(function (fn) {
                  if (fn.type == "Parent") {
                    return checkNodeHasChild(fn, pass.nodes);
                  } else {
                    return 1.5 * fn.radius;
                  }
                })
                .strength(1)
            )
            //Set where nodes will be attracted to on the y axis
            //Different groups will have differnt y values
            .force(
              "y",
              d3.forceY(function (fn) {
                var obj = Object.keys(
                  countParentGroupsArray(pass.nodes)
                ).sort();
                var w = width,
                  h = height,
                  Ox = 100,
                  Oy = 100;
                var regionArray;
                if (countParentGroups(pass.nodes) == 1) {
                  regionArray = [[Ox, Oy, w - 100, h - 100]];
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
                    [Ox, (4 * h) / 5 + 50, w - 100, h - 100],
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
                }

                for (var i = 0, len = pass.nodes.length; i < len; i++) {
                  if (
                    fn.parentGroup ==
                    obj[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes)
                    ]
                  ) {
                    return regionArray[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes)
                    ][1];
                  } else if (
                    fn.parentGroup ==
                    obj[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes) +
                        1
                    ]
                  ) {
                    return regionArray[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes) +
                        1
                    ][1];
                  } else if (
                    fn.parentGroup ==
                    obj[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes) +
                        2
                    ]
                  ) {
                    return regionArray[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes) +
                        2
                    ][1];
                  } else if (
                    fn.parentGroup ==
                    obj[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes) +
                        3
                    ]
                  ) {
                    return regionArray[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes) +
                        3
                    ][1];
                  } else if (
                    fn.parentGroup ==
                    obj[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes) +
                        4
                    ]
                  ) {
                    return regionArray[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes) +
                        4
                    ][1];
                  } else if (
                    fn.parentGroup ==
                    obj[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes) +
                        5
                    ]
                  ) {
                    return regionArray[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes) +
                        5
                    ][1];
                  } else if (
                    fn.parentGroup ==
                    obj[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes) +
                        6
                    ]
                  ) {
                    return regionArray[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes) +
                        6
                    ][1];
                  }
                }
              })
            )
            //Set where nodes will be attracted to on the x axis
            //Different groups will have differnt x values
            //TODO refactor so that we're not writing same thing twice for x and y
            .force(
              "x",
              d3.forceX(function (fn) {
                var obj = Object.keys(
                  countParentGroupsArray(pass.nodes)
                ).sort();
                var w = width,
                  h = height,
                  Ox = 100,
                  Oy = 100;
                var regionArray;
                if (countParentGroups(pass.nodes) == 1) {
                  regionArray = [[Ox, Oy, w - 100, h - 100]];
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
                    [Ox, (4 * h) / 5 + 50, w - 100, h - 100],
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
                }

                for (var i = 0, len = pass.nodes.length; i < len; i++) {
                  if (
                    fn.parentGroup ==
                    obj[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes)
                    ]
                  ) {
                    return regionArray[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes)
                    ][0];
                  } else if (
                    fn.parentGroup ==
                    obj[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes) +
                        1
                    ]
                  ) {
                    return regionArray[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes) +
                        1
                    ][0];
                  } else if (
                    fn.parentGroup ==
                    obj[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes) +
                        2
                    ]
                  ) {
                    return regionArray[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes) +
                        2
                    ][0];
                  } else if (
                    fn.parentGroup ==
                    obj[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes) +
                        3
                    ]
                  ) {
                    return regionArray[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes) +
                        3
                    ][0];
                  } else if (
                    fn.parentGroup ==
                    obj[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes) +
                        4
                    ]
                  ) {
                    return regionArray[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes) +
                        4
                    ][0];
                  } else if (
                    fn.parentGroup ==
                    obj[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes) +
                        5
                    ]
                  ) {
                    return regionArray[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes) +
                        5
                    ][0];
                  } else if (
                    fn.parentGroup ==
                    obj[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes) +
                        6
                    ]
                  ) {
                    return regionArray[
                      countParentGroups(pass.nodes) -
                        countParentGroups(pass.nodes) +
                        6
                    ][0];
                  }
                }
              })
            )
            //! probably need to remove as does same as attract but...
            //TODO ... need to read documentation and see difference (will keep for now)
            .force("center", d3.forceCenter(width / 2, height / 2))
            //Cluster - as explained above: there is a "parentArray" -> clusters : all parentNodes which have children in an array
            //Then pointChildToParent function assigns each parent with a clusterIndex which tells it where in the clusters array its parent
            //is and therefore where to cluster do
            .force(
              "cluster",
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
          var link = svg.append("g").attr("class", "links");

          //Define the path which links will take
          //TODO figure out the gradient function so that
          var path = svg
            .append("g")
            .selectAll("path")
            .data(pass.links)
            .enter()
            .append("path")
            .attr("class", function (d) {
              return "link " + d.type;
            })
            .style("fill", "none")
            .style("stroke-width", ".5") //!Keeping here in case I come back to it //Mouseover functions //TODO brainstorm ideas with team if they need mouse over function or what that would show
            .style("stroke", function (fn) {
              if (
                getNodeType(pass.nodes, fn.source) == "Parent" &&
                getNodeType(pass.nodes, fn.target) == "Parent"
              ) {
                var defs = svg.append("defs");

                var gradient = defs
                  .append("linearGradient")
                  .attr("id", getGradID(fn))
                  .attr("x1", getNodePosition(pass.nodes, fn.source, true))
                  .attr("x2", getNodePosition(pass.nodes, fn.target, true))
                  .attr("y1", getNodePosition(pass.nodes, fn.source, false))
                  .attr("y2", getNodePosition(pass.nodes, fn.target, false));

                d3.select("#" + getGradID(fn))
                  .append("stop")
                  .attr("class", "start")
                  .attr("offset", 0)
                  .attr("stop-color", getNodeColour(pass.nodes, fn.source)) //getColour(d.source,graph.nodes))
                  .attr("stop-opacity", 0.5);
                //console.log(getNodeColour(pass.nodes, fn.source));
                //console.log(getNodeColour(pass.nodes, fn.target));
                gradient
                  .append("stop")
                  .attr("class", "end")
                  .attr("offset", 1)
                  .attr("stop-color", getNodeColour(pass.nodes, fn.target)) // getColour(d.target,graph.nodes))
                  .attr("stop-opacity", 0.5);
                return "url(#" + getGradID(fn) + ")";
              } else {
                return "White";
              }
            })
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
            });
          //Gradient function for links
          //TODO: fix
          /* .style("stroke", function (fn) {
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
                .attr("stop-color", getColourById(pass.nodes, fn.target)) //getColour(d.source,graph.nodes))
                .attr("stop-opacity", 0.5);
              
              gradient
                .append("stop")
                .attr("class", "end")
                .attr("offset", "0%")
                .attr("stop-color", getColourById(pass.nodes, fn.source)) // getColour(d.target,graph.nodes))
                .attr("stop-opacity", 0.5);
              return "url(#svgGradient)";
            });*/

          var tip;
          var node = svg
            .append("g")
            .attr("class", "nodes")
            .selectAll("g")
            .data(pass.nodes)
            .enter()
            .append("g");

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

            //.on("dblclick", doubleClick)
            //Node click function
            //TODO: fix fade bug with children, create 'mouseout' even if mouse taken off node
            .on("click", function (d) {
              var clicks = $(this).data("clicks");
              if (clicks == null) {
                clicks = false;
              }
              //if (!clicks) {
              if (
                (d3.select(this).attr("r") == 55 && d.type == "Parent") ||
                (d3.select(this).attr("r") == 15 && d.type == "Child")
              ) {
                d3.select(this)
                  .transition()
                  .duration(750)
                  .attr("r", d.type == "Parent" ? 65 : 25);
                //.style("fill-opacity",0.5)
                //.style("stroke-opacity",0.5)
                d3.event.stopPropagation();

                if (tip) tip.remove();

                tip = svg
                  .append("g")
                  .attr(
                    "transform",
                    "translate(" + (d.x + 50) + "," + d.y + ")"
                  );
                let strGroup = d.group;
                strGroup = strGroup.slice(0, -1);
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
                  .style("font-size", "26px");

                for (var i = 0; i < linesNo; i++) {
                  var sub = output[i];
                  tip
                    .append("text")
                    .text(i == 0 ? "• " + sub : sub)
                    .attr("dy", (i + 2) * 30)
                    .attr("x", 5)
                    .style("font-size", "20px");
                }

                var bbox = tip.node().getBBox();
                rect
                  .attr("width", bbox.width + 10)
                  .attr("height", bbox.height + 10);
              } else {
                d3.select(this).transition().duration(750).attr("r", d.radius);
                d3.event.stopPropagation();
                if (tip) tip.remove();
              }
              $(this).data("clicks", !clicks);
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
            //Text function for nodes
            .text(function (d) {
              if (d.type == "Child") {
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
              output = splitStringWithoutBreakingWords(6, d.display);
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
              output = splitStringWithoutBreakingWords(6, d.display);
              return output;
              //console.log("OUTPUT   ", output);
              //console.log("data", d.display.split(" "));
              // return d.display.split(" ")
            })
            .enter()
            .append("tspan")
            .attr("class", "display")
            .text(function (d) {
              //console.log(d);
              if (d.type == "Child") {
                //console.log("CHILD");
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
            });
          node
            .append("text")
            .attr("dy", 10) // you can vary how far apart it shows up
            .attr("text-anchor", "middle")
            .style("fill", function (d) {
              return d.colour;
            })
            .text(function (d) {
              return d.secondDisplay;
            })
            .style("font-size", function (d) {
              if (d.secondDisplay != null) {
                if (d.secondDisplay.length > 13) {
                  return "12px";
                } else {
                  return "15px";
                }
              }
            });

          simulation.nodes(pass.nodes).on("tick", ticked);

          simulation.force("link").links(pass.links);

          simulation.force("collide");

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

          function ticked() {
            node.attr("transform", function (d) {
              return "translate(" + d.x + "," + d.y + ")";
            });
            path.attr("d", linkArc);
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
        });

        //
        //Table Function
        //
        let tableData = [];
        for (let node of pass.nodes) {
          var noArr = node.id.match(/([a-z]*)([\w.]+)/i);
          var element = {
            policyIndicator: "",
            action: "",
            measurable: "",
            keyPartners: "",
          };
          //console.log(noArr);
          element.policyIndicator = node.group.slice(0, -1) + " " + noArr[2];
          tableData.push(element);
        }

        //  window.onload = () => {
        document.getElementById("CreateTable").onclick = function () {
          //console.log(tableData);
          loadTableData(tableData);
        };
        // };
      }

      //linkArc - defines curved path that links should take
      function linkArc(d) {
        var dx = d.target.x - d.source.x,
          dy = d.target.y - d.source.y,
          dr = Math.sqrt(dx * dx + dy * dy);
        return (
          "M" +
          d.source.x +
          "," +
          d.source.y +
          "A" +
          dr +
          "," +
          dr +
          " 0 0,1 " +
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
            d[i]["colour"] = "Yellow";
          } else if (
            d[i]["parentGroup"] == "Resilience - Shocks and Stresses"
          ) {
            d[i]["colour"] = "Green";
          } else if (d[i]["parentGroup"] == "Resilience") {
            d[i]["colour"] = "Orange";
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
            d[i]["colour"] = "Gold";
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
            d[i]["colour"] = "LightGreen";
          }
          //default:   d[i]['colour'] = "Black";
        }
      }
      //legend - Create legend based off passedNodes
      function legend(d) {
        var obj = Object.keys(countParentGroupsArray(d)).sort();
        for (var i = 0; i < obj.length; i++) {
          var y = height - 1000 + i * 40;
          svg
            .append("text")
            .attr("x", 50)
            .attr("y", y)
            .text(obj[i])
            .style("font-size", "15px")
            .attr("alignment-baseline", "middle");
          svg
            .append("circle")
            .attr("cx", 25)
            .attr("cy", y)
            .attr("r", 15)
            .style("fill", "White")
            .style("stroke-width", 5)
            .style("stroke", getColourByParentGroup(d, obj[i]));
        }
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

      //createParentArray - find all parentNodes nad put those nodes in an array
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
          console.log(originalPass);
        }

        //Odd clicks do...
        //TODO: needs to clear the temp nodes and pass in the orignal model
        else {
          originalPass = originalPass;
          console.log(originalPass);
          create(originalPass);
        }

        UNSDGCLICKS++;
      };*/

      //showOnlyFade - fade out anything that isn't the pG (parentGroup)
      var showOnlyFadeClicks;
      function showOnlyFade(pG) {
        if (typeof showOnlyFadeClicks == "undefined") {
          showOnlyFadeClicks = 0;
        }
        //console.log(showOnlyFadeClicks);

        d3.selectAll("circle")
          .transition()
          .duration(500)
          .style("opacity", function (d) {
            if (showOnlyFadeClicks % 2 == 0) {
              if (typeof d != "undefined" && d.parentGroup != pG) {
                return 0.1;
              }
            } else {
              return 1;
            }
          });
        d3.selectAll("text")
          .transition()
          .duration(500)
          .style("opacity", function (d) {
            if (showOnlyFadeClicks % 2 == 0) {
              if (typeof d != "undefined" && d.parentGroup != pG) {
                return 0.2;
              }
            } else {
              return 1;
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

      //removeOrphans - remove any child nodes that don't have a parent
      function removeOrphans(d) {
        for (var i = 0; i < d.length; i++) {
          if (d[i].type == "Child" && d[i].clusterIndex == null) {
            d.splice(i, 1);
          }
        }
      }

      //addParents - if a child node is selected in search, add it's parent also
      function addParents(pass, data) {
        for (var i = 0; i < pass.length; i++) {
          if (pass[i].type == "Child" && pass[i].clusterIndex == null) {
            for (var j = 0; j < data.length; j++) {
              var child = pass[i]["id"].match(/([a-z]*)([\w.]+)/i);
              var parent = data[j]["id"].match(/([a-z]*)([\w.]+)/i);
              if (
                pass[i]["parentGroup"] == data[j]["parentGroup"] &&
                Math.floor(parseInt(child[2])) == parseInt(parent[2]) &&
                data[j].type == "Parent"
              ) {
                if (!checkPassHasNode(pass, data[j].id)) {
                  pass.push(data[j]);
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
        for (var i = 1; i < myArray.length; ) {
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

      //isolate - looks at current nodes and creates new model with nodes of a certain parentGroup
      //! - changing this completely as per 10/08/20
      function isolate(pass, pG) {
        temp = { nodes: [], links: [] };
        for (var i = 0; i < pass.nodes.length; i++) {
          if (pass.nodes[i].parentGroup == pG) {
            temp.nodes.push(pass.nodes[i]);
          }
        }
        //console.log(temp);
        return temp;
      }

      //removeLinksBetweenSameGroup - if there exists links between nodes of the same parentGroup, remove them
      function removeLinksBetweenSameGroup(pass) {
        for (var i = pass.links.length - 1; i >= 0; i--) {
          //////console.log(getNodeGroup(pass.nodes,pass.links[i].source));
          ////console.log(getNodeGroup(pass.nodes,pass.links[i].target));
          if (
            getNodeGroup(pass.nodes, pass.links[i].source) ==
            getNodeGroup(pass.nodes, pass.links[i].target)
          ) {
            //console.log("dlinks[i]", pass.links[i]);
            pass.links.splice(i, 1);
          }
        }
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

      //countParentGroups - returns the number of parentGroups in the selected nodes
      function countParentGroups(d) {
        var counts = {};
        for (var i = 0; i < d.length; i++) {
          counts[d[i]["parentGroup"]] = 1 + (counts[d[i]["parentGroup"]] || 0);
        }
        return countProperties(counts);
      }

      //countParentGroupsArray - returns an array of all the groups in the selected nodes
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
              var linkToPush = { source: "", target: "" };
              var reverseLink = { source: "", target: "" };
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
