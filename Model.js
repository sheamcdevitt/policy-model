var jsonToPass = {"nodes":[],"links":[]};

var websites = [
"https://www.un.org/sustainabledevelopment/sustainable-development-goals/",
"https://www.northernireland.gov.uk/consultations/draft-programme-government-framework-2016-21-and-questionnaire",
"https://whc.unesco.org/en/culture2030indicators/"
//to be continued
]

////////////////////// 
///testing workflow///
//////////////////////

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



$(document).ready(function(){
  $.ajaxSetup({ cache: false });
  $('#search').on( 'change paste keyup', function(){
   $('#result').html('');
   $('#state').val('');
   var searchField = $('#search').val();
   var expression = new RegExp(searchField, "i");
   $.getJSON('nodes.json', function(data) {
    $.each(data, function(key, value){
     if (value.id.search(expression) != -1 || value.description.search(expression) != -1 || value.group.search(expression) != -1)
     {
         $('#result').append('<li class="list-group-item link-class">'+value.group+' | <span class="text-muted">'+value.description+'<style = "visibility:hidden;"> | *'  +value.id+'  ');
         
 }


 
//   TODO: ux improvement - remove list when clicked off, when anywhere other than id clicked, remove children - todo: bug fixes
           
//    $('html').click(function(e){    
//     if(!$(e.target).is('#result-list') || (!$(e.target).is('#list-text'))) {
//         $('#result').empty();
//     }

// });
         
   
 
 
 });  


 $('#result').on('click', 'li', function() {
       
  var click_text = $(this).text().split('*');
  
  $('#search').val($.trim(click_text[1]));
  //////console.log($('#search').val());

  var clickedId = $('#search').val();

  for (var i = 0; i < data.length; i++) {
      if (data[i]['id']== clickedId && !jsonToPass.nodes.some(item => item.id === clickedId)) {
        jsonToPass.nodes.push(data[i]);
        $("#add").append('<li class="list-group-item list-group-item-success">' + clickedId + ' added!<span class="badge">X</span></li>');
       }
     
  }
 
 });     


var UNSDGCLICKS = 0;
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var tooltip = d3.select("body")
  .append("div")
  .attr("class", "tooltip")
  .style("opacity", 0);

   

var color = d3.scaleOrdinal(d3.schemeCategory20);


 document.getElementById("CreateModel").onclick = function() {
  create(jsonToPass);
  jsonToPass = {"nodes":[],"links":[]};
};






function create(pass) {
//function create(jsonToPass) {
//if (error) throw error;
svg.selectAll("*").remove();




d3.json("Data.json", function(error, json) {
  if (error) throw error;
  
  document.getElementById("SHOWONLYUNSDG").onclick = function() {
  
  create(showOnly(pass,"UN Sustainable Development Goals"))
  
  
  }
  document.getElementById("UNSDG").onclick = function() {
    if (UNSDGCLICKS % 2 == 0){
    var temp = JSON.parse(JSON.stringify(pass));
   // temp.nodes.push(json.nodes[0]);
   showGroup(json,temp,"UN Sustainable Development Goals");
    console.log(temp);
    create(temp);
    
    }
    //NEED TO CLEAR 
    else {
      console.log(pass);
      create(pass);
    }
    UNSDGCLICKS++;
    console.log(UNSDGCLICKS);
   // jsonToPass = {"nodes":[],"links":[]};
  };
  var clusters = createParentArray(pass.nodes);
  //console.log(clusters);
  createChildNumberArray(pass.nodes, clusters);
  addParents(pass.nodes,json.nodes);

  var clusters = createParentArray(pass.nodes);
  createChildNumberArray(pass.nodes, clusters);
  //  
 // removeOrphans(pass.nodes);
  
  groupToColor(pass.nodes);
  typeToRadius(pass.nodes);
  
  addLinksToDynamicJSON(json, pass);
  smartLink(json,pass);
  //console.log("After smartlink",pass);
  removeLinksBetweenSameGroup(pass);
  //console.log("after remove groups",pass);
  
  legend(pass.nodes);

  
  //positionChildNodes(d);
  
 
  
  //console.log(pass);
  
  
 
var simulation = d3.forceSimulation()
.force("link", d3.forceLink().id(function(d) { return d.id; }).strength(0.01).distance(300))
.force("charge", d3.forceManyBody().strength(function(d){
  //if (d.type == "Parent"){return -500;}
  ///else {return -100;}
  return -500;
}))

    .force('attract', d3.forceAttract()	// see 'Accessing the module' above for the correct syntax
    .target([width/2, height/2])
    .strength(0.4))
.force('collision', d3.forceCollide().radius(function(fn) {
  
  if (fn.type == "Parent"){
    ////console.log(fn.id, checkNodeHasChild(fn,pass.nodes));
    return checkNodeHasChild(fn,pass.nodes);
  
  }
  else {return fn.radius;}
}).strength(1))
.force("y", d3.forceY(function(fn){
  
var obj = Object.keys(countGroupsArray(pass.nodes)).sort();  
//////console.log(obj);
//////console.log(countParentGroups(pass.nodes));
 
  
  
  //////console.log(countParentGroups(pass.nodes));
  var w = width, h = height, Ox = 100, Oy = 100;
  var regionArray;
  if (countParentGroups(pass.nodes) == 1){regionArray = [[Ox,Oy,w-100,h-100]];}
  else if (countParentGroups(pass.nodes) == 2){regionArray = [[Ox,Oy,(w/2)-50,h-100],[(w/2)+50,Oy,w-100, h-100]];}
  else if (countParentGroups(pass.nodes) == 3){regionArray = [[Ox,Oy,(w/2)-50,((2*h)/3)-50],[(w/2)+50,Oy,w-100,((2*h)/3)-50],[Ox,((2*h)/3)+50,w-100,h-100]];}
  else if (countParentGroups(pass.nodes) == 4){regionArray = [[Ox,Oy,(w/2)-50,(h/2)-50],[(w/2)+50,Oy,w-100,(h/2)-50],[Ox,(h/2)+50,(w/2)-50,h-100],[(w/2)+50,(h/2)+50,w-100,h-100]];}
  else if (countParentGroups(pass.nodes) == 5){regionArray = [[Ox,Oy,(w/2)-50,((2*h)/5)-50],[(w/2)+50,Oy,w-100,((2*h)/5) -50],[Ox,((2*h)/5)+50,(w/2)-50, ((4*h)/5) -50],[(w/2)-50,((2*h)/5)+50,w-100,((4*h)/5) -50],[Ox,((4*h)/5) +50,w-100,h-100]];}
  else if (countParentGroups(pass.nodes) == 6){regionArray = [[Ox,Oy,(w/2)-50,(h/3)-50],[(w/2)+50,Oy,w-50,(h/3)-50],[Ox,(h/3)+50,(w/2)-50,((2*h)/3)-50],[(w/2)+50,(h/3)+50,w-50,((2*h)/3)-50],[Ox,((2*h)/3)+50,(w/2)-50, h-50],[(w/2)+50,((2*h)/3)+50,w-50,h-50]]}
  
  for (var i = 0, len = pass.nodes.length; i < len; i++) {
   
    //////console.log(regionArray);
    
    if(fn.parentGroup == obj[countParentGroups(pass.nodes)-countParentGroups(pass.nodes)]){
      return regionArray[countParentGroups(pass.nodes)-countParentGroups(pass.nodes)][1];
    } 
    else if(fn.parentGroup == obj[countParentGroups(pass.nodes)-countParentGroups(pass.nodes) +1]){
      return regionArray[countParentGroups(pass.nodes)-countParentGroups(pass.nodes)+1][1];
    }
    else if(fn.parentGroup == obj[countParentGroups(pass.nodes)-countParentGroups(pass.nodes) +2]){
      return regionArray[countParentGroups(pass.nodes)-countParentGroups(pass.nodes)+2][1];
     }
     else if(fn.parentGroup == obj[countParentGroups(pass.nodes)-countParentGroups(pass.nodes) +3]){
      return regionArray[countParentGroups(pass.nodes)-countParentGroups(pass.nodes)+3][1];
     }
     else if(fn.parentGroup == obj[countParentGroups(pass.nodes)-countParentGroups(pass.nodes) +4]){
     return regionArray[countParentGroups(pass.nodes)-countParentGroups(pass.nodes)+4][1];
     }
     else if(fn.parentGroup == obj[countParentGroups(pass.nodes)-countParentGroups(pass.nodes) +5]){
    return regionArray[countParentGroups(pass.nodes)-countParentGroups(pass.nodes)+5][1];
     }
     else if(fn.parentGroup == obj[countParentGroups(pass.nodes)-countParentGroups(pass.nodes) +6]){
    return regionArray[countParentGroups(pass.nodes)-countParentGroups(pass.nodes)+6][1];
     }
    }











}))
.force("x",d3.forceX(function(fn){
var obj = Object.keys(countGroupsArray(pass.nodes)).sort();  
//////console.log(obj);
//////console.log(countParentGroups(pass.nodes));
 
  
  
  //////console.log(countParentGroups(pass.nodes));
  var w = width, h = height, Ox = 100, Oy = 100;
  var regionArray;
  if (countParentGroups(pass.nodes) == 1){regionArray = [[Ox,Oy,w-100,h-100]];}
  else if (countParentGroups(pass.nodes) == 2){regionArray = [[Ox,Oy,(w/2)-50,h-100],[(w/2)+50,Oy,w-100, h-100]];}
  else if (countParentGroups(pass.nodes) == 3){regionArray = [[Ox,Oy,(w/2)-50,((2*h)/3)-50],[(w/2)+50,Oy,w-100,((2*h)/3)-50],[Ox,((2*h)/3)+50,w-100,h-100]];}
  else if (countParentGroups(pass.nodes) == 4){regionArray = [[Ox,Oy,(w/2)-50,(h/2)-50],[(w/2)+50,Oy,w-100,(h/2)-50],[Ox,(h/2)+50,(w/2)-50,h-100],[(w/2)+50,(h/2)+50,w-100,h-100]];}
  else if (countParentGroups(pass.nodes) == 5){regionArray = [[Ox,Oy,(w/2)-50,((2*h)/5)-50],[(w/2)+50,Oy,w-100,((2*h)/5) -50],[Ox,((2*h)/5)+50,(w/2)-50, ((4*h)/5) -50],[(w/2)-50,((2*h)/5)+50,w-100,((4*h)/5) -50],[Ox,((4*h)/5) +50,w-100,h-100]];}
  else if (countParentGroups(pass.nodes) == 6){regionArray = [[Ox,Oy,(w/2)-50,(h/3)-50],[(w/2)+50,Oy,w-50,(h/3)-50],[Ox,(h/3)+50,(w/2)-50,((2*h)/3)-50],[(w/2)+50,(h/3)+50,w-50,((2*h)/3)-50],[Ox,((2*h)/3)+50,(w/2)-50, h-50],[(w/2)+50,((2*h)/3)+50,w-50,h-50]]}
  
  for (var i = 0, len = pass.nodes.length; i < len; i++) {
   
    //////console.log(regionArray);
    
    if(fn.parentGroup == obj[countParentGroups(pass.nodes)-countParentGroups(pass.nodes)]){
      return regionArray[countParentGroups(pass.nodes)-countParentGroups(pass.nodes)][0];
    } 
    else if(fn.parentGroup == obj[countParentGroups(pass.nodes)-countParentGroups(pass.nodes) +1]){
      return regionArray[countParentGroups(pass.nodes)-countParentGroups(pass.nodes)+1][0];
    }
    else if(fn.parentGroup == obj[countParentGroups(pass.nodes)-countParentGroups(pass.nodes) +2]){
      return regionArray[countParentGroups(pass.nodes)-countParentGroups(pass.nodes)+2][0];
     }
     else if(fn.parentGroup == obj[countParentGroups(pass.nodes)-countParentGroups(pass.nodes) +3]){
      return regionArray[countParentGroups(pass.nodes)-countParentGroups(pass.nodes)+3][0];
     }
     else if(fn.parentGroup == obj[countParentGroups(pass.nodes)-countParentGroups(pass.nodes) +4]){
     return regionArray[countParentGroups(pass.nodes)-countParentGroups(pass.nodes)+4][0];
     }
     else if(fn.parentGroup == obj[countParentGroups(pass.nodes)-countParentGroups(pass.nodes) +5]){
    return regionArray[countParentGroups(pass.nodes)-countParentGroups(pass.nodes)+5][0];
     }
     else if(fn.parentGroup == obj[countParentGroups(pass.nodes)-countParentGroups(pass.nodes) +6]){
    return regionArray[countParentGroups(pass.nodes)-countParentGroups(pass.nodes)+6][0];
     }
    }








}))
.force("center", d3.forceCenter(width / 2, height / 2))
.force('cluster', d3.forceCluster()
.centers(function (d) { 
  if (d.type == "Child"){
    //////console.log(clusters);
        //////console.log(d);
        //////console.log(clusters[d.clusterIndex]);
  return clusters[d.clusterIndex];}})
.strength(1)
.centerInertia(0.0));var link = svg.append("g")
.attr("class", "links")
.selectAll("line")
.data(pass.links)
.enter().append("line")
.attr("stroke-width", function(d) { return Math.sqrt(d.value); })

var path = svg.append("g").selectAll("path")
.data(pass.links)
.enter().append("path")
.attr("class", function(d) { return "link " + d.type; })
.style('fill', 'none')
.style("stroke-width", '.5')
.attr("stroke", function(fn){ 
// //////console.log("src type", fn.source.type);
// //////console.log("target type", fn.target);
if (getNodeType(pass.nodes,fn.source) == "Parent" &&  getNodeType(pass.nodes,fn.target) == "Parent"){
var defs = svg.append("defs");

var gradient = defs.append("linearGradient")
   .attr("id", getGradID(fn))
   .attr("x1", getNodePosition(pass.nodes,fn.source,true))
   .attr("x2", getNodePosition(pass.nodes,fn.target,true))
   .attr("y1", getNodePosition(pass.nodes,fn.source,false))
   .attr("y2", getNodePosition(pass.nodes,fn.target,false));

d3.select("#" + getGradID(fn))
.append("stop")
   .attr('class', 'start')
   .attr("offset", 0)
   .attr("stop-color", getNodeColour(pass.nodes,fn.source))//getColor(d.source,graph.nodes))
   .attr("stop-opacity", .5);
//////console.log(getNodeColour(pass.nodes,fn.source));
//////console.log(getNodeColour(pass.nodes,fn.target));
  // //////console.log(getColor(d.target,pass.nodes));
gradient.append("stop")
   .attr('class', 'end')
   .attr("offset", 1)
   .attr("stop-color",getNodeColour(pass.nodes,fn.target))// getColor(d.target,graph.nodes))
   .attr("stop-opacity", .5);
  return "url(#" + getGradID(fn) +")";}
  else {return "White";}
  //////console.log(grade)
  
})
.on('mouseover.tooltip', function(d) {
tooltip.transition()
  .duration(300)
  .style("opacity", .8);
/* tooltip.html("Source:"+ d.source.id + 
             "<p/>Target:" + d.target.id +
            "<p/>Strength:"  + d.value)
  .style("left", (d3.event.pageX) + "px")
  .style("top", (d3.event.pageY + 10) + "px");*/
})
.on("mouseout.tooltip", function() {
tooltip.transition()
  .duration(100)
  .style("opacity", 0);
})
.on('mouseout.fade', fade(1))
.on("mousemove", function() {
tooltip.style("left", (d3.event.pageX) + "px")
  .style("top", (d3.event.pageY + 10) + "px");
});
;
/*
.style("stroke", function(fn){  
var defs = svg.append("defs");
var gradient = defs.append("linearGradient")
   .attr("id", "svgGradient")
   .attr("x1", "0%")
   .attr("x2", "100%")
   .attr("y1", "0%")
   .attr("y2", "100%");

gradient.append("stop")
   .attr('class', 'start')
   .attr("offset", "100%")
   .attr("stop-color", getNodeColour(pass.nodes,fn.target))//getColor(d.source,graph.nodes))
   .attr("stop-opacity", 0.5);
 //////console.log(getNodeColour(pass.nodes,fn.source));
 //////console.log(getNodeColour(pass.nodes,fn.target));

  // //////console.log(getColor(d.target,graph.nodes));
gradient.append("stop")
   .attr('class', 'end')
   .attr("offset", "0%")
   .attr("stop-color",getNodeColour(pass.nodes,fn.source))// getColor(d.target,graph.nodes))
   .attr("stop-opacity", 0.5);
  return "url(#svgGradient)";
  
  
});
*/

//.attr("marker-end", function(d) { return "url(#" + d.type + ")"; });

var tip;
var node = svg.append("g")
.attr("class", "nodes")
.selectAll("g")
.data(pass.nodes)
.enter().append("g")

node.append("circle")
.attr("r", function(fn){return fn.radius;})
.attr("stroke-width", 5)
.attr("stroke", function(fn) { return fn.colour; })
.attr("fill",  function(d){
  if (d.type == "Child"){return d.colour;}
  else {return "White";}
})
.call(d3.drag()

    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended))
    
          
    //.on("dblclick", doubleClick)
    .on("click", function(d){
      var clicks = $(this).data('clicks');
      if (clicks == null){clicks = false;}
      if (!clicks){
      //console.log("NO CLICKs", clicks);
      d3.select(this).transition()
      .duration(750).attr('r', (d.type == "Parent")?65:25)
          //.style("fill-opacity",0.5)
          //.style("stroke-opacity",0.5)
          d3.event.stopPropagation(); 

          if (tip) tip.remove();
          
          tip  = svg.append("g")
            .attr("transform", "translate(" + (d.x + 50)  + "," + d.y + ")");
          let strGroup = d.group;
          strGroup = strGroup.slice(0, -1); 
          let strDescription = d.description;
          var strDesLength = strDescription.length;
          var linesNo = (strDesLength/70);
          var arr = d.id.match(/([a-z]*)([\w.]+)/i);  
          var rect = tip.append("rect")
            .style("fill", "white")
            .style("stroke", "steelblue");

          //https://stackoverflow.com/questions/6632530/chunk-split-a-string-in-javascript-without-breaking-words
            var len = 70;
            var curr = len;
            var prev = 0;
            
            output = [];
            
            while (strDescription[curr]) {
                if (strDescription[curr++] == ' ') {
                    output.push(strDescription.substring(prev,curr));
                    prev = curr;
                    curr += len;
                }
            }
            output.push(strDescription.substr(prev));
          
          tip.append("text")
            .text(strGroup + " " + arr[2])
            .attr("dy", 30)
            .attr("x", 5)
            .style("font-size", "26px");
          
          for (var i = 0; i< linesNo; i++){
            var sub = output[i];//strDescription.substring((70*i),(70*(i+1)));
          tip.append("text")
            .text((i==0) ? "• " + sub: sub)
            .attr("dy", ((i+2)*30))
            .attr("x", 5)
            .style("font-size", "20px");


            
          }
      /*
          var con = pass.links
            .filter(function(d1){
              return d1.source.id === d.id;
            })
            .map(function(d1){
              return d1.target.name + " with weight " + d1.weight;
            })
            
          tip.append("text")
            .text("Connected to: " + con.join(","))
            .attr("dy", "3em")
            .attr("x", 5);*/
          
          var bbox = tip.node().getBBox();
          rect.attr("width", bbox.width + 10)
              .attr("height", bbox.height + 10)
          }
          else {
            d3.select(this).transition()
      .duration(750).attr('r', d.radius)
      //.style("fill-opacity",1)
      //.style("stroke-opacity",1)
          d3.event.stopPropagation(); 
            if (tip) tip.remove();
            //pass.nodes.push(json.nodes[1]);
            ////console.log

          }
        
              $(this).data("clicks", !clicks);
        })
      
    .on('mouseover.tooltip', function(d) {
      tooltip.transition()
        .duration(5000)
        .style("opacity", .8);
     /* tooltip.html("Name:" + d.id + "<p/>group:" + d.group)
        .style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY + 10) + "px");*/
    })
  .on('mouseover.fade', fade(0.1))
  .on("mouseout.tooltip", function() {
      tooltip.transition()
        .duration(100)
        .style("opacity", 0);
    })
  .on('mouseout.fade', fade(1))
    .on("mousemove", function() {
      tooltip.style("left", (d3.event.pageX) + "px")
        .style("top", (d3.event.pageY + 10) + "px");
    });

var lables = node.append("text")
.attr("dy", function(d){
if (d['secondDisplay'] == null){return 4;}
if(d['type'] == "Child"){return 7;}
else{return -10;}
})
.attr("text-anchor", "middle")
.style('fill', function(d){
if (d.type == "Parent"){return d.colour;}
else {return "White";}
})
.text(function(d) { 

if (d['type'] == "Child"){
//Split name into number and letter parts: only return number for 'Child' circles
//var arr2 = d.id.match(/[a-z]+|[^a-z]+/gi);
var arr = d.id.match(/([a-z]*)([\w.]+)/i);
// //////console.log(arr);
////////console.log(arr2);
return arr[2];}
else { 
if (d['display'] == ""){return d.id;}
else {return d.display;}
}
});

node.append("text")
.attr("dy", 10) // you can vary how far apart it shows up
.attr("text-anchor", "middle")
.style('fill', function(d){return d.colour;})
.text(function(d) { return d.secondDisplay; }); 



//node.append("title")
//    .text(function(d) { return d.id; });



simulation
.nodes(pass.nodes)
.on("tick", ticked);

simulation.force("link")
.links(pass.links);

simulation.force("collide");

pass.links.forEach(function(d){
var sourceTemp = d.source, targetTemp = d.target;

if(d.source.id > d.target.id){
  d.source = targetTemp;
  d.target = sourceTemp;
}
});

/*
pass.links.forEach(function(d) {
var sourceTemp = d.source, targetTemp = d.target;
if (d.source > d.target)
{
d.source = targetTemp;
d.target = sourceTemp;
}
});
//links.sort(); doesn't work as item to be sorted may be alphanmueric :(
var linkslength = pass.links.length;
pass.links.forEach(function(d,i)
{
var curSrc = d.source, curTgt = d.target;
for(var j = i+1; j < linkslength; j++)
{
if (pass.links[j].source === curSrc && pass.links[j].target === curTgt)
{
    pass.links.splice(j,1);
    linkslength -= 1;
}
}
}); *//*
var dict = {};
pass.links = _.filter(pass.links, function(link) {
var source = link.source.id;
var target = link.target.id;
if (dict[source] == undefined) {
//console.log("havent seen this source")
dict[source] = [ target ]
return true
} else {
//console.log("have seen this source")
if(_.contains(dict[source], target)) {
//console.log("target is linked to this source")
return false
} else {
//console.log("target is NOT linked to this source")
dict[source].push(target)
return true
}
}
});*/

removeDups(pass.links);
//console.log("after reorganise",pass);

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


/*
link
  .attr("x1", function(d) { return d.source.x; })
  .attr("y1", function(d) { return d.source.y; })
  .attr("x2", function(d) { return d.target.x; })
  .attr("y2", function(d) { return d.target.y; });
  */


node
  .attr("transform", function(d) {
    return "translate(" + d.x + "," + d.y + ")";
  })
path.attr("d", linkArc);
}

function doubleClick() {
d3.select(this).select("circle").transition()
  .duration(750)
  .attr("r", 80);
  
}

function mouseout() {
d3.select(this).select("circle").transition()
  .duration(750)
  .attr("r", 8);
}



const linkedByIndex = {};
pass.links.forEach(d => {
linkedByIndex[`${d.source.index},${d.target.index}`] = 1;
});

function isConnected(a, b) {
return linkedByIndex[`${a.index},${b.index}`] || linkedByIndex[`${b.index},${a.index}`] || a.index === b.index;
}

function fade(opacity) {
return d => {
node.transition()
.duration(500).style('stroke-opacity', function (o) {
  const thisOpacity = isConnected(d, o) ? 1 : opacity;
  //this.setAttribute('fill-opacity', thisOpacity);
  
  
  return thisOpacity;
});
lables.transition()
  .duration(500).style('fill-opacity',function (o) {
    const thisOpacity = isConnected(d, o) ? 1 : opacity;
    this.setAttribute('fill-opacity', thisOpacity);
  return thisOpacity;
  });

path.transition()
.duration(500).style('stroke-opacity', o => (o.source === d || o.target === d ? 1 : opacity));

};
}
});

}


function linkArc(d) {
var dx = d.target.x - d.source.x,
dy = d.target.y - d.source.y,
dr = Math.sqrt(dx * dx + dy * dy);
return "M" + d.source.x + "," + d.source.y + "A" + dr + "," + dr + " 0 0,1 " + d.target.x + "," + d.target.y;
}




///////////////////
////FUNCTIONS//////
///////////////////
function radius (d){return d.radius;}
function getGradID(link){return "linkGrad-" + link.source + link.target;}

function groupToColor(d){
for (var i = 0; i < d.length; i++){
if(d[i]['parentGroup']=="UN Sustainable Development Goals") {d[i]['colour'] = "Red"; }  
else if(d[i]['parentGroup']=="WHO Arts Components"){ d[i]['colour'] = "DeepPink";}
else if(d[i]['parentGroup']== "WHO 5 Ways To Wellbeing"){d[i]['colour'] = "LightSalmon";}
else if(d[i]['parentGroup']== "Programme for Government") {d[i]['colour'] = "Blue";}
else if(d[i]['parentGroup']== "Belfast Agenda"){ d[i]['colour'] = "Purple";}
else if(d[i]['parentGroup']== "A City Imagining - Priorities"){ d[i]['colour'] = "Yellow";}
else if(d[i]['parentGroup']== "Resilience - Shocks and Stresses"){ d[i]['colour'] = "Green";}
else if(d[i]['parentGroup']== "Resilience"){ d[i]['colour'] = "Orange";}
else if(d[i]['parentGroup']== "Belfast Agenda Immediate Priorities"){ d[i]['colour'] = "Aquamarine";}
else if(d[i]['parentGroup']== "Culture 2030 Indicators"){ d[i]['colour'] = "Cornsilk";}
else if(d[i]['parentGroup']== "Belfast City Council Public Realm"){ d[i]['colour'] = "DarkSeaGreen";}
else if(d[i]['parentGroup']== "Belfast City Council Local Development Plan"){ d[i]['colour'] = "Gold";}
else if(d[i]['parentGroup']== "Belfast City Council Open Spaces Strategy"){ d[i]['colour'] = "Indigo";}
else if(d[i]['parentGroup']== "Derry City & Strabane District’s Inclusive Strategic Growth Plan"){ d[i]['colour'] = "LightCoral";}
else if(d[i]['parentGroup']== "Protect Life 2 - Suicide Prevention Strategy"){ d[i]['colour'] = "LightGreen";}
    //default:   d[i]['colour'] = "Black";
  
}
}
function legend(d){
var obj = Object.keys(countGroupsArray(d)).sort();
//////console.log(obj);
for (var i = 0; i < obj.length; i++){

var y = (height- 300) + (i*40);
svg.append("text").attr("x", 50).attr("y", y).text(obj[i]).style("font-size", "15px").attr("alignment-baseline","middle");
svg.append("circle").attr("cx",25).attr("cy",y).attr("r", 15).style("fill", "White").style("stroke-width", 5).style("stroke",getColour(d,obj[i]));
}  
}
function typeToRadius(d){
for (var i = 0; i < d.length; i++){
if (d[i]['type'] == "Parent"){d[i]['radius'] = 55;}
else if(d[i]['type'] == "Child"){d[i]['radius'] = 15;}

}
}

function getNodePosition(d, a, pos){
for(i = 0; i < d.length; i++){
if (d[i]['id'] == a && pos) {return d[i].x }
else if (d[i]['id'] == a && !pos) {return d[i].y }
}
}

function getNodeColour(d, a){
for(i = 0; i < d.length; i++){
if (d[i]['id'] == a) {return d[i]['colour'] ;}

}
}

function getNodeType(d, a){
for(i = 0; i < d.length; i++){
if (d[i]['id'] == a) {return d[i]['type'] ;}

}
}

function getNodeGroup(d, a){
for(i = 0; i < d.length; i++){
if (d[i]['id'] == a) {return d[i]['parentGroup'] ;}

}
}

function getColour(d, a){
for(i = 0; i < d.length; i++){
if (d[i]['parentGroup'] == a) {return d[i]['colour'] ;}

}
}

function createParentArray(d){
var obj = countParents(d);
////console.log(obj);
var arr = Array(countParents(d));
var index = 0;
for (var i = 0; i < d.length; i++){
//////console.log(d[i]);
if (d[i].type == "Parent"){
arr[index] = d[i];
index++;
}
} 
return arr;
}

function checkNodeHasChild(d,data){
d['collision'] = "false";
var collision;
for (var i = 0; i< data.length; i++){
var parent = d.id.match(/([a-z]*)([\w.]+)/i);
var child = data[i].id.match(/([a-z]*)([\w.]+)/i);
// ////console.log("data index   ", i);
// ////console.log("data   ", data);
//////console.log("d      ", d)
//////console.log("child", child);
//////console.log("parent", parent);
if ( d['collision'] == "true"){break;}
else if (d['parentGroup'] == data[i]['parentGroup'] && Math.floor(parseInt(child[2])) == parseInt(parent[2]) && data[i]['type'] == "Child" && d['collision'] == "false"){
////console.log(d.id, " HAS CHILD");
d['collision'] = "true";
collision = d.radius + 15;

}
else {collision = d.radius *2.25}


}

return collision;
}

//function getAllParentGroups
function showGroup(data,pass,pG){
for (var i = 0; i < pass.nodes.length; i++){
for (var j = 0; j < data.links.length; j++){     
 //console.log(pass.nodes[i].id);
//  console.log(data.links[j].source);
if (pass.nodes[i].id == data.links[j].source){ 
  for (var k = 0; k < data.nodes.length; k++){
    if (data.nodes[k].id == data.links[j].target && pG == data.nodes[k].parentGroup ){
      if (!pass.nodes.some(item => item === data.nodes[k])){pass.nodes.push(data.nodes[k]);}
    }

  }
}
else if (pass.nodes[i].id == data.links[j].target){
  for (var k = 0; k < data.nodes.length; k++){
    if (data.nodes[k].id == data.links[j].source && pG == data.nodes[k].parentGroup ){
      if (!pass.nodes.some(item => item === data.nodes[k])){pass.nodes.push(data.nodes[k]);}
    }

  }
}
}
}

}

function removeOrphans(d){
for (var i = 0; i< d.length; i++){
if (d[i].type == "Child" && d[i].clusterIndex == null){d.splice(i,1);}
}
}

function addParents(pass,data){
for (var i = 0; i< pass.length; i++){
if (pass[i].type == "Child" && pass[i].clusterIndex == null){
// if(arr[i]['parentGroup'] == d[j]['parentGroup'] && Math.floor(parseInt(child[2])) == parseInt(parent[2]) && d[j]['type'] == "Child"){

for (var j = 0; j < data.length; j++){
  var child = pass[i]['id'].match(/([a-z]*)([\w.]+)/i);
  var parent = data[j]['id'].match(/([a-z]*)([\w.]+)/i);
  if (pass[i]['parentGroup'] == data[j]['parentGroup'] && Math.floor(parseInt(child[2])) == parseInt(parent[2]) && data[j].type == "Parent"){
    if (!pass.some(item => item === data[j])){pass.push(data[j]);}
}

}



}

}
}
//https://stackoverflow.com/questions/40166958/removing-duplicate-edges-from-an-array-for-a-d3-force-directed-graph/40167473#40167473
function removeDups(myArray){
myArray.sort();
for(var i = 1; i < myArray.length; ){
if(myArray[i-1].source === myArray[i].source 
   && myArray[i-1].target === myArray[i].target){
    myArray.splice(i, 1);
} else {
    i++;
}
}
return myArray;
}

function showOnly(pass,pG){
temp = {"nodes":[],"links":[]};
for (var i = 0; i < pass.nodes.length; i++){
if (pass.nodes[i].parentGroup == pG)
{temp.nodes.push(pass.nodes[i]);}
}
console.log(temp);
return temp;
}




function removeLinkCopies(d){
var len = d.length -1;
for (var i =  len; i >= 0; i--){
for (var j =  len; j >= 0; j--){
if (d[i] != null && d[j] != null ){
if (d[i].source == d[j].target && d[i].target == d[j].source)
{
  d.splice(i);
//   len--;
}
}
}
}
}

function removeLinksBetweenSameGroup(pass){
for (var i = pass.links.length-1; i >= 0 ; i--){
////console.log(getNodeGroup(pass.nodes,pass.links[i].source));
//console.log(getNodeGroup(pass.nodes,pass.links[i].target));
  if (getNodeGroup(pass.nodes,pass.links[i].source) == getNodeGroup(pass.nodes,pass.links[i].target) )
  {
    //console.log("dlinks[i]", pass.links[i]);
    pass.links.splice(i,1);
  }

}

}
function removeOrphans2 (d){
for (var i = 0; i< d.length; i++){
for (var j = 0; j< d.length; j++){
// ////console.log(arr[i]);
var parent = d[i]['id'].match(/([a-z]*)([\w.]+)/i);
var child = d[j]['id'].match(/([a-z]*)([\w.]+)/i);
if (d[i]['parentGroup'] == d[j]['parentGroup'] && Math.floor(parseInt(child[2])) == parseInt(parent[2]) && d[j]['type'] == "Child")
{
d[j]['gotParent'] = "true";
}
}
}
for (var k = 0; k< d.length; k++){
if (d[k]['type'] == "Child" && d[k]['gotParent'] == null){d.splice(k,1);}
}
}


function createChildNumberArray(d,arr){
var childArr = [];
for (var i = 0; i< arr.length; i++){
for (var j = 0; j< d.length; j++){
// ////console.log(arr[i]);
var parent = arr[i]['id'].match(/([a-z]*)([\w.]+)/i);
var child = d[j]['id'].match(/([a-z]*)([\w.]+)/i);
if (arr[i]['parentGroup'] == d[j]['parentGroup'] && Math.floor(parseInt(child[2])) == parseInt(parent[2]) && d[j]['type'] == "Child"){
// if (arr[i]['counter'] == null){arr[i]['counter'] = 1;}
// else {arr[i]['counter'] += 1;}
// //////console.log(arr[i]['counter']);
// childArr[i] = arr[i]['counter'];
d[j]['clusterIndex'] = i;
//////console.log(d[j]['clusterIndex']);
}
else {childArr[i] = 0;}
}
}
// return childArr;
}

function positionY(data,d){

}





function positionPrimaryNodes(d){
var obj = Object.keys(countGroupsArray(d)).sort();
//////console.log(countGroups(d));
var overlapping = true;
var w = width, h = height, Ox = 100, Oy = 100;
var regionArray;
if (countParentGroups(d) == 1){regionArray = [[Ox,Oy,w-100,h-100]];}
else if (countParentGroups(d) == 2){regionArray = [[Ox,Oy,(w/2)-50,h-100],[(w/2)+50,Oy,w-100, h-100]];}
else if (countParentGroups(d) == 3){regionArray = [[Ox,Oy,(w/2)-50,((2*h)/3)-50],[(w/2)+50,Oy,w-100,((2*h)/3)-50],[Ox,((2*h)/3)+50,w-100,h-100]];}
else if (countParentGroups(d) == 4){regionArray = [[Ox,Oy,(w/2)-50,(h/2)-50],[(w/2)+50,Oy,w-100,(h/2)-50],[Ox,(h/2)+50,(w/2)-50,h-100],[(w/2)+50,(h/2)+50,w-100,h-100]];}
else if (countParentGroups(d) == 5){regionArray = [[Ox,Oy,(w/2)-50,((2*h)/5)-50],[(w/2)+50,Oy,w-100,((2*h)/5) -50],[Ox,((2*h)/5)+50,(w/2)-50, ((4*h)/5) -50],[(w/2)-50,((2*h)/5)+50,w-100,((4*h)/5) -50],[Ox,((4*h)/5) +50,w-100,h-100]];}
else if (countParentGroups(d) == 6){regionArray = [[Ox,Oy,(w/2)-50,(h/3)-50],[(w/2)+50,Oy,w-50,(h/3)-50],[Ox,(h/3)+50,(w/2)-50,((2*h)/3)-50],[(w/2)+50,(h/3)+50,w-50,((2*h)/3)-50],[Ox,((2*h)/3)+50,(w/2)-50, h-50],[(w/2)+50,((2*h)/3)+50,w-50,h-50]]}
//something in here defining what region it should go in but dont need that for now
//var region = [100,100,width-100,height-100];
if (d.length <= 1){
d[0]['fx'] = getRandomArbitrary(regionArray[0][0],regionArray[0][2]);
d[0]['fy'] = getRandomArbitrary(regionArray[0][1],regionArray[0][3]);
}

else {

for (var i = 0, len = d.length; i < len; i++) {

//////console.log(regionArray);

if(d['parentGroup'] == obj[countParentGroups(d)-countParentGroups(d)]){

d['fx'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)][0],regionArray[countParentGroups(d)-countParentGroups(d)][2]);
d['fy'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)][1],regionArray[countParentGroups(d)-countParentGroups(d)][3]);
} 
else if(d['parentGroup'] == obj[countParentGroups(d)-countParentGroups(d) +1]){
d['fx'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)+1][0],regionArray[countParentGroups(d)-countParentGroups(d)+1][2]);
d['fy'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)+1][1],regionArray[countParentGroups(d)-countParentGroups(d)+1][3]);
}
else if(d['parentGroup'] == obj[countParentGroups(d)-countParentGroups(d) +2]){

d['fx'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)+2][0],regionArray[countParentGroups(d)-countParentGroups(d)+2][2]);
d['fy'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)+2][1],regionArray[countParentGroups(d)-countParentGroups(d)+2][3]);
}
else if(d['parentGroup'] == obj[countParentGroups(d)-countParentGroups(d) +3]){

d['fx'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)+3][0],regionArray[countParentGroups(d)-countParentGroups(d)+3][2]);
d['fy'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)+3][1],regionArray[countParentGroups(d)-countParentGroups(d)+3][3]);
}
else if(d['parentGroup'] == obj[countParentGroups(d)-countParentGroups(d) +4]){

d['fx'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)+4][0],regionArray[countParentGroups(d)-countParentGroups(d)+4][2]);
d['fy'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)+4][1],regionArray[countParentGroups(d)-countParentGroups(d)+4][3]);
}
else if(d['parentGroup'] == obj[countParentGroups(d)-countParentGroups(d) +5]){

d['fx'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)+5][0],regionArray[countParentGroups(d)-countParentGroups(d)+5][2]);
d['fy'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)+5][1],regionArray[countParentGroups(d)-countParentGroups(d)+5][3]);
}
else if(d['parentGroup'] == obj[countParentGroups(d)-countParentGroups(d) +6]){

d['fx'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)+6][0],regionArray[countParentGroups(d)-countParentGroups(d)+6][2]);
d['fy'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)+6][1],regionArray[countParentGroups(d)-countParentGroups(d)+6][3]);
}

for (var j =0; j < d.length; j++){
if (i > j){


var compareNode = d[j];

// //////console.log("length: index:" + i,d.length);


//compareNode['fx'] = getRandomArbitrary(region[0],region[2]);
//compareNode['fy'] = getRandomArbitrary(region[1],region[3]);
// overlapping = true;
// while(overlapping){
var dist = distance(currentNode, compareNode); // distance function between node and other + wiggle room for other nodes 
////////console.log("Current " + currentNode + "compare ",compareNode);
////////console.log("distance between " + currentNode['id'] + " " + compareNode['id'] + ": ",dist )
if (dist < (currentNode['radius'] + compareNode['radius']) +10){ //+determine wiggle room)){
  overlapping  = true;
  var iterator = 0;
  while(overlapping){
    ////////console.log(distance);
    ////////console.log( obj[countParentGroups(d)-countParentGroups(d)]);
    if(currentNode['parentGroup'] = obj[countParentGroups(d)-countParentGroups(d)]){
     
      currentNode['fx'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)][0],regionArray[countParentGroups(d)-countParentGroups(d)][2]);
      currentNode['fy'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)][1],regionArray[countParentGroups(d)-countParentGroups(d)][3]);
      
      } 
      else if(currentNode['parentGroup'] = obj[countParentGroups(d)-countParentGroups(d) +1]){
        
        currentNode['fx'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)+1][0],regionArray[countParentGroups(d)-countParentGroups(d)+1][2]);
        currentNode['fy'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)+1][1],regionArray[countParentGroups(d)-countParentGroups(d)+1][3]);
        }
        else if(currentNode['parentGroup'] == obj[countParentGroups(d)-countParentGroups(d) +2]){

          currentNode['fx'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)+2][0],regionArray[countParentGroups(d)-countParentGroups(d)+2][2]);
          currentNode['fy'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)+2][1],regionArray[countParentGroups(d)-countParentGroups(d)+2][3]);
         }
         else if(currentNode['parentGroup'] == obj[countParentGroups(d)-countParentGroups(d) +3]){
         
          currentNode['fx'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)+3][0],regionArray[countParentGroups(d)-countParentGroups(d)+3][2]);
          currentNode['fy'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)+3][1],regionArray[countParentGroups(d)-countParentGroups(d)+3][3]);
         }
         else if(currentNode['parentGroup'] == obj[countParentGroups(d)-countParentGroups(d) +4]){
         
          currentNode['fx'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)+4][0],regionArray[countParentGroups(d)-countParentGroups(d)+4][2]);
          currentNode['fy'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)+4][1],regionArray[countParentGroups(d)-countParentGroups(d)+4][3]);
         }
         else if(currentNode['parentGroup'] == obj[countParentGroups(d)-countParentGroups(d) +5]){
         
          currentNode['fx'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)+5][0],regionArray[countParentGroups(d)-countParentGroups(d)+5][2]);
          currentNode['fy'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)+5][1],regionArray[countParentGroups(d)-countParentGroups(d)+5][3]);
         }
         else if(currentNode['parentGroup'] == obj[countParentGroups(d)-countParentGroups(d) +6]){
         
          currentNode['fx'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)+6][0],regionArray[countParentGroups(d)-countParentGroups(d)+6][2]);
          currentNode['fy'] = getRandomArbitrary(regionArray[countParentGroups(d)-countParentGroups(d)+6][1],regionArray[countParentGroups(d)-countParentGroups(d)+6][3]);
         }
    if (dist > (currentNode['radius'] + compareNode['radius'])){
      overlapping = false;
      
    }
      iterator++;
    if (iterator > 10000) {
      overlapping = false;
      currentNode['fx'] = -100;//getRandomArbitrary(region[0],region[2]);
      currentNode['fy'] = -100;//getRandomArbitrary(region[1],region[3]);
    }//write some code to fix this}
  }
 // break;
  //currentNode['fx'] = getRandomArbitrary(region[0],region[2]);
  //currentNode['fy'] = getRandomArbitrary(region[1],region[3]);
  ////////console.log("distance between " + currentNode['id'] + " " + compareNode['id'] + ": ",dist )
} 
//else {overlapping = false;}
// }

}

//need somewhere currentNode != compareNode




}






}
}
}
//I WILL REFACTOR THIS LATER 
function positionChildNodes(d){
for (var i = 0, len = d.length; i < len; i++) {

for (var j =0; j < d.length; j++){
if (i != j){
var child = d[i]['id'].match(/([a-z]*)([\w.]+)/i);
var parent = d[j]['id'].match(/([a-z]*)([\w.]+)/i);
////////console.log(Math.floor(parseInt(child[2])));
// //////console.log(parseInt(parent[2]));
if (d[i]['parentGroup'] == d[j]['parentGroup'] && Math.floor(parseInt(child[2])) == parseInt(parent[2]) && d[i]['type'] == "Child" && d[j]['type'] == "Parent")
{
if (d[j]['counter'] == null){d[j]['counter'] = 0;}
else {d[j]['counter'] += 1;}

d[i]['fx'] = d[j]['fx'] + 1.7*d[j]['radius']*Math.cos((d[j]['counter'])*Math.PI*.25) ;
d[i]['fy'] = d[j]['fy'] + 1.7*d[j]['radius']*Math.sin((d[j]['counter'])*Math.PI*.25) ;
////////console.log("Child x",d[i]['fx']);
////////console.log("Child y",d[i]['fy']);
////////console.log("Child ",d[i]['id']);

////////console.log("Parent x",d[j]['fx']);
////////console.log("Parent y",d[i]['fy']);
////////console.log("Parent ",d[j]['id']);

}

}

}
}






}

function defineRegions(d){
var numberOfRegions = countGroups(d);
var regionArr = [];
//Write code for different number of regions but in this case we have 5 so ill just use that
//Psuedocode(to remember) if its two, its halved once H or V
// if 3 halved twice, once H then once V etc
if (numberOfRegions == 5)
{
//[x1,y1,x2,y2] or [left,top,right,bottom]
//width and height 1000 - maxradius = 30 - indicators around their parent
regionArr = [[50,50,460,300],[490,50,950,300],[50,330,460,600],[490,330,950,600],[60,630,950,950]];
}
return regionArr;
}

/*
function changePosition(d){
for (var i = 0, len = d.length; i < len; i++) {
// //////console.log("LENGTH",len);
if (d[i]['parentGroup'] ==("UN Sustainable Development Goals")){

d[i]['fx'] = getRandomArbitrary(965, 35);
d[i]['fy'] = getRandomArbitrary(150,35);
////////console.log("node" + i + " x", d[i]['fx']);
////////console.log("node" + i + " y", d[i]['fy']);
}
else if (d[i]['parentGroup'] ==("Programme for Government")){
d[i]['fx'] = 500;//getRandomArbitrary(965, 35);
d[i]['fy'] = 500;//getRandomArbitrary(150,35);
}
else if (d[i]['parentGroup'] ==("WHO Arts Components")){
d[i]['fx'] = 800;//getRandomArbitrary(965, 35);
d[i]['fy'] = 800;//getRandomArbitrary(150,35);
}
else if (d[i]['parentGroup'] ==("WHO 5 Ways To Wellbeing")){
d[i]['fx'] = 1000;//getRandomArbitrary(965, 35);
d[i]['fy'] = 1000;//getRandomArbitrary(150,35);
}
else if (d[i]['parentGroup'] ==("Belfast Agenda")){
d[i]['fx'] = 1200;//getRandomArbitrary(965, 35);
d[i]['fy'] = 1200;//getRandomArbitrary(150,35);
}
else if (d[i]['parentGroup'] ==("Belfast Agenda Immediate Priorities")){
d[i]['fx'] = 800;//getRandomArbitrary(965, 35);
d[i]['fy'] = 400;//getRandomArbitrary(150,35);
}
else if (d[i]['parentGroup'] ==("Resilience")){
d[i]['fx'] = 500;//getRandomArbitrary(965, 35);
d[i]['fy'] = 800;//getRandomArbitrary(150,35);
}
else if (d[i]['parentGroup'] ==("Resilience - Shocks and Stresses")){
d[i]['fx'] = 900;//getRandomArbitrary(965, 35);
d[i]['fy'] = 300;//getRandomArbitrary(150,35);
}
else if (d[i]['parentGroup'] ==("A City Imagining - Priorities")){
d[i]['fx'] = 750;//getRandomArbitrary(965, 35);
d[i]['fy'] = 1200;//getRandomArbitrary(150,35);
}


}
}
*/

function addLinksToDynamicJSON(allData, jsonData){
var linkToPush;

for (var i = 0, len = jsonData.nodes.length; i < len; i++) {

for (var j = 0; j < jsonData.nodes.length; j++){

  for (var k = 0; k < allData.links.length; k++)
  {
    ////////console.log("Source1: " + allData.links[k]['source'] + " source1tocheck: " + jsonData.nodes[i]['id'] + "target1: " + allData.links[k]['target'] + " target1tocheck: " + jsonData.nodes[j]['id']);
    ////////console.log("Source1: " + allData.links[k]['source'] + " source1tocheck: " + jsonData.nodes[j]['id'] + "target1: " + allData.links[k]['target'] + " target1tocheck: " + jsonData.nodes[i]['id']);
    
    if ((allData.links[k]['source'] == jsonData.nodes[i]['id'] && allData.links[k]['target'] == jsonData.nodes[j]['id'] )
        || (allData.links[k]['source'] == jsonData.nodes[j]['id'] && allData.links[k]['target'] == jsonData.nodes[i]['id'] )){
          ////////console.log("yay");
          linkToPush = allData.links[k];
          
          if (!jsonData.links.some(item => item === linkToPush)){jsonData.links.push(linkToPush);}


        }


  }
 

    }
}


}

function checkNodesContains(allData,jsonData){
for (var i = 0, len = allData.links.length; i < len; i++) {
for (var j = 0; j < jsonData.nodes.length; j++){
        //if

}
}


}


function getRandomArbitrary(a, b) {
return Math.random() * (b - a) + a;
}

//Get distance between two nodes
function distance(node1,node2){
var x = Math.abs(node1['fx'] - node2['fx']);
var y = Math.abs(node1['fy'] - node2['fy']);

var dist = Math.sqrt( x*x + y*y );
return dist;
}

//Edit of : https://stackoverflow.com/questions/15052702/count-unique-elements-in-array-without-sorting
function countGroups(d) {
var counts = {};
for (var i = 0; i < d.length; i++) {
counts[d[i]['group']] = 1 + (counts[d[i]['group']] || 0);
}
return countProperties(counts);
}

function countParentGroups(d) {
var counts = {};
for (var i = 0; i < d.length; i++) {
counts[d[i]['parentGroup']] = 1 + (counts[d[i]['parentGroup']] || 0);
}
return countProperties(counts);
}

function countGroupsArray(d) {
var counts = {};
for (var i = 0; i < d.length; i++) {
counts[d[i]['parentGroup']] = 1 + (counts[d[i]['parentGroup']] || 0);
}
return counts;
}

function countParents(d) {
var counts = 0;
for (var i = 0; i < d.length; i++) {
if (d[i]['type']== "Parent")
{counts++;}

}
return counts;
}

//https://stackoverflow.com/questions/956719/number-of-elements-in-a-javascript-object
function countProperties(obj) {
return Object.keys(obj).length;
}

function getColor(d1,d2){
for (var i =0; i< d2.length;i++){
// //////console.log(d2[i]['colour']);
if(d1 == d2[i]['id']){return d2[i]['colour'] ;}
}
}
/*
function smartLink(d) {
for (var i = 0, len = d.length; i < len; i++) {
var element = {};
const newVal = {};




for (var j = 0; j < len; j++){
if (d[i]['source'] == d[j]['source']){
    element.source = d[i]['target'];
    element.target = d[j]['target'];
    //element.type = "1";
     d.push(element);
}
 if (d[i]['target'] == d[j]['target']){
    element.source = d[i]['source'];
    element.target = d[j]['source'];
    //element.type = "1";
     d.push(element);
}
    ////////console.log("ELEMENT", element);
    
    //if (d[len-1]['source'] != element.source && d[len-1]['target'] != element.target){
     // if (element.source != element.target){
        
      //}
   
  //}
}      

}}
*/
/*
function smartLink(allData, jsonData){
// = {"source":"","target":""};
//////console.log(jsonData);
for (var i = 0, len = jsonData.nodes.length; i < len; i++) {

for (var j = 0; j < allData.links.length; j++){
  var linkToPush = {};
  for (var k = 0; k < allData.links.length; k++)
  {
    
    
    if (allData.links[k]['source'] === jsonData.nodes[i]['id'] && allData.links[j]['source'] === jsonData.nodes[i]['id']  && allData.links[j] != allData.links[k]){
          linkToPush['source'] = allData.links[j]['target'];
          linkToPush['target'] = allData.links[k]['target'];
          if (!jsonData.links.some(item => item === linkToPush)){jsonData.links.push(linkToPush);
          //////console.log("if");}
    }
   if (allData.links[k]['target'] === jsonData.nodes[i]['id'] && allData.links[j]['target'] === jsonData.nodes[i]['id']  && allData.links[j] != allData.links[k]){
      if(allData.links[k]['target'] == jsonData.nodes[i]['id']){
      linkToPush['source'] = allData.links[j]['source'];
      linkToPush['target'] = allData.links[k]['source'];
      /*
      //////console.log("j source",allData.links[j]['source']);
      //////console.log("j target",allData.links[j]['target']);
      //////console.log("k source",allData.links[k]['source']);
      //////console.log("k target",allData.links[k]['target']);
      
      if (!jsonData.links.some(item => item === linkToPush)){jsonData.links.push(linkToPush); //////console.log("else if");}
    }
}
  }
 
    }
}
}
*/
function checkPassHasNode(d, src){
var hasNode = false;
for (var i = 0; i < d.length; i++)
{
if (d[i].id == src){
hasNode = true;
break;
}
}
return hasNode;
}

function smartLink(allData, jsonData){
// = {"source":"","target":""};

//////console.log(dataToIdArray(jsonData.links, 'source'));
//////console.log(dataToIdArray(jsonData.links, 'target'));

for (var i = 0; i < jsonData.nodes.length; i++) { 
for (var j = 0; j < allData.links.length; j++){
for (var k = 0; k < allData.links.length; k++)
{
  var linkToPush = {"source": "", "target": ""};
  var reverseLink = {"source": "", "target": ""};
  var pass = jsonData.nodes;
  var passLinks = jsonData.links;
  var all = allData.links;

  if (pass[i].id == all[j].source && pass[i].id == all[k].source && all[j].target != all[k].target && checkPassHasNode(pass, all[j].target) && checkPassHasNode(pass, all[k].target ))
  {
        //////console.log(dataToIdArray(jsonData.nodes, 'id').some(item => item == allData.links[j]['target']));
        // if (dataToIdArray(jsonData.nodes, 'id').some(item => item == allData.links[j]['target']) && dataToIdArray(jsonData.nodes, 'id').some(item => item == allData.links[i]['target']) && (allData.links[j]['target'] != allData.links[i]['target'])){//&& (getParentGroup(jsonData.nodes,allData.links[j]['target']) != getParentGroup(jsonData.nodes,allData.links[i]['target']))){
        linkToPush.source = all[j].target;
        linkToPush.target = all[k].target;
        reverseLink.source = linkToPush.target;
        reverseLink.target = linkToPush.source;
        //console.log("linktopush",linkToPush);
        //console.log("reverse", reverseLink);
        for (var l = 0; l < jsonData.links.length; l++){
          var contains = false;
          //if (!isObjectEquivalent(jsonData.links[l], linkToPush) && !isObjectEquivalent(jsonData.links[l] ,reverseLink)){
         /* if ((linkToPush.source != jsonData.links[l].source && linkToPush.target != jsonData.links[l].target &&
            reverseLink.source != jsonData.links[l].source && reverseLink.target != jsonData.links[l].target) ||
            linkToPush.source == jsonData.links[l].source && linkToPush.target != jsonData.links[l].target || 
            linkToPush.source != jsonData.links[l].source && linkToPush.target == jsonData.links[l].target){*/
            //  if (JSON.stringify(linkToPush) !== JSON.stringify(jsonData.links[l]) && JSON.stringify(reverseLink) !== JSON.stringify(jsonData.links[l]) ){
           //   if (!jsonData.links.some(item => item.source === linkToPush.source && !jsonData.links.some(item => item.target === linkToPush.target) || !jsonData.links.some(item => item === reverseLink)){
           if (JSON.stringify(passLinks[l]) != JSON.stringify(linkToPush) &&  JSON.stringify(passLinks[l]) != JSON.stringify(reverseLink)){ 
            contains = true;
          } 
        }if (contains){ jsonData.links.push(linkToPush);}
        //for (var x = 0; x <dataToIdArray(jsonData.links,'target').length; x++){////console.log(dataToIdArray(jsonData.links,'target')[x]);}
        ////console.log(dataToIdArray(jsonData.links,'target').some(item => item !=reverseLink['target']));
        //if (dataToIdArray(jsonData.links,'source').some(item => item !=reverseLink['source']) && dataToIdArray(jsonData.links,'target').some(item => item !=reverseLink['target']) && dataToIdArray(jsonData.links,'source').some(item => item !=linkToPush['source']) && dataToIdArray(jsonData.links,'target').some(item => item !=linkToPush['target'])){jsonData.links.push(linkToPush);}
    }//USE FOR LOOPS INSTEAD TO FIX THISSSSSSS
  else if (pass[i].id == all[j].target && pass[i].id == all[k].target && all[j].source != all[k].source && checkPassHasNode(pass, all[j].source) && checkPassHasNode(pass, all[k].source)){
    linkToPush.source = all[j].source;
    linkToPush.target = all[k].source;
    reverseLink.source = linkToPush.target;
    reverseLink.target = linkToPush.source;
    //console.log("linktopush",linkToPush);
    //console.log("reverse", reverseLink);
    for (var l = 0; l < jsonData.links.length; l++){
      var contains = false;
     // if (!isObjectEquivalent(jsonData.links[l],linkToPush) && !isObjectEquivalent(jsonData.links[l], reverseLink)){
    /*  if ((linkToPush.source != jsonData.links[l].source && linkToPush.target != jsonData.links[l].target &&
        reverseLink.source != jsonData.links[l].source && reverseLink.target != jsonData.links[l].target) ||
        linkToPush.source == jsonData.links[l].source && linkToPush.target != jsonData.links[l].target || 
        linkToPush.source != jsonData.links[l].source && linkToPush.target == jsonData.links[l].target){*/

    // if (JSON.stringify(linkToPush) !== JSON.stringify(jsonData.links[l]) && JSON.stringify(reverseLink) !== JSON.stringify(jsonData.links[l]) ){
    //  if (!jsonData.links.some(item => item === linkToPush) || !jsonData.links.some(item => item === reverseLink)){ 
      if (JSON.stringify(passLinks[l]) != JSON.stringify(linkToPush) &&  JSON.stringify(passLinks[l]) != JSON.stringify(reverseLink)){ 
        contains = true;
        
      } 
    }if (contains){ jsonData.links.push(linkToPush);}
  }
  else if (pass[i].id == all[j].target && pass[i].id == all[k].source && all[j].source != all[k].target && checkPassHasNode(pass, all[j].source) && checkPassHasNode(pass, all[k].target)){
    linkToPush.source = all[j].source;
    linkToPush.target = all[k].target;
    reverseLink.source = linkToPush.target;
    reverseLink.target = linkToPush.source;
    //console.log("linktopush",linkToPush);
    //console.log("reverse", reverseLink);
    for (var l = 0; l < jsonData.links.length; l++){
      var contains = false;
     // if (!isObjectEquivalent(jsonData.links[l],linkToPush) && !isObjectEquivalent(jsonData.links[l], reverseLink)){
    /*  if ((linkToPush.source != jsonData.links[l].source && linkToPush.target != jsonData.links[l].target &&
        reverseLink.source != jsonData.links[l].source && reverseLink.target != jsonData.links[l].target) ||
        linkToPush.source == jsonData.links[l].source && linkToPush.target != jsonData.links[l].target || 
        linkToPush.source != jsonData.links[l].source && linkToPush.target == jsonData.links[l].target){*/

    // if (JSON.stringify(linkToPush) !== JSON.stringify(jsonData.links[l]) && JSON.stringify(reverseLink) !== JSON.stringify(jsonData.links[l]) ){
    //  if (!jsonData.links.some(item => item === linkToPush) || !jsonData.links.some(item => item === reverseLink)){ 
      if (JSON.stringify(passLinks[l]) != JSON.stringify(linkToPush) &&  JSON.stringify(passLinks[l]) != JSON.stringify(reverseLink)){ 
        contains = true;
        
      } 
    }if (contains){ jsonData.links.push(linkToPush);}
  }
  else if (pass[i].id == all[j].source && pass[i].id == all[k].target && all[j].target != all[k].source && checkPassHasNode(pass, all[j].target) && checkPassHasNode(pass, all[k].source)){
    linkToPush.source = all[j].target;
    linkToPush.target = all[k].source;
    reverseLink.source = linkToPush.target;
    reverseLink.target = linkToPush.source;
    //console.log("linktopush",linkToPush);
    //console.log("reverse", reverseLink);
    for (var l = 0; l < jsonData.links.length; l++){
      var contains = false;
     // if (!isObjectEquivalent(jsonData.links[l],linkToPush) && !isObjectEquivalent(jsonData.links[l], reverseLink)){
    /*  if ((linkToPush.source != jsonData.links[l].source && linkToPush.target != jsonData.links[l].target &&
        reverseLink.source != jsonData.links[l].source && reverseLink.target != jsonData.links[l].target) ||
        linkToPush.source == jsonData.links[l].source && linkToPush.target != jsonData.links[l].target || 
        linkToPush.source != jsonData.links[l].source && linkToPush.target == jsonData.links[l].target){*/

    // if (JSON.stringify(linkToPush) !== JSON.stringify(jsonData.links[l]) && JSON.stringify(reverseLink) !== JSON.stringify(jsonData.links[l]) ){
    //  if (!jsonData.links.some(item => item === linkToPush) || !jsonData.links.some(item => item === reverseLink)){ 
      if (JSON.stringify(passLinks[l]) != JSON.stringify(linkToPush) &&  JSON.stringify(passLinks[l]) != JSON.stringify(reverseLink)){ 
        contains = true;
        
      } 
    }if (contains){ jsonData.links.push(linkToPush);}
  }
  
}  

}         
}
}

function dataToIdArray(d, str){
var array = [d.length];
for (var i = 0; i <d.length;  i++){
array[i] = d[i][str];
}
return array;
}



function getParentGroup(d, a){
for(i = 0; i < d.length; i++){
if (d[i]['id'] == a) {return d[i]['parentGroup'] ;}

}
}

//Wasn't understanding object equality so just made this for the future
function isObjectEquivalent(a, b) {
// Create arrays of property names
var aProps = Object.getOwnPropertyNames(a);
var bProps = Object.getOwnPropertyNames(b);

// If number of properties is different,
// objects are not equivalent
if (aProps.length != bProps.length) {
return false;
}

for (var i = 0; i < aProps.length; i++) {
var propName = aProps[i];

// If values of same property are not equal,
// objects are not equivalent
if (a[propName] !== b[propName]) {
    return false;
}
}

// If we made it this far, objects
// are considered equivalent
return true;
}

function isObjectEquivalent(a, b)
{
var c;
this.getCLazy = function() {
   if (c === undefined) c = a * b // imagine * is really expensive
   return c;
}
}





});
});

});