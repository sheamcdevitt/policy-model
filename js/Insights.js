var noOfOutcomes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var noOfIndicators = [];
var noOfOutcomesLocation = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var noOfIndicatorsLocation = [];
var colorArray = [];
var locationImplementationData = [],
  locationImplementationDataTemp = [];
var barChartData, myBarChart;
var tempProjObj = projectObject;
var tempProArr;
var pfg1Chart,
  pfg2Chart,
  pfg3Chart,
  pfg4Chart,
  pfg5Chart,
  pfg6Chart,
  pfg7Chart,
  pfg8Chart,
  pfg9Chart,
  pfg10Chart,
  pfg11Chart,
  pfg12Chart,
  pfg13Chart,
  pfg14Chart,
  chartOverall;
for (var i = 0; i < 42; i++) {
  noOfIndicatorsLocation[i] = 0;
}

function hideSVG() {
  pfgsPerImplementation();
  for (var i = 0; i < noOfIndicators.length; i++) {
    colorArray[i] = "rgb(255," + (noOfIndicators[i] * 30).toString() + ", 0)";
  }
  // //console.log(allModels);
  var pfgAchieved = countGroupsArray(modelData.nodes)[
      "Programme for Government Indicators"
    ],
    pfgNotAchieved = 42 - pfgAchieved,
    allGroupsNos = groupNos(countParentGroupsArray(modelData.nodes)),
    allGroupsNames = groupNames(countParentGroupsArray(modelData.nodes));

  // //console.log(allGroupsNos);
  // //console.log(allGroupsNames);
  var ctxOverall = document
    .getElementById("single-project-insights")
    .getContext("2d");
  //ctxOverall.canvas.width = 500;
  //ctxOverall.canvas.height = 500;
  /*
  var ctxPFGAchieved = document
    .getElementById("insights-pfgAchieved")
    .getContext("2d");
  ctxPFGAchieved.canvas.width = 400;
  ctxPFGAchieved.canvas.height = 400;
  /*var ctxOverall = document.getElementById("insights-overall").getContext("2d");
  ctxOverall.canvas.width = 400;
  ctxOverall.canvas.height = 400;

  var pfgAchieved = new Chart(ctxPFGAchieved, {
    type: "doughnut",
    data: {
      labels: [
        "Achieved", // + (pfgAchieved / 42).toFixed(2),
        "Not Achieved", // + (pfgNotAchieved / 42).toFixed(2),
      ],
      datasets: [
        {
          label: "My First Dataset",
          data: [pfgAchieved, pfgNotAchieved],
          backgroundColor: ["rgb(0, 46, 250)", "rgb(150, 168, 255)"],
        },
      ],
    },
    options: {
      tooltips: {
        callbacks: {
          title: function (tooltipItem, data) {
            return data["labels"][tooltipItem[0]["index"]];
          },
          label: function (tooltipItem, data) {
            return data["datasets"][0]["data"][tooltipItem["index"]] + "/42";
          },
          afterLabel: function (tooltipItem, data) {
            var dataset = data["datasets"][0];
            var percent = Math.round(
              (dataset["data"][tooltipItem["index"]] / 42) * 100
            );
            return "(" + percent + "%)";
          },
        },
        /*backgroundColor: "#FFF",
        titleFontSize: 16,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 14,
        displayColors: false,
      },
      title: {
        display: true,
        text: "PFG Indicators Achieved",
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });*/
  //
  //
  //

  chartOverall = new Chart(ctxOverall, {
    type: "doughnut",
    data: {
      labels: allGroupsNames,
      datasets: [
        {
          label: "My Second Dataset",
          data: allGroupsNos, //[pfgAchieved, pfgNotAchieved],
          backgroundColor: d3.schemeCategory20,
        },
      ],
    },
    /* options: {
      tooltips: {
        callbacks: {
          title: function (tooltipItem, data) {
            return data["labels"][tooltipItem[0]["index"]];
          },
          label: function (tooltipItem, data) {
            return (
              data["datasets"][0]["data"][tooltipItem["index"]] +
              "/" +
              allGroupsNos.reduce((a, b) => a + b, 0)
            );
          },
          afterLabel: function (tooltipItem, data) {
            var dataset = data["datasets"][0];
            var percent = Math.round(
              (dataset["data"][tooltipItem["index"]] /
                dataset["_meta"][0]["total"]) *
                100
            );
            return "(" + percent + "%)";
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 16,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 14,
        displayColors: false,
      },
      title: {
        display: true,
        text: "Strategy Breakdown",
      },
      responsive: false,
      maintainAspectRatio: false,
    },*/
  });
  chartOverall.update();
  barChartData = {
    labels: [
      "PFG Indicator 1",
      "PFG Indicator 2",
      "PFG Indicator 3",
      "PFG Indicator 4",
      "PFG Indicator 5",
      "PFG Indicator 6",
      "PFG Indicator 7",
      "PFG Indicator 8",
      "PFG Indicator 9",
      "PFG Indicator 10",
      "PFG Indicator 11",
      "PFG Indicator 12",
      "PFG Indicator 13",
      "PFG Indicator 14",
      "PFG Indicator 15",
      "PFG Indicator 16",
      "PFG Indicator 17",
      "PFG Indicator 18",
      "PFG Indicator 19",
      "PFG Indicator 20",
      "PFG Indicator 21",
      "PFG Indicator 22",
      "PFG Indicator 23",
      "PFG Indicator 24",
      "PFG Indicator 25",
      "PFG Indicator 26",
      "PFG Indicator 27",
      "PFG Indicator 28",
      "PFG Indicator 29",
      "PFG Indicator 30",
      "PFG Indicator 31",
      "PFG Indicator 32",
      "PFG Indicator 33",
      "PFG Indicator 34",
      "PFG Indicator 35",
      "PFG Indicator 36",
      "PFG Indicator 37",
      "PFG Indicator 38",
      "PFG Indicator 39",
      "PFG Indicator 40",
      "PFG Indicator 41",
      "PFG Indicator 42",
    ],
    datasets: [
      {
        label: "Amount of actions indicator hits",
        data: noOfIndicators,
        backgroundColor: colorArray,
      },
    ],
  };

  var ctxPFG = document.getElementById("insights-pfgs").getContext("2d");
  ctxPFG.canvas.width = 500;
  ctxPFG.canvas.height = 200;
  myBarChart = new Chart(ctxPFG, {
    type: "bar",
    data: barChartData,
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              stepSize: 1,
              max: 10, // Math.max.apply(Math, noOfIndicators),
              //  / suggestedMax = 10
            },
          },
        ],
      },
    },
  });

  var ctxPFG1 = document.getElementById("insights-pfg1").getContext("2d");
  ctxPFG1.canvas.width = 400;
  ctxPFG1.canvas.height = 400;

  pfg1Chart = new Chart(ctxPFG1, {
    type: "doughnut",
    data: {
      labels:
        pfgDistribution("PFGOV1") != 0
          ? [
              "No. of projects \nthat achieve outcome:", // + (pfgAchieved / 42).toFixed(2),
              "Total Number of projects:", // + (pfgNotAchieved / 42).toFixed(2),
            ]
          : ["Total Number of projects:"],
      datasets: [
        {
          label: "PFG1",
          data:
            pfgDistribution("PFGOV1") != 0
              ? [
                  pfgDistribution("PFGOV1"),
                  Object.keys(allModels).length - pfgDistribution("PFGOV1"),
                ]
              : [Object.keys(allModels).length],
          backgroundColor:
            pfgDistribution("PFGOV1") != 0
              ? ["rgb(0, 46, 250)", "rgb(150, 168, 255)"]
              : ["rgb(150, 168, 255)"],
        },
      ],
    },
    options: {
      tooltips: {
        callbacks: {
          title: function (tooltipItem, data) {
            return data["labels"][tooltipItem[0]["index"]];
          },
          label: function (tooltipItem, data) {
            //console.log([tooltipItem["index"]]);
            if ([tooltipItem["index"]] == 1) {
              return Object.keys(allModels).length;
            }
            return data["datasets"][0]["data"][tooltipItem["index"]];
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 24,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 20,
        displayColors: false,
      },
      title: {
        display: false,
        text: "PFG Target 1 Value Distribution",
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });

  //PFG2
  var ctxPFG2 = document.getElementById("insights-pfg2").getContext("2d");
  ctxPFG2.canvas.width = 400;
  ctxPFG2.canvas.height = 400;

  pfg2Chart = new Chart(ctxPFG2, {
    type: "doughnut",
    data: {
      labels:
        pfgDistribution("PFGOV2") != 0
          ? [
              "No. of projects \nthat achieve outcome:", // + (pfgAchieved / 42).toFixed(2),
              "Total Number of projects:", // + (pfgNotAchieved / 42).toFixed(2),
            ]
          : ["Total Number of projects:"],
      datasets: [
        {
          label: "PFG2",
          data:
            pfgDistribution("PFGOV2") != 0
              ? [
                  pfgDistribution("PFGOV2"),
                  Object.keys(allModels).length - pfgDistribution("PFGOV2"),
                ]
              : [Object.keys(allModels).length],
          backgroundColor:
            pfgDistribution("PFGOV2") != 0
              ? ["rgb(0, 46, 250)", "rgb(150, 168, 255)"]
              : ["rgb(150, 168, 255)"],
        },
      ],
    },
    options: {
      tooltips: {
        callbacks: {
          title: function (tooltipItem, data) {
            return data["labels"][tooltipItem[0]["index"]];
          },
          label: function (tooltipItem, data) {
            if ([tooltipItem["index"]] == 1) {
              return Object.keys(allModels).length;
            }
            return data["datasets"][0]["data"][tooltipItem["index"]];
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 24,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 20,
        displayColors: false,
      },
      title: {
        display: false,
        text: "PFG Target 1 Value Distribution",
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });
  //
  //PFG3
  //
  var ctxPFG3 = document.getElementById("insights-pfg3").getContext("2d");
  ctxPFG3.canvas.width = 400;
  ctxPFG3.canvas.height = 400;

  pfg3Chart = new Chart(ctxPFG3, {
    type: "doughnut",
    data: {
      labels:
        pfgDistribution("PFGOV3") != 0
          ? [
              "No. of projects \nthat achieve outcome:", // + (pfgAchieved / 42).toFixed(2),
              "Total Number of projects:", // + (pfgNotAchieved / 42).toFixed(2),
            ]
          : ["Total Number of projects:"],
      datasets: [
        {
          label: "PFG1",
          data:
            pfgDistribution("PFGOV3") != 0
              ? [
                  pfgDistribution("PFGOV3"),
                  Object.keys(allModels).length - pfgDistribution("PFGOV3"),
                ]
              : [Object.keys(allModels).length],
          backgroundColor:
            pfgDistribution("PFGOV3") != 0
              ? ["rgb(0, 46, 250)", "rgb(150, 168, 255)"]
              : ["rgb(150, 168, 255)"],
        },
      ],
    },
    options: {
      tooltips: {
        callbacks: {
          title: function (tooltipItem, data) {
            return data["labels"][tooltipItem[0]["index"]];
          },
          label: function (tooltipItem, data) {
            if ([tooltipItem["index"]] == 1) {
              return Object.keys(allModels).length;
            }
            return data["datasets"][0]["data"][tooltipItem["index"]];
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 24,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 20,
        displayColors: false,
      },
      title: {
        display: false,
        text: "PFG Target 1 Value Distribution",
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });
  //
  //PFG4
  //
  var ctxPFG4 = document.getElementById("insights-pfg4").getContext("2d");
  ctxPFG4.canvas.width = 400;
  ctxPFG4.canvas.height = 400;

  pfg4Chart = new Chart(ctxPFG4, {
    type: "doughnut",
    data: {
      labels:
        pfgDistribution("PFGOV4") != 0
          ? [
              "No. of projects \nthat achieve outcome:", // + (pfgAchieved / 42).toFixed(2),
              "Total Number of projects:", // + (pfgNotAchieved / 42).toFixed(2),
            ]
          : ["Total Number of projects:"],
      datasets: [
        {
          label: "PFG1",
          data:
            pfgDistribution("PFGOV4") != 0
              ? [
                  pfgDistribution("PFGOV4"),
                  Object.keys(allModels).length - pfgDistribution("PFGOV4"),
                ]
              : [Object.keys(allModels).length],
          backgroundColor:
            pfgDistribution("PFGOV4") != 0
              ? ["rgb(0, 46, 250)", "rgb(150, 168, 255)"]
              : ["rgb(150, 168, 255)"],
        },
      ],
    },
    options: {
      tooltips: {
        callbacks: {
          title: function (tooltipItem, data) {
            return data["labels"][tooltipItem[0]["index"]];
          },
          label: function (tooltipItem, data) {
            if ([tooltipItem["index"]] == 1) {
              return Object.keys(allModels).length;
            }
            return data["datasets"][0]["data"][tooltipItem["index"]];
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 24,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 20,
        displayColors: false,
      },
      title: {
        display: false,
        text: "PFG Target 1 Value Distribution",
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });
  //
  //PFG5
  //
  var ctxPFG5 = document.getElementById("insights-pfg5").getContext("2d");
  ctxPFG5.canvas.width = 400;
  ctxPFG5.canvas.height = 400;

  pfg5Chart = new Chart(ctxPFG5, {
    type: "doughnut",
    data: {
      labels:
        pfgDistribution("PFGOV5") != 0
          ? [
              "No. of projects \nthat achieve outcome:", // + (pfgAchieved / 42).toFixed(2),
              "Total Number of projects:", // + (pfgNotAchieved / 42).toFixed(2),
            ]
          : ["Total Number of projects:"],
      datasets: [
        {
          label: "PFG1",
          data:
            pfgDistribution("PFGOV5") != 0
              ? [
                  pfgDistribution("PFGOV5"),
                  Object.keys(allModels).length - pfgDistribution("PFGOV5"),
                ]
              : [Object.keys(allModels).length],
          backgroundColor:
            pfgDistribution("PFGOV5") != 0
              ? ["rgb(0, 46, 250)", "rgb(150, 168, 255)"]
              : ["rgb(150, 168, 255)"],
        },
      ],
    },
    options: {
      tooltips: {
        callbacks: {
          title: function (tooltipItem, data) {
            return data["labels"][tooltipItem[0]["index"]];
          },
          label: function (tooltipItem, data) {
            if ([tooltipItem["index"]] == 1) {
              return Object.keys(allModels).length;
            }
            return data["datasets"][0]["data"][tooltipItem["index"]];
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 24,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 20,
        displayColors: false,
      },
      title: {
        display: false,
        text: "PFG Target 1 Value Distribution",
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });

  //PFG6
  var ctxPFG6 = document.getElementById("insights-pfg6").getContext("2d");
  ctxPFG6.canvas.width = 400;
  ctxPFG6.canvas.height = 400;

  pfg6Chart = new Chart(ctxPFG6, {
    type: "doughnut",
    data: {
      labels:
        pfgDistribution("PFGOV6") != 0
          ? [
              "No. of projects \nthat achieve outcome:", // + (pfgAchieved / 42).toFixed(2),
              "Total Number of projects:", // + (pfgNotAchieved / 42).toFixed(2),
            ]
          : ["Total Number of projects:"],
      datasets: [
        {
          label: "PFG1",
          data:
            pfgDistribution("PFGOV6") != 0
              ? [
                  pfgDistribution("PFGOV6"),
                  Object.keys(allModels).length - pfgDistribution("PFGOV6"),
                ]
              : [Object.keys(allModels).length],
          backgroundColor:
            pfgDistribution("PFGOV6") != 0
              ? ["rgb(0, 46, 250)", "rgb(150, 168, 255)"]
              : ["rgb(150, 168, 255)"],
        },
      ],
    },
    options: {
      tooltips: {
        callbacks: {
          title: function (tooltipItem, data) {
            return data["labels"][tooltipItem[0]["index"]];
          },
          label: function (tooltipItem, data) {
            if ([tooltipItem["index"]] == 1) {
              return Object.keys(allModels).length;
            }
            return data["datasets"][0]["data"][tooltipItem["index"]];
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 24,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 20,
        displayColors: false,
      },
      title: {
        display: false,
        text: "PFG Target 1 Value Distribution",
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });

  //PFG7
  var ctxPFG7 = document.getElementById("insights-pfg7").getContext("2d");
  ctxPFG7.canvas.width = 400;
  ctxPFG7.canvas.height = 400;

  pfg7Chart = new Chart(ctxPFG7, {
    type: "doughnut",
    data: {
      labels:
        pfgDistribution("PFGOV7") != 0
          ? [
              "No. of projects \nthat achieve outcome:", // + (pfgAchieved / 42).toFixed(2),
              "Total Number of projects:", // + (pfgNotAchieved / 42).toFixed(2),
            ]
          : ["Total Number of projects:"],
      datasets: [
        {
          label: "PFG1",
          data:
            pfgDistribution("PFGOV7") != 0
              ? [
                  pfgDistribution("PFGOV7"),
                  Object.keys(allModels).length - pfgDistribution("PFGOV7"),
                ]
              : [Object.keys(allModels).length],
          backgroundColor:
            pfgDistribution("PFGOV7") != 0
              ? ["rgb(0, 46, 250)", "rgb(150, 168, 255)"]
              : ["rgb(150, 168, 255)"],
        },
      ],
    },
    options: {
      tooltips: {
        callbacks: {
          title: function (tooltipItem, data) {
            return data["labels"][tooltipItem[0]["index"]];
          },
          label: function (tooltipItem, data) {
            if ([tooltipItem["index"]] == 1) {
              return Object.keys(allModels).length;
            }
            return data["datasets"][0]["data"][tooltipItem["index"]];
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 24,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 20,
        displayColors: false,
      },
      title: {
        display: false,
        text: "PFG Target 1 Value Distribution",
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });

  //PFG8
  var ctxPFG8 = document.getElementById("insights-pfg8").getContext("2d");
  ctxPFG8.canvas.width = 400;
  ctxPFG8.canvas.height = 400;

  pfg8Chart = new Chart(ctxPFG8, {
    type: "doughnut",
    data: {
      labels:
        pfgDistribution("PFGOV8") != 0
          ? [
              "No. of projects \nthat achieve outcome:", // + (pfgAchieved / 42).toFixed(2),
              "Total Number of projects:", // + (pfgNotAchieved / 42).toFixed(2),
            ]
          : ["Total Number of projects:"],
      datasets: [
        {
          label: "PFG1",
          data:
            pfgDistribution("PFGOV8") != 0
              ? [
                  pfgDistribution("PFGOV8"),
                  Object.keys(allModels).length - pfgDistribution("PFGOV8"),
                ]
              : [Object.keys(allModels).length],
          backgroundColor:
            pfgDistribution("PFGOV8") != 0
              ? ["rgb(0, 46, 250)", "rgb(150, 168, 255)"]
              : ["rgb(150, 168, 255)"],
        },
      ],
    },
    options: {
      tooltips: {
        callbacks: {
          title: function (tooltipItem, data) {
            return data["labels"][tooltipItem[0]["index"]];
          },
          label: function (tooltipItem, data) {
            if ([tooltipItem["index"]] == 1) {
              return Object.keys(allModels).length;
            }
            return data["datasets"][0]["data"][tooltipItem["index"]];
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 24,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 20,
        displayColors: false,
      },
      title: {
        display: false,
        text: "PFG Target 1 Value Distribution",
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });
  //PFG9
  var ctxPFG9 = document.getElementById("insights-pfg9").getContext("2d");
  ctxPFG9.canvas.width = 400;
  ctxPFG9.canvas.height = 400;

  pfg9Chart = new Chart(ctxPFG9, {
    type: "doughnut",
    data: {
      labels:
        pfgDistribution("PFGOV9") != 0
          ? [
              "No. of projects \nthat achieve outcome:", // + (pfgAchieved / 42).toFixed(2),
              "Total Number of projects:", // + (pfgNotAchieved / 42).toFixed(2),
            ]
          : ["Total Number of projects:"],
      datasets: [
        {
          label: "PFG1",
          data:
            pfgDistribution("PFGOV9") != 0
              ? [
                  pfgDistribution("PFGOV9"),
                  Object.keys(allModels).length - pfgDistribution("PFGOV9"),
                ]
              : [Object.keys(allModels).length],
          backgroundColor:
            pfgDistribution("PFGOV9") != 0
              ? ["rgb(0, 46, 250)", "rgb(150, 168, 255)"]
              : ["rgb(150, 168, 255)"],
        },
      ],
    },
    options: {
      tooltips: {
        callbacks: {
          title: function (tooltipItem, data) {
            return data["labels"][tooltipItem[0]["index"]];
          },
          label: function (tooltipItem, data) {
            if ([tooltipItem["index"]] == 1) {
              return Object.keys(allModels).length;
            }
            return data["datasets"][0]["data"][tooltipItem["index"]];
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 24,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 20,
        displayColors: false,
      },
      title: {
        display: false,
        text: "PFG Target 1 Value Distribution",
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });

  //PFG10
  var ctxPFG10 = document.getElementById("insights-pfg10").getContext("2d");
  ctxPFG10.canvas.width = 400;
  ctxPFG10.canvas.height = 400;

  pfg10Chart = new Chart(ctxPFG10, {
    type: "doughnut",
    data: {
      labels:
        pfgDistribution("PFGOV10") != 0
          ? [
              "No. of projects \nthat achieve outcome:", // + (pfgAchieved / 42).toFixed(2),
              "Total Number of projects:", // + (pfgNotAchieved / 42).toFixed(2),
            ]
          : ["Total Number of projects:"],
      datasets: [
        {
          label: "PFG1",
          data:
            pfgDistribution("PFGOV10") != 0
              ? [
                  pfgDistribution("PFGOV10"),
                  Object.keys(allModels).length - pfgDistribution("PFGOV10"),
                ]
              : [Object.keys(allModels).length],
          backgroundColor:
            pfgDistribution("PFGOV10") != 0
              ? ["rgb(0, 46, 250)", "rgb(150, 168, 255)"]
              : ["rgb(150, 168, 255)"],
        },
      ],
    },
    options: {
      tooltips: {
        callbacks: {
          title: function (tooltipItem, data) {
            return data["labels"][tooltipItem[0]["index"]];
          },
          label: function (tooltipItem, data) {
            if ([tooltipItem["index"]] == 1) {
              return Object.keys(allModels).length;
            }
            return data["datasets"][0]["data"][tooltipItem["index"]];
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 24,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 20,
        displayColors: false,
      },
      title: {
        display: false,
        text: "PFG Target 1 Value Distribution",
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });

  //PFG11
  var ctxPFG11 = document.getElementById("insights-pfg11").getContext("2d");
  ctxPFG11.canvas.width = 400;
  ctxPFG11.canvas.height = 400;

  pfg11Chart = new Chart(ctxPFG11, {
    type: "doughnut",
    data: {
      labels:
        pfgDistribution("PFGOV11") != 0
          ? [
              "No. of projects \nthat achieve outcome:", // + (pfgAchieved / 42).toFixed(2),
              "Total Number of projects:", // + (pfgNotAchieved / 42).toFixed(2),
            ]
          : ["Total Number of projects:"],
      datasets: [
        {
          label: "PFG1",
          data:
            pfgDistribution("PFGOV11") != 0
              ? [
                  pfgDistribution("PFGOV11"),
                  Object.keys(allModels).length - pfgDistribution("PFGOV11"),
                ]
              : [Object.keys(allModels).length],
          backgroundColor:
            pfgDistribution("PFGOV11") != 0
              ? ["rgb(0, 46, 250)", "rgb(150, 168, 255)"]
              : ["rgb(150, 168, 255)"],
        },
      ],
    },
    options: {
      tooltips: {
        callbacks: {
          title: function (tooltipItem, data) {
            return data["labels"][tooltipItem[0]["index"]];
          },
          label: function (tooltipItem, data) {
            if ([tooltipItem["index"]] == 1) {
              return Object.keys(allModels).length;
            }
            return data["datasets"][0]["data"][tooltipItem["index"]];
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 24,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 20,
        displayColors: false,
      },
      title: {
        display: false,
        text: "PFG Target 1 Value Distribution",
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });
  //PFG12
  var ctxPFG12 = document.getElementById("insights-pfg12").getContext("2d");
  ctxPFG12.canvas.width = 400;
  ctxPFG12.canvas.height = 400;

  pfg12Chart = new Chart(ctxPFG12, {
    type: "doughnut",
    data: {
      labels:
        pfgDistribution("PFGOV12") != 0
          ? [
              "No. of projects \nthat achieve outcome:", // + (pfgAchieved / 42).toFixed(2),
              "Total Number of projects:", // + (pfgNotAchieved / 42).toFixed(2),
            ]
          : ["Total Number of projects:"],
      datasets: [
        {
          label: "PFG1",
          data:
            pfgDistribution("PFGOV12") != 0
              ? [
                  pfgDistribution("PFGOV12"),
                  Object.keys(allModels).length - pfgDistribution("PFGOV12"),
                ]
              : [Object.keys(allModels).length],
          backgroundColor:
            pfgDistribution("PFGOV12") != 0
              ? ["rgb(0, 46, 250)", "rgb(150, 168, 255)"]
              : ["rgb(150, 168, 255)"],
        },
      ],
    },
    options: {
      tooltips: {
        callbacks: {
          title: function (tooltipItem, data) {
            return data["labels"][tooltipItem[0]["index"]];
          },
          label: function (tooltipItem, data) {
            if ([tooltipItem["index"]] == 1) {
              return Object.keys(allModels).length;
            }
            return data["datasets"][0]["data"][tooltipItem["index"]];
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 24,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 20,
        displayColors: false,
      },
      title: {
        display: false,
        text: "PFG Target 1 Value Distribution",
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });

  //PFG13
  var ctxPFG13 = document.getElementById("insights-pfg13").getContext("2d");
  ctxPFG13.canvas.width = 400;
  ctxPFG13.canvas.height = 400;

  pfg13Chart = new Chart(ctxPFG13, {
    type: "doughnut",
    data: {
      labels:
        pfgDistribution("PFGOV13") != 0
          ? [
              "No. of projects \nthat achieve outcome:", // + (pfgAchieved / 42).toFixed(2),
              "Total Number of projects:", // + (pfgNotAchieved / 42).toFixed(2),
            ]
          : ["Total Number of projects:"],
      datasets: [
        {
          label: "PFG1",
          data:
            pfgDistribution("PFGOV13") != 0
              ? [
                  pfgDistribution("PFGOV13"),
                  Object.keys(allModels).length - pfgDistribution("PFGOV13"),
                ]
              : [Object.keys(allModels).length],
          backgroundColor:
            pfgDistribution("PFGOV13") != 0
              ? ["rgb(0, 46, 250)", "rgb(150, 168, 255)"]
              : ["rgb(150, 168, 255)"],
        },
      ],
    },
    options: {
      tooltips: {
        callbacks: {
          title: function (tooltipItem, data) {
            return data["labels"][tooltipItem[0]["index"]];
          },
          label: function (tooltipItem, data) {
            if ([tooltipItem["index"]] == 1) {
              return Object.keys(allModels).length;
            }
            return data["datasets"][0]["data"][tooltipItem["index"]];
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 24,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 20,
        displayColors: false,
      },
      title: {
        display: false,
        text: "PFG Target 1 Value Distribution",
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });
  //PFG14
  var ctxPFG14 = document.getElementById("insights-pfg14").getContext("2d");
  ctxPFG14.canvas.width = 400;
  ctxPFG14.canvas.height = 400;

  pfg14Chart = new Chart(ctxPFG14, {
    type: "doughnut",
    data: {
      labels:
        pfgDistribution("PFGOV14") != 0
          ? [
              "No. of projects \nthat achieve outcome:", // + (pfgAchieved / 42).toFixed(2),
              "Total Number of projects:", // + (pfgNotAchieved / 42).toFixed(2),
            ]
          : ["Total Number of projects:"],
      datasets: [
        {
          label: "PFG1",
          data:
            pfgDistribution("PFGOV14") != 0
              ? [
                  pfgDistribution("PFGOV14"),
                  Object.keys(allModels).length - pfgDistribution("PFGOV14"),
                ]
              : [Object.keys(allModels).length],
          backgroundColor:
            pfgDistribution("PFGOV14") != 0
              ? ["rgb(0, 46, 250)", "rgb(150, 168, 255)"]
              : ["rgb(150, 168, 255)"],
        },
      ],
    },
    options: {
      tooltips: {
        callbacks: {
          title: function (tooltipItem, data) {
            return data["labels"][tooltipItem[0]["index"]];
          },
          label: function (tooltipItem, data) {
            if ([tooltipItem["index"]] == 1) {
              return Object.keys(allModels).length;
            }
            return data["datasets"][0]["data"][tooltipItem["index"]];
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 24,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 20,
        displayColors: false,
      },
      title: {
        display: false,
        text: "PFG Target 1 Value Distribution",
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });
}

function showSVG() {
  var x = document.getElementById("center-svg"),
    y = document.getElementById("download-svg"),
    z = document.getElementById("download-png"),
    c = document.getElementById("insights-pfgAchieved"),
    c2 = document.getElementById("insights-overall");
  //var toShow = document.getElementsByClassName("svg-bg");
  x.style.display = "block";
  y.style.display = "block";
  z.style.display = "block";
  // toShow.style.display = "block";
  (c.style.display = "none"), (c2.style.display = "none");
}

function groupNos(obj) {
  var arr = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(obj[key]);
    }
  }
  return arr;
}

function groupNames(obj) {
  var arr = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(key);
    }
  }
  return arr;
}

function pfgDistribution(pfg) {
  // //console.log(allModels);
  var pfgNumber = 0,
    pfgDistribution;
  for (var key in allModels) {
    for (let node of allModels[key].nodes) {
      if (node.id == pfg) {
        pfgNumber++;
      }
    }
  }
  ////console.log(allModels);
  return pfgNumber;
  //console.log("allmodels", allModels);
  //console.log(pfg, pfgNumber);
  pfgDistribution =
    allProjectsValue / (pfgNumber * countProperties(allModels) * 14) != Infinity
      ? allProjectsValue / (pfgNumber * countProperties(allModels) * 14)
      : 0;

  return pfgDistribution.toFixed(2);
}

function pfgsPerImplementation() {
  var indices, indicesIndicators;
  var indicators = [],
    indicatorsIndicators = [];

  for (let arr of allImplementationData) {
    for (var i = 0; i < arr.length; i++) {
      indices = getIndicesOf("PFGOV", arr[i].indicator);
      indicesIndicators = getIndicesOf("PFGVI", arr[i].indicator);
      for (let no of indices) {
        indicators.push(arr[i].indicator.substring(no, no + 7).trim());
      }
      for (let no of indicesIndicators) {
        indicatorsIndicators.push(
          arr[i].indicator.substring(no, no + 7).trim()
        );
      }
    }
  }

  for (var i = 0; i < countOccurences(indicators)[0].length; i++) {
    noOfOutcomes[
      parseInt(countOccurences(indicators)[0][i].replace(/^\D+/g, "")) - 1
    ] = countOccurences(indicators)[1][i];
  }

  for (var i = 0; i < 42; i++) {
    noOfIndicators[i] = 0;
  }

  for (var i = 0; i < countOccurences(indicatorsIndicators)[0].length; i++) {
    noOfIndicators[
      parseInt(
        countOccurences(indicatorsIndicators)[0][i].replace(/^\D+/g, "")
      ) - 1
    ] = countOccurences(indicatorsIndicators)[1][i];
  }

  //outcomeToIndicator(noOfOutcomes, noOfIndicators);
  //console.log(noOfIndicators);
}

function outcomeToIndicator(oArr, iArr) {
  iArr[0] += oArr[2] + oArr[6] + oArr[8] + oArr[11];
  iArr[1] += oArr[2] + oArr[3] + oArr[7] + oArr[13];
  iArr[2] += oArr[1] + oArr[3] + oArr[7] + oArr[13];
  iArr[3] += oArr[2] + oArr[3] + oArr[7];
  iArr[4] += oArr[3] + oArr[7] + oArr[10];
  iArr[5] += oArr[3] + oArr[5] + oArr[7] + oArr[13];
  iArr[6] += oArr[3] + oArr[7] + oArr[13];
  iArr[7] += oArr[3] + oArr[7] + oArr[10] + oArr[11] + oArr[12] + oArr[13];
  iArr[8] += oArr[3] + oArr[7] + oArr[10] + oArr[13];
  iArr[9] += oArr[2] + oArr[4] + oArr[5] + oArr[7] + oArr[13];
  iArr[10] += oArr[0] + oArr[4] + oArr[5] + oArr[13];
  iArr[11] += oArr[2] + oArr[4] + oArr[5] + oArr[7] + oArr[13];
  iArr[12] += oArr[4] + oArr[5] + oArr[10] + oArr[13];
  iArr[13] += oArr[0] + oArr[4] + oArr[5] + oArr[11];
  iArr[14] += oArr[3] + oArr[4] + oArr[7] + oArr[13];
  iArr[15] += oArr[0] + oArr[5] + oArr[7] + oArr[11];
  iArr[16] += oArr[0] + oArr[5] + oArr[7] + oArr[11];
  iArr[17] += oArr[0] + oArr[4] + oArr[5] + oArr[7] + oArr[11];
  iArr[18] +=
    oArr[0] +
    oArr[2] +
    oArr[3] +
    oArr[4] +
    oArr[5] +
    oArr[7] +
    oArr[12] +
    oArr[12];
  iArr[19] += oArr[0] + oArr[5] + oArr[11];
  iArr[20] += oArr[0] + oArr[4] + oArr[5] + oArr[11];
  iArr[21] += oArr[0] + oArr[1] + oArr[4] + oArr[5] + oArr[11];
  iArr[22] +=
    oArr[0] +
    oArr[1] +
    oArr[4] +
    oArr[5] +
    oArr[9] +
    oArr[10] +
    oArr[11] +
    oArr[12];
  iArr[23] += oArr[0] + oArr[4] + oArr[5] + oArr[11] + oArr[12];
  iArr[24] += oArr[1] + oArr[3] + oArr[6] + oArr[10] + oArr[11] + oArr[12];
  iArr[25] += oArr[2] + oArr[6] + oArr[7] + oArr[8] + oArr[11];
  iArr[26] += oArr[4] + oArr[8] + oArr[13];
  iArr[27] +=
    oArr[0] +
    oArr[3] +
    oArr[4] +
    oArr[5] +
    oArr[6] +
    oArr[7] +
    oArr[9] +
    oArr[13];
  iArr[28] += oArr[1];
  iArr[29] += oArr[0] + oArr[1] + oArr[4] + oArr[9] + oArr[11] + oArr[12];
  iArr[30] +=
    oArr[2] + oArr[6] + oArr[8] + oArr[9] + oArr[11] + oArr[12] + oArr[13];
  iArr[31] += oArr[0] + oArr[2] + oArr[4] + oArr[7] + oArr[11] + oArr[13];
  iArr[32] += oArr[0] + oArr[5] + oArr[7] + oArr[12];
  iArr[33] += oArr[0] + oArr[2] + oArr[4] + oArr[5] + oArr[11] + oArr[12];
  iArr[34] += oArr[2] + oArr[3] + oArr[6] + oArr[9] + oArr[11] + oArr[13];
  iArr[35] += oArr[1] + oArr[10] + oArr[12];
  iArr[36] += oArr[1] + oArr[3];
  iArr[37] += oArr[6] + oArr[10];
  iArr[38] += oArr[10] + oArr[13];
  iArr[39] +=
    oArr[0] +
    oArr[1] +
    oArr[2] +
    oArr[4] +
    oArr[5] +
    oArr[6] +
    oArr[8] +
    oArr[9] +
    oArr[11];
  iArr[40] += oArr[4] + oArr[5] + oArr[13];
  iArr[41] +=
    oArr[2] +
    oArr[4] +
    oArr[7] +
    oArr[8] +
    oArr[10] +
    oArr[11] +
    oArr[12] +
    oArr[13];
}

function countOccurences(arr) {
  var a = [],
    b = [],
    prev;

  arr.sort();
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) {
      a.push(arr[i]);
      b.push(1);
    } else {
      b[b.length - 1]++;
    }
    prev = arr[i];
  }

  return [a, b];
}

function filterLocation(location) {
  Object.keys(tempProjObj).forEach((key) => {
    if (tempProjObj[key] != location) delete tempProjObj[key];
  });

  tempProArr = Object.keys(tempProjObj);
  for (var i = 0; i < tempProArr.length; i++) {
    locationImplementationData[i] = implementationObject[tempProArr[i]];
  }

  pfgsPerImplementationLocation();
}

function pfgsPerImplementationLocation() {
  var indices, indicesIndicators;
  var indicators = [],
    indicatorsIndicators = [];

  for (let arr of locationImplementationData) {
    for (var i = 0; i < arr.length; i++) {
      indices = getIndicesOf("PFGOV", arr[i].indicator);
      indicesIndicators = getIndicesOf("PFGVI", arr[i].indicator);
      for (let no of indices) {
        indicators.push(arr[i].indicator.substring(no, no + 7).trim());
      }
      for (let no of indicesIndicators) {
        indicatorsIndicators.push(
          arr[i].indicator.substring(no, no + 7).trim()
        );
      }
    }
  }

  for (var i = 0; i < countOccurences(indicators)[0].length; i++) {
    noOfOutcomesLocation[
      parseInt(countOccurences(indicators)[0][i].replace(/^\D+/g, "")) - 1
    ] = countOccurences(indicators)[1][i];
  }

  for (var i = 0; i < countOccurences(indicatorsIndicators)[0].length; i++) {
    noOfIndicatorsLocation[
      parseInt(
        countOccurences(indicatorsIndicators)[0][i].replace(/^\D+/g, "")
      ) - 1
    ] = countOccurences(indicatorsIndicators)[1][i];
  }
}

//getKeyByValue
function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

function deleteByValue(val, obj) {
  for (var o in obj) {
    if (obj.hasOwnProperty(o) && obj[o] == val) {
      delete obj[o];
    }
  }
}
