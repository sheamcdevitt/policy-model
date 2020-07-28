var jsonToPass = {"nodes":[],"links":[]};

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
    $('#search').keyup(function(){
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
           
     
   
   
   });  
   
   
   //var currentNodes = [];
   //var jsonToPass = {"nodes":[],"links":[]};
   
   $('#result').on('click', 'li', function() {
       
       var click_text = $(this).text().split('*');
       
       $('#search').val($.trim(click_text[1]));
       console.log($('#search').val());
   
       var clickedId = $('#search').val();

       for (var i = 0; i < data.length; i++) {
           if (data[i]['id']== clickedId && !jsonToPass.nodes.some(item => item.id === clickedId)) {
             jsonToPass.nodes.push(data[i]);
             $("#add").append('<li class="list-group-item list-group-item-success">' + clickedId + ' added!<span class="badge">X</span></li>');
            }
          
       }
      
      });           
               
       
   
      



var svg = d3.select("svg"),
width = +svg.attr("width"),
height = +svg.attr("height");

var color = d3.scaleOrdinal(d3.schemeCategory20);
  
var radius = d3.scaleSqrt()
    .range([0, 6]);

    /*
var simulation = d3.forceSimulation()
    .force("link", 
           d3.forceLink().id(function(d) { return d.id; })
           	.distance(function(d) { return radius(d.source.id / 2) + radius(d.target.id / 2); })
          .strength(function(d) {return 0.75; })
          )
    .force("charge", d3.forceManyBody().strength(-300))
		.force("collide", d3.forceCollide().radius(function(d) { return radius(d.id / 2) + 2; }))
    .force("center", d3.forceCenter(width / 2, height / 2));

*/

//create(jsonToPass);



document.getElementById("CreateModel").onclick = function() {
  create(jsonToPass);
  jsonToPass = {"nodes":[],"links":[]};
  $("#add").empty();
};
function create(d) {
//function create(jsonToPass) {
//if (error) throw error;
svg.selectAll("*").remove();

d3.json("Data.json", function(error, json) {
    if (error) return console.warn(error);
    
//Functions to format nodes and links
  groupToColor(d.nodes);
  typeToRadius(d.nodes);
  //changePosition(d.nodes);
  positionPrimaryNodes(d.nodes);
  positionChildNodes(d.nodes);
  addLinksToDynamicJSON(json, d);
  smartLink(json,d);
  legend(d.nodes);
 // console.log(countGroups(d.nodes));
  
  //console.log(countGroups(graph.nodes));
  //console.log(countParents(graph.nodes));
 // smartLink(graph.links);
 var regionPositions = defineRegions(d.nodes);
 console.log(d);

  var link = svg.append("g")
      .attr("class", "links")
    .selectAll("path")
    .data(d.links)
    .enter().append("svg:path")
      .attr("stroke-width", function(d) { return 1 });

  link.style('fill', 'none')
  		//.style('stroke', 'black')
      .style("stroke-width", '2px')
      //.attr("stroke", "url(#svgGradient)")
      .attr("stroke", function(fn){  
      var defs = svg.append("defs");

      var gradient = defs.append("linearGradient")
         .attr("id", "svgGradient")
         .attr("x1", "0%")
         .attr("x2", "0%")
         .attr("y1", "0%")
         .attr("y2", "00%");
      
      gradient.append("stop")
         .attr('class', 'start')
         .attr("offset", "0%")
         .attr("stop-color", getNodeColour(d.nodes,fn.target))//getColor(d.source,graph.nodes))
         .attr("stop-opacity", 0.2);
       //  console.log(getNodeColour(d.nodes,fn.source));
       // console.log(getNodeColour(d.nodes,fn.target));
      
        // console.log(getColor(d.target,graph.nodes));
      gradient.append("stop")
         .attr('class', 'end')
         .attr("offset", "100%")
         .attr("stop-color",getNodeColour(d.nodes,fn.source))// getColor(d.target,graph.nodes))
         .attr("stop-opacity", 0.1);
        return "url(#svgGradient)";
        

        
    })

      .attr("fill", "none");




  var node = svg.append("g")
      .attr("class", "nodes")
    .selectAll("g")
    .data(d.nodes)
    .enter().append("g")
  .style('transform-origin', '50% 50%');
  /*
   .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));
          */
  
  node.append('circle')
      .attr("r", function(d) { return d.radius; })
      .style("stroke-width", 5)
      .style("stroke",  function(d){return d.colour;})
      
      .attr("fill", "White");
    
  
  node.append("text")
      //.attr("dy", "3px")
      .attr("dy", function(d){
          if (d['secondDisplay'] == null){return 4;}
          if(d['type'] == "Child"){return 7;}
          else{return -10;}
      })
      .attr("text-anchor", "middle")
      .style('fill', function(d){return d.colour;})
      .text(function(d) { 
        
        if (d['type'] == "Child"){
          //Split name into number and letter parts: only return number for 'Child' circles
          //var arr2 = d.id.match(/[a-z]+|[^a-z]+/gi);
          var arr = d.id.match(/([a-z]*)([\w.]+)/i);
         // console.log(arr);
         //console.log(arr2);
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
    .text(function(d) { return d.secondDisplay; });   // "line 2" or whatever value you want to add here.
         

    /*
  simulation
      .nodes(d.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(d.links);
*/
      
        

      //LEGEND///

    /*
    svg.append("circle").attr("cx",25).attr("cy",1290).attr("r", 15).style("fill", "White").style("stroke-width", 5).style("stroke","Red"  );
    svg.append("circle").attr("cx",25).attr("cy",1330).attr("r", 15).style("fill", "White").style("stroke-width", 5).style("stroke", "DeepPink" );
    svg.append("circle").attr("cx",25).attr("cy",1370).attr("r", 15).style("fill", "White").style("stroke-width", 5).style("stroke","LightSalmon"  );
    svg.append("circle").attr("cx",25).attr("cy",1410).attr("r", 15).style("fill", "White").style("stroke-width", 5).style("stroke", "Blue" );
    svg.append("circle").attr("cx",25).attr("cy",1450).attr("r", 15).style("fill", "White").style("stroke-width", 5).style("stroke", "Purple" );
   
    svg.append("text").attr("x", 50).attr("y", 1290).text("Sustainable Development Goals").style("font-size", "15px").attr("alignment-baseline","middle");
    svg.append("text").attr("x", 50).attr("y", 1330).text("WHO Arts Components").style("font-size", "15px").attr("alignment-baseline","middle");
    svg.append("text").attr("x", 50).attr("y", 1370).text("Who 5 Steps to Wellbeing").style("font-size", "15px").attr("alignment-baseline","middle");
    svg.append("text").attr("x", 50).attr("y", 1410).text("Programme for Government").style("font-size", "15px").attr("alignment-baseline","middle");
    svg.append("text").attr("x", 50).attr("y", 1450).text("Belfast Agenda").style("font-size", "15px").attr("alignment-baseline","middle");
     */ 

  //console.log(countGroupsArray(d.nodes));


  //function ticked() {
    link.attr("d", function(fn) {
      
      
        var dx = getNodePosition(d.nodes,fn.target,true) - getNodePosition(d.nodes,fn.source,true),
            dy = getNodePosition(d.nodes,fn.target,false) - getNodePosition(d.nodes,fn.source,false),
            dr = Math.sqrt(dx * dx + dy * dy);
/*
        var dx = d.target.x - d.source.x,
            dy = d.target.y - d.source.y,
            dr = Math.sqrt(dx * dx + dy * dy);
            */
        return "M" + 
            getNodePosition(d.nodes,fn.source,true) + "," + 
            getNodePosition(d.nodes,fn.source,false) + "A" + 
            dr + "," + dr + " 0 0,1 " + 
            getNodePosition(d.nodes,fn.target,true) + "," + 
            getNodePosition(d.nodes,fn.target,false);
    });


    node.selectAll('circle')
        .attr("cx", function(d) { return d['fx']; })
        .attr("cy", function(d) { return d['fy']; });
        

    node.selectAll('text')
    .attr("x",function(d) { return d['fx']; })// d => d.x)
        .attr("y",function(d) { return d['fy']; });// d => d.y);
       // .attr("dy", "3px");
    
    //node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

/*
   node
        .attr("x", d => d.fx)
        .attr("y", d => d.fy);
    */
    
 // }
});
}





/*
function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
  var x = d.fx;
  var y = d.fy;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = d.fx; //previously null
  d.fy = d.fy;
}
*/
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
  console.log(obj);
  for (var i = 0; i < obj.length; i++){
    console.log(getColour(obj,obj[i]['parentGroup']));
    var y = 3710 + (i*40);
    svg.append("text").attr("x", 50).attr("y", y).text(obj[i]).style("font-size", "15px").attr("alignment-baseline","middle");
   svg.append("circle").attr("cx",25).attr("cy",y).attr("r", 15).style("fill", "White").style("stroke-width", 5).style("stroke",getColour(d,obj[i]));
  }  
}
function typeToRadius(d){
    for (var i = 0; i < d.length; i++){
    if (d[i]['type'] == "Parent"){d[i]['radius'] = 55;}
    else if(d[i]['type'] == "Child"){d[i]['radius'] = 23;}
 
    }
}

function getNodePosition(d, a, pos){
  for(i = 0; i < d.length; i++){
    if (d[i]['id'] == a && pos) {return d[i]['fx'] }
    else if (d[i]['id'] == a && !pos) {return d[i]['fy'] }
  }
}

function getNodeColour(d, a){
  for(i = 0; i < d.length; i++){
    if (d[i]['id'] == a) {return d[i]['colour'] ;}
    
  }
}

function getColour(d, a){
  for(i = 0; i < d.length; i++){
    if (d[i]['parentGroup'] == a) {return d[i]['colour'] ;}
    
  }
}

function positionPrimaryNodes(d){
  var obj = Object.keys(countGroupsArray(d)).sort();
  console.log(obj);
  var overlapping = true;
  var w = width, h = height, Ox = 100, Oy = 100;
  var regionArray;
  if (countGroups(d) == 1){regionArray = [[Ox,Oy,w-100,h-100]];}
  else if (countGroups(d) == 2){regionArray = [[Ox,Oy,(w/2)-50,h-100],[(w/2)+50,Oy,w-100, h-100]];}
  else if (countGroups(d) == 3){regionArray = [[Ox,Oy,(w/2)-50,((2*h)/3)-50],[(w/2)+50,Oy,w-100,((2*h)/3)-50],[Ox,((2*h)/3)+50,w-100,h-100]];}
  else if (countGroups(d) == 4){regionArray = [[Ox,Oy,(w/2)-50,(h/2)-50],[(w/2)+50,Oy,w-100,(h/2)-50],[Ox,(h/2)+50,(w/2)-50,h-100],[(w/2)+50,(h/2)+50,w-100,h-100]];}
  else if (countGroups(d) == 5){regionArray = [[Ox,Oy,(w/2)-50,((2*h)/5)-50],[(w/2)+50,Oy,w-100,((2*h)/5) -50],[Ox,((2*h)/5)+50,(w/2)-50, ((4*h)/5) -50],[(w/2)-50,((2*h)/5)+50,,w-100,((4*h)/5) -50],[Ox,((4*h)/5) +50,w-100,h-100]];}
  else if (countGroups(d) == 6){regionArray = [[Ox,Oy,(w/2)-50,(h/3)-50],[(w/2)+50,Oy,w-50,(h/3)-50],[Ox,(h/3)+50,(w/2)-50,((2*h)/3)-50],[(w/2)+50,(h/3)+50,w-50,((2*h)/3)-50],[Ox,((2*h)/3)+50,(w/2)-50, h-50],[(w/2)+50,((2*h)/3)+50,w-50,h-50]]}
  //something in here defining what region it should go in but dont need that for now
  //var region = [100,100,width-100,height-100];
  if (d.length <= 1){
   d[0]['fx'] = getRandomArbitrary(regionArray[0][0],regionArray[0][2]);
   d[0]['fy'] = getRandomArbitrary(regionArray[0][1],regionArray[0][3]);
  }

  else {

  for (var i = 0, len = d.length; i < len; i++) {
    var currentNode = d[i];
    
    
    if(currentNode['parentGroup'] == obj[countGroups(d)-countGroups(d)]){
      
    currentNode['fx'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)][0],regionArray[countGroups(d)-countGroups(d)][2]);
    currentNode['fy'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)][1],regionArray[countGroups(d)-countGroups(d)][3]);
    } 
    else if(currentNode['parentGroup'] == obj[countGroups(d)-countGroups(d) +1]){
      currentNode['fx'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)+1][0],regionArray[countGroups(d)-countGroups(d)+1][2]);
      currentNode['fy'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)+1][1],regionArray[countGroups(d)-countGroups(d)+1][3]);
    }
    else if(currentNode['parentGroup'] == obj[countGroups(d)-countGroups(d) +2]){
     
      currentNode['fx'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)+2][0],regionArray[countGroups(d)-countGroups(d)+2][2]);
      currentNode['fy'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)+2][1],regionArray[countGroups(d)-countGroups(d)+2][3]);
     }
     else if(currentNode['parentGroup'] == obj[countGroups(d)-countGroups(d) +3]){
     
      currentNode['fx'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)+3][0],regionArray[countGroups(d)-countGroups(d)+3][2]);
      currentNode['fy'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)+2][1],regionArray[countGroups(d)-countGroups(d)+3][3]);
     }
     else if(currentNode['parentGroup'] == obj[countGroups(d)-countGroups(d) +4]){
     
      currentNode['fx'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)+4][0],regionArray[countGroups(d)-countGroups(d)+4][2]);
      currentNode['fy'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)+4][1],regionArray[countGroups(d)-countGroups(d)+4][3]);
     }
     else if(currentNode['parentGroup'] == obj[countGroups(d)-countGroups(d) +5]){
     
      currentNode['fx'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)+5][0],regionArray[countGroups(d)-countGroups(d)+5][2]);
      currentNode['fy'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)+5][1],regionArray[countGroups(d)-countGroups(d)+5][3]);
     }
     else if(currentNode['parentGroup'] == obj[countGroups(d)-countGroups(d) +6]){
     
      currentNode['fx'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)+6][0],regionArray[countGroups(d)-countGroups(d)+6][2]);
      currentNode['fy'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)+6][1],regionArray[countGroups(d)-countGroups(d)+6][3]);
     }
    
    for (var j =0; j < d.length; j++){
      if (i > j){
        
      
      var compareNode = d[j];

     // console.log("length: index:" + i,d.length);
      
      
      //compareNode['fx'] = getRandomArbitrary(region[0],region[2]);
      //compareNode['fy'] = getRandomArbitrary(region[1],region[3]);
     // overlapping = true;
     // while(overlapping){
      var dist = distance(currentNode, compareNode); // distance function between node and other + wiggle room for other nodes 
      //console.log("Current " + currentNode + "compare ",compareNode);
      //console.log("distance between " + currentNode['id'] + " " + compareNode['id'] + ": ",dist )
      if (dist < (currentNode['radius'] + compareNode['radius']) +30){ //+determine wiggle room)){
          overlapping  = true;
          var iterator = 0;
          while(overlapping){
            //console.log(distance);
            //console.log( obj[countGroups(d)-countGroups(d)]);
            if(currentNode['parentGroup'] = obj[countGroups(d)-countGroups(d)]){
             
              currentNode['fx'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)][0],regionArray[countGroups(d)-countGroups(d)][2]);
              currentNode['fy'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)][1],regionArray[countGroups(d)-countGroups(d)][3]);
              
              } 
              else if(currentNode['parentGroup'] = obj[countGroups(d)-countGroups(d) +1]){
                
                currentNode['fx'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)+1][0],regionArray[countGroups(d)-countGroups(d)+1][2]);
                currentNode['fy'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)+1][1],regionArray[countGroups(d)-countGroups(d)+1][3]);
                }
                else if(currentNode['parentGroup'] == obj[countGroups(d)-countGroups(d) +2]){
     
                  currentNode['fx'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)+2][0],regionArray[countGroups(d)-countGroups(d)+2][2]);
                  currentNode['fy'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)+2][1],regionArray[countGroups(d)-countGroups(d)+2][3]);
                 }
                 else if(currentNode['parentGroup'] == obj[countGroups(d)-countGroups(d) +3]){
                 
                  currentNode['fx'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)+3][0],regionArray[countGroups(d)-countGroups(d)+3][2]);
                  currentNode['fy'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)+2][1],regionArray[countGroups(d)-countGroups(d)+3][3]);
                 }
                 else if(currentNode['parentGroup'] == obj[countGroups(d)-countGroups(d) +4]){
                 
                  currentNode['fx'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)+4][0],regionArray[countGroups(d)-countGroups(d)+4][2]);
                  currentNode['fy'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)+4][1],regionArray[countGroups(d)-countGroups(d)+4][3]);
                 }
                 else if(currentNode['parentGroup'] == obj[countGroups(d)-countGroups(d) +5]){
                 
                  currentNode['fx'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)+5][0],regionArray[countGroups(d)-countGroups(d)+5][2]);
                  currentNode['fy'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)+5][1],regionArray[countGroups(d)-countGroups(d)+5][3]);
                 }
                 else if(currentNode['parentGroup'] == obj[countGroups(d)-countGroups(d) +6]){
                 
                  currentNode['fx'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)+6][0],regionArray[countGroups(d)-countGroups(d)+6][2]);
                  currentNode['fy'] = getRandomArbitrary(regionArray[countGroups(d)-countGroups(d)+6][1],regionArray[countGroups(d)-countGroups(d)+6][3]);
                 }
            if (dist > (currentNode['radius'] + compareNode['radius'])){
              overlapping = false;
              
            }
              iterator++;
            if (iterator > 1000000) {
              overlapping = false;
              currentNode['fx'] = 0;//getRandomArbitrary(region[0],region[2]);
              currentNode['fy'] = 0;//getRandomArbitrary(region[1],region[3]);
            }//write some code to fix this}
          }
         // break;
          //currentNode['fx'] = getRandomArbitrary(region[0],region[2]);
          //currentNode['fy'] = getRandomArbitrary(region[1],region[3]);
          //console.log("distance between " + currentNode['id'] + " " + compareNode['id'] + ": ",dist )
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
      //console.log(Math.floor(parseInt(child[2])));
     // console.log(parseInt(parent[2]));
      if (d[i]['parentGroup'] == d[j]['parentGroup'] && Math.floor(parseInt(child[2])) == parseInt(parent[2]) && d[i]['type'] == "Child" && d[j]['type'] == "Parent")
      {
        if (d[j]['counter'] == null){d[j]['counter'] = 0;}
        else {d[j]['counter'] += 1;}
        
        d[i]['fx'] = d[j]['fx'] + 1.7*d[j]['radius']*Math.cos((d[j]['counter'])*Math.PI*.25) ;
        d[i]['fy'] = d[j]['fy'] + 1.7*d[j]['radius']*Math.sin((d[j]['counter'])*Math.PI*.25) ;
        //console.log("Child x",d[i]['fx']);
        //console.log("Child y",d[i]['fy']);
        //console.log("Child ",d[i]['id']);
      
        //console.log("Parent x",d[j]['fx']);
        //console.log("Parent y",d[i]['fy']);
        //console.log("Parent ",d[j]['id']);
        
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


function changePosition(d){
    for (var i = 0, len = d.length; i < len; i++) {
       // console.log("LENGTH",len);
      if (d[i]['parentGroup'] ==("UN Sustainable Development Goals")){
        
        d[i]['fx'] = getRandomArbitrary(965, 35);
        d[i]['fy'] = getRandomArbitrary(150,35);
        //console.log("node" + i + " x", d[i]['fx']);
        //console.log("node" + i + " y", d[i]['fy']);
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


function addLinksToDynamicJSON(allData, jsonData){
  var linkToPush;

    for (var i = 0, len = jsonData.nodes.length; i < len; i++) {
        
        for (var j = 0; j < jsonData.nodes.length; j++){

          for (var k = 0; k < allData.links.length; k++)
          {
            //console.log("Source1: " + allData.links[k]['source'] + " source1tocheck: " + jsonData.nodes[i]['id'] + "target1: " + allData.links[k]['target'] + " target1tocheck: " + jsonData.nodes[j]['id']);
            //console.log("Source1: " + allData.links[k]['source'] + " source1tocheck: " + jsonData.nodes[j]['id'] + "target1: " + allData.links[k]['target'] + " target1tocheck: " + jsonData.nodes[i]['id']);
            
            if ((allData.links[k]['source'] == jsonData.nodes[i]['id'] && allData.links[k]['target'] == jsonData.nodes[j]['id'] )
                || (allData.links[k]['source'] == jsonData.nodes[j]['id'] && allData.links[k]['target'] == jsonData.nodes[i]['id'] )){
                  //console.log("yay");
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

function countGroupsArray(d) {
  var counts = {};
  for (var i = 0; i < d.length; i++) {
      counts[d[i]['parentGroup']] = 1 + (counts[d[i]['parentGroup']] || 0);
  }
  return counts;
}

function countParents(d) {
    var counts = {};
    for (var i = 0; i < d.length; i++) {
        if (d[i]['type']== "Parent")
        {counts[d[i]['group']] = 1 + (counts[d[i]['group']] || 0);}
        
    }
    return counts;
}

//https://stackoverflow.com/questions/956719/number-of-elements-in-a-javascript-object
function countProperties(obj) {
    return Object.keys(obj).length;
}

function getColor(d1,d2){
    for (var i =0; i< d2.length;i++){
       // console.log(d2[i]['colour']);
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
            //console.log("ELEMENT", element);
            
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
    console.log(jsonData);
    for (var i = 0, len = jsonData.nodes.length; i < len; i++) {
        
        for (var j = 0; j < allData.links.length; j++){
          var linkToPush = {};
          for (var k = 0; k < allData.links.length; k++)
          {
            
            
            if (allData.links[k]['source'] === jsonData.nodes[i]['id'] && allData.links[j]['source'] === jsonData.nodes[i]['id']  && allData.links[j] != allData.links[k]){
                  linkToPush['source'] = allData.links[j]['target'];
                  linkToPush['target'] = allData.links[k]['target'];
                  if (!jsonData.links.some(item => item === linkToPush)){jsonData.links.push(linkToPush);
                  console.log("if");}

            }
           if (allData.links[k]['target'] === jsonData.nodes[i]['id'] && allData.links[j]['target'] === jsonData.nodes[i]['id']  && allData.links[j] != allData.links[k]){
              if(allData.links[k]['target'] == jsonData.nodes[i]['id']){
              linkToPush['source'] = allData.links[j]['source'];
              linkToPush['target'] = allData.links[k]['source'];
              /*
              console.log("j source",allData.links[j]['source']);
              console.log("j target",allData.links[j]['target']);
              console.log("k source",allData.links[k]['source']);
              console.log("k target",allData.links[k]['target']);
              
              if (!jsonData.links.some(item => item === linkToPush)){jsonData.links.push(linkToPush); console.log("else if");}
            }

        }


          }
         

            }
        }


}
*/

function smartLink(allData, jsonData){
  // = {"source":"","target":""};
  
    console.log(dataToIdArray(jsonData.links, 'source'));
    console.log(dataToIdArray(jsonData.links, 'target'));
    
    for (var i = 0; i < allData.links.length; i++) {
        
        for (var j = 0; j < allData.links.length; j++){

          for (var k = 0; k < jsonData.nodes.length; k++)
          {
            var linkToPush = {};
            var reverseLink = {};
            
            if (allData.links[i]['source'] === jsonData.nodes[k]['id'] && allData.links[j]['source'] === jsonData.nodes[k]['id']  && allData.links[i] != allData.links[k]){
                  if (dataToIdArray(jsonData.nodes, 'id').some(item => item == allData.links[j]['target']) && dataToIdArray(jsonData.nodes, 'id').some(item => item == allData.links[i]['target']) && (allData.links[j]['target'] != allData.links[i]['target'])&& (getParentGroup(jsonData.nodes,allData.links[j]['target']) != getParentGroup(jsonData.nodes,allData.links[i]['target']))){
                  linkToPush['source'] = allData.links[j]['target'];
                  linkToPush['target'] = allData.links[i]['target'];
                  reverseLink['source'] = linkToPush['target'];
                  reverseLink['target'] = linkToPush['source'];
                  //console.log(jsonData.links);
                  console.log(reverseLink['target']);
                  console.log("length", dataToIdArray(jsonData.links,'target').length);
                  //console.log(jsonData.links.some(item => item !=reverseLink));
                  for (var x = 0; x <dataToIdArray(jsonData.links,'target').length; x++){console.log(dataToIdArray(jsonData.links,'target')[x]);}
                  console.log(dataToIdArray(jsonData.links,'target').some(item => item !=reverseLink['target']));
                  if (dataToIdArray(jsonData.links,'source').some(item => item !=reverseLink['source']) && dataToIdArray(jsonData.links,'target').some(item => item !=reverseLink['target']) && dataToIdArray(jsonData.links,'source').some(item => item !=linkToPush['source']) && dataToIdArray(jsonData.links,'target').some(item => item !=linkToPush['target'])){jsonData.links.push(linkToPush);}
                  }//USE FOR LOOPS INSTEAD TO FIX THISSSSSSS

            }
           else if (allData.links[i]['target'] === jsonData.nodes[k]['id'] && allData.links[j]['target'] === jsonData.nodes[k]['id']  && allData.links[j] != allData.links[i]){
            if (dataToIdArray(jsonData.nodes, 'id').some(item => item == allData.links[j]['source']) && dataToIdArray(jsonData.nodes,'id').some(item => item == allData.links[i]['source'])&& (allData.links[j]['source'] != allData.links[i]['source'])&& (getParentGroup(jsonData.nodes,allData.links[j]['source']) != getParentGroup(jsonData.nodes,allData.links[i]['source']))){
              linkToPush['source'] = allData.links[j]['source'];
              linkToPush['target'] = allData.links[i]['source'];
              reverseLink['source'] = linkToPush['target'];
              reverseLink['target'] = linkToPush['source'];
              console.log(reverseLink);
              
              if (!jsonData.links.some(item => item == linkToPush) && !jsonData.links.some(item => item == reverseLink)){jsonData.links.push(linkToPush);}
            }

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












    //Mike Bostock method
    function wrap(text, width) {
        text.each(function() {
          var text = d3.select(this),
              words = text.text().split(/\s+/).reverse(),
              word,
              line = [],
              lineNumber = 0,
              lineHeight = 1.1, // ems
              y = text.attr("y"),
              dy = parseFloat(text.attr("dy")),
              tspan = text.text(null).append("tspan").attr("x", fx).attr("y", fy).attr("dy", dy + "em");
          while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
              line.pop();
              tspan.text(line.join(" "));
              line = [word];
              tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
            }
          }
        });
      }
   
   
    
      
});
});

});




