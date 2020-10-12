function hideSVG() {
  console.log(allModels);
  var pfgAchieved = countGroupsArray(modelData.nodes)[
      "Programme for Government Indicators"
    ],
    pfgNotAchieved = 42 - pfgAchieved,
    allGroupsNos = groupNos(countGroupsArray(modelData.nodes)),
    allGroupsNames = groupNames(countGroupsArray(modelData.nodes));

  console.log(allGroupsNos);
  console.log(allGroupsNames);
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
  /* var overall = new Chart(ctxOverall, {
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
    options: {
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
          /*afterLabel: function (tooltipItem, data) {
            var dataset = data["datasets"][0];
            var percent = Math.round(
              (dataset["data"][tooltipItem["index"]] /
                dataset["_meta"][0]["total"]) *
                100
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
        text: "Strategy Breakdown",
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });*/

  var ctxPFG1 = document.getElementById("insights-pfg1").getContext("2d");
  ctxPFG1.canvas.width = 400;
  ctxPFG1.canvas.height = 400;

  var pfg1Chart = new Chart(ctxPFG1, {
    type: "doughnut",
    data: {
      labels:
        pfgDistribution("PFGOV1") != 0
          ? [
              "Amount Distributed (£)", // + (pfgAchieved / 42).toFixed(2),
              "Total Value of All Projects (£)", // + (pfgNotAchieved / 42).toFixed(2),
            ]
          : ["Total Value of All Projects (£)"],
      datasets: [
        {
          label: "PFG1",
          data:
            pfgDistribution("PFGOV1") != 0
              ? [pfgDistribution("PFGOV1"), allProjectsValue]
              : [allProjectsValue],
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
            return (
              data["datasets"][0]["data"][tooltipItem["index"]] +
              "/" +
              allProjectsValue
            );
          },
          afterLabel: function (tooltipItem, data) {
            var dataset = data["datasets"][0];
            var percent = Math.round(
              (dataset["data"][tooltipItem["index"]] / allProjectsValue) * 100
            );
            return "(" + percent + "%)";
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 16,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 12,
        displayColors: false,
      },
      title: {
        display: true,
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

  var pfg2Chart = new Chart(ctxPFG2, {
    type: "doughnut",
    data: {
      labels: [
        "Amount Distributed (£)", // + (pfgAchieved / 42).toFixed(2),
        "Total Value of All Projects (£)", // + (pfgNotAchieved / 42).toFixed(2),
      ],
      datasets: [
        {
          label: "PFG2",
          data: [pfgDistribution("PFGOV2"), allProjectsValue],
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
            return (
              data["datasets"][0]["data"][tooltipItem["index"]] +
              "/" +
              allProjectsValue
            );
          },
          afterLabel: function (tooltipItem, data) {
            var dataset = data["datasets"][0];
            var percent = Math.round(
              (dataset["data"][tooltipItem["index"]] / allProjectsValue) * 100
            );
            return "(" + percent + "%)";
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 16,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 12,
        displayColors: false,
      },
      title: {
        display: true,
        text: "PFG Target 2 Value Distribution",
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

  var pfg1Chart = new Chart(ctxPFG3, {
    type: "doughnut",
    data: {
      labels: [
        "Amount Distributed (£)", // + (pfgAchieved / 42).toFixed(2),
        "Total Value of All Projects (£)", // + (pfgNotAchieved / 42).toFixed(2),
      ],
      datasets: [
        {
          label: "PFG3",
          data: [pfgDistribution("PFGOV3"), allProjectsValue],
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
            return (
              data["datasets"][0]["data"][tooltipItem["index"]] +
              "/" +
              allProjectsValue
            );
          },
          afterLabel: function (tooltipItem, data) {
            var dataset = data["datasets"][0];
            var percent = Math.round(
              (dataset["data"][tooltipItem["index"]] / allProjectsValue) * 100
            );
            return "(" + percent + "%)";
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 16,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 12,
        displayColors: false,
      },
      title: {
        display: true,
        text: "PFG Target 3 Value Distribution",
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

  var pfg4Chart = new Chart(ctxPFG4, {
    type: "doughnut",
    data: {
      labels: [
        "Amount Distributed (£)", // + (pfgAchieved / 42).toFixed(2),
        "Total Value of All Projects (£)", // + (pfgNotAchieved / 42).toFixed(2),
      ],
      datasets: [
        {
          label: "PFG4",
          data: [pfgDistribution("PFGOV4"), allProjectsValue],
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
            return (
              data["datasets"][0]["data"][tooltipItem["index"]] +
              "/" +
              allProjectsValue
            );
          },
          afterLabel: function (tooltipItem, data) {
            var dataset = data["datasets"][0];
            var percent = Math.round(
              (dataset["data"][tooltipItem["index"]] / allProjectsValue) * 100
            );
            return "(" + percent + "%)";
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 16,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 12,
        displayColors: false,
      },
      title: {
        display: true,
        text: "PFG Target 4 Value Distribution",
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

  var pfg5Chart = new Chart(ctxPFG5, {
    type: "doughnut",
    data: {
      labels: [
        "Amount Distributed (£)", // + (pfgAchieved / 42).toFixed(2),
        "Total Value of All Projects (£)", // + (pfgNotAchieved / 42).toFixed(2),
      ],
      datasets: [
        {
          label: "PFG5",
          data: [pfgDistribution("PFGOV5"), allProjectsValue],
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
            return (
              data["datasets"][0]["data"][tooltipItem["index"]] +
              "/" +
              allProjectsValue
            );
          },
          afterLabel: function (tooltipItem, data) {
            var dataset = data["datasets"][0];
            var percent = Math.round(
              (dataset["data"][tooltipItem["index"]] / allProjectsValue) * 100
            );
            return "(" + percent + "%)";
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 16,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 12,
        displayColors: false,
      },
      title: {
        display: true,
        text: "PFG Target 5 Value Distribution",
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });

  //PFG6
  var ctxPFG6 = document.getElementById("insights-pfg6").getContext("2d");
  ctxPFG6.canvas.width = 400;
  ctxPFG6.canvas.height = 400;

  var pfg6Chart = new Chart(ctxPFG6, {
    type: "doughnut",
    data: {
      labels:
        pfgDistribution("PFGOV6") != 0
          ? [
              "Amount Distributed (£)", // + (pfgAchieved / 42).toFixed(2),
              "Total Value of All Projects (£)", // + (pfgNotAchieved / 42).toFixed(2),
            ]
          : ["Total Value of All Projects (£)"],
      datasets: [
        {
          label: "PFG6",
          data:
            pfgDistribution("PFGOV6") != 0
              ? [pfgDistribution("PFGOV6"), allProjectsValue]
              : [allProjectsValue],
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
            return (
              data["datasets"][0]["data"][tooltipItem["index"]] +
              "/" +
              allProjectsValue
            );
          },
          afterLabel: function (tooltipItem, data) {
            var dataset = data["datasets"][0];
            var percent = Math.round(
              (dataset["data"][tooltipItem["index"]] / allProjectsValue) * 100
            );
            return "(" + percent + "%)";
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 16,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 12,
        displayColors: false,
      },
      title: {
        display: true,
        text: "PFG Target 6 Value Distribution",
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });

  //PFG7
  var ctxPFG7 = document.getElementById("insights-pfg7").getContext("2d");
  ctxPFG7.canvas.width = 400;
  ctxPFG7.canvas.height = 400;

  var pfg7Chart = new Chart(ctxPFG7, {
    type: "doughnut",
    data: {
      labels:
        pfgDistribution("PFGOV7") != 0
          ? [
              "Amount Distributed (£)", // + (pfgAchieved / 42).toFixed(2),
              "Total Value of All Projects (£)", // + (pfgNotAchieved / 42).toFixed(2),
            ]
          : ["Total Value of All Projects (£)"],
      datasets: [
        {
          label: "PFG7",
          data:
            pfgDistribution("PFGOV7") != 0
              ? [pfgDistribution("PFGOV7"), allProjectsValue]
              : [allProjectsValue],
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
            return (
              data["datasets"][0]["data"][tooltipItem["index"]] +
              "/" +
              allProjectsValue
            );
          },
          afterLabel: function (tooltipItem, data) {
            var dataset = data["datasets"][0];
            var percent = Math.round(
              (dataset["data"][tooltipItem["index"]] / allProjectsValue) * 100
            );
            return "(" + percent + "%)";
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 16,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 12,
        displayColors: false,
      },
      title: {
        display: true,
        text: "PFG Target 7 Value Distribution",
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });

  //PFG8
  var ctxPFG8 = document.getElementById("insights-pfg8").getContext("2d");
  ctxPFG8.canvas.width = 400;
  ctxPFG8.canvas.height = 400;

  var pfg1Chart = new Chart(ctxPFG8, {
    type: "doughnut",
    data: {
      labels:
        pfgDistribution("PFGOV8") != 0
          ? [
              "Amount Distributed (£)", // + (pfgAchieved / 42).toFixed(2),
              "Total Value of All Projects (£)", // + (pfgNotAchieved / 42).toFixed(2),
            ]
          : ["Total Value of All Projects (£)"],
      datasets: [
        {
          label: "PFG8",
          data:
            pfgDistribution("PFGOV8") != 0
              ? [pfgDistribution("PFGOV8"), allProjectsValue]
              : [allProjectsValue],
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
            return (
              data["datasets"][0]["data"][tooltipItem["index"]] +
              "/" +
              allProjectsValue
            );
          },
          afterLabel: function (tooltipItem, data) {
            var dataset = data["datasets"][0];
            var percent = Math.round(
              (dataset["data"][tooltipItem["index"]] / allProjectsValue) * 100
            );
            return "(" + percent + "%)";
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 16,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 12,
        displayColors: false,
      },
      title: {
        display: true,
        text: "PFG Target 8 Value Distribution",
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });
  //PFG9
  var ctxPFG9 = document.getElementById("insights-pfg9").getContext("2d");
  ctxPFG9.canvas.width = 400;
  ctxPFG9.canvas.height = 400;

  var pfg9Chart = new Chart(ctxPFG9, {
    type: "doughnut",
    data: {
      labels:
        pfgDistribution("PFGOV9") != 0
          ? [
              "Amount Distributed (£)", // + (pfgAchieved / 42).toFixed(2),
              "Total Value of All Projects (£)", // + (pfgNotAchieved / 42).toFixed(2),
            ]
          : ["Total Value of All Projects (£)"],
      datasets: [
        {
          label: "PFG9",
          data:
            pfgDistribution("PFGOV9") != 0
              ? [pfgDistribution("PFGOV9"), allProjectsValue]
              : [allProjectsValue],
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
            return (
              data["datasets"][0]["data"][tooltipItem["index"]] +
              "/" +
              allProjectsValue
            );
          },
          afterLabel: function (tooltipItem, data) {
            var dataset = data["datasets"][0];
            var percent = Math.round(
              (dataset["data"][tooltipItem["index"]] / allProjectsValue) * 100
            );
            return "(" + percent + "%)";
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 16,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 12,
        displayColors: false,
      },
      title: {
        display: true,
        text: "PFG Target 9 Value Distribution",
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });

  //PFG10
  var ctxPFG10 = document.getElementById("insights-pfg10").getContext("2d");
  ctxPFG10.canvas.width = 400;
  ctxPFG10.canvas.height = 400;

  var pfg10Chart = new Chart(ctxPFG10, {
    type: "doughnut",
    data: {
      labels:
        pfgDistribution("PFGOV10") != 0
          ? [
              "Amount Distributed (£)", // + (pfgAchieved / 42).toFixed(2),
              "Total Value of All Projects (£)", // + (pfgNotAchieved / 42).toFixed(2),
            ]
          : ["Total Value of All Projects (£)"],
      datasets: [
        {
          label: "PFG10",
          data:
            pfgDistribution("PFGOV10") != 0
              ? [pfgDistribution("PFGOV10"), allProjectsValue]
              : [allProjectsValue],
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
            return (
              data["datasets"][0]["data"][tooltipItem["index"]] +
              "/" +
              allProjectsValue
            );
          },
          afterLabel: function (tooltipItem, data) {
            var dataset = data["datasets"][0];
            var percent = Math.round(
              (dataset["data"][tooltipItem["index"]] / allProjectsValue) * 100
            );
            return "(" + percent + "%)";
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 16,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 12,
        displayColors: false,
      },
      title: {
        display: true,
        text: "PFG Target 10 Value Distribution",
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });

  //PFG11
  var ctxPFG11 = document.getElementById("insights-pfg11").getContext("2d");
  ctxPFG11.canvas.width = 400;
  ctxPFG11.canvas.height = 400;

  var pfg11Chart = new Chart(ctxPFG11, {
    type: "doughnut",
    data: {
      labels:
        pfgDistribution("PFGOV11") != 0
          ? [
              "Amount Distributed (£)", // + (pfgAchieved / 42).toFixed(2),
              "Total Value of All Projects (£)", // + (pfgNotAchieved / 42).toFixed(2),
            ]
          : ["Total Value of All Projects (£)"],
      datasets: [
        {
          label: "PFG11",
          data:
            pfgDistribution("PFGOV11") != 0
              ? [pfgDistribution("PFGOV11"), allProjectsValue]
              : [allProjectsValue],
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
            return (
              data["datasets"][0]["data"][tooltipItem["index"]] +
              "/" +
              allProjectsValue
            );
          },
          afterLabel: function (tooltipItem, data) {
            var dataset = data["datasets"][0];
            var percent = Math.round(
              (dataset["data"][tooltipItem["index"]] / allProjectsValue) * 100
            );
            return "(" + percent + "%)";
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 16,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 12,
        displayColors: false,
      },
      title: {
        display: true,
        text: "PFG Target 11 Value Distribution",
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });
  //PFG12
  var ctxPFG12 = document.getElementById("insights-pfg12").getContext("2d");
  ctxPFG12.canvas.width = 400;
  ctxPFG12.canvas.height = 400;

  var pfg12Chart = new Chart(ctxPFG12, {
    type: "doughnut",
    data: {
      labels:
        pfgDistribution("PFGOV12") != 0
          ? [
              "Amount Distributed (£)", // + (pfgAchieved / 42).toFixed(2),
              "Total Value of All Projects (£)", // + (pfgNotAchieved / 42).toFixed(2),
            ]
          : ["Total Value of All Projects (£)"],
      datasets: [
        {
          label: "PFG12",
          data:
            pfgDistribution("PFGOV12") != 0
              ? [pfgDistribution("PFGOV12"), allProjectsValue]
              : [allProjectsValue],
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
            return (
              data["datasets"][0]["data"][tooltipItem["index"]] +
              "/" +
              allProjectsValue
            );
          },
          afterLabel: function (tooltipItem, data) {
            var dataset = data["datasets"][0];
            var percent = Math.round(
              (dataset["data"][tooltipItem["index"]] / allProjectsValue) * 100
            );
            return "(" + percent + "%)";
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 16,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 12,
        displayColors: false,
      },
      title: {
        display: true,
        text: "PFG Target 12 Value Distribution",
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });

  //PFG13
  var ctxPFG13 = document.getElementById("insights-pfg13").getContext("2d");
  ctxPFG13.canvas.width = 400;
  ctxPFG13.canvas.height = 400;

  var pfg13Chart = new Chart(ctxPFG13, {
    type: "doughnut",
    data: {
      labels:
        pfgDistribution("PFGOV13") != 0
          ? [
              "Amount Distributed (£)", // + (pfgAchieved / 42).toFixed(2),
              "Total Value of All Projects (£)", // + (pfgNotAchieved / 42).toFixed(2),
            ]
          : ["Total Value of All Projects (£)"],
      datasets: [
        {
          label: "PFG13",
          data:
            pfgDistribution("PFGOV13") != 0
              ? [pfgDistribution("PFGOV13"), allProjectsValue]
              : [allProjectsValue],
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
            return (
              data["datasets"][0]["data"][tooltipItem["index"]] +
              "/" +
              allProjectsValue
            );
          },
          afterLabel: function (tooltipItem, data) {
            var dataset = data["datasets"][0];
            var percent = Math.round(
              (dataset["data"][tooltipItem["index"]] / allProjectsValue) * 100
            );
            return "(" + percent + "%)";
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 16,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 12,
        displayColors: false,
      },
      title: {
        display: true,
        text: "PFG Target 13 Value Distribution",
      },
      responsive: false,
      maintainAspectRatio: false,
    },
  });
  //PFG14
  var ctxPFG14 = document.getElementById("insights-pfg14").getContext("2d");
  ctxPFG14.canvas.width = 400;
  ctxPFG14.canvas.height = 400;

  var pfg14Chart = new Chart(ctxPFG14, {
    type: "doughnut",
    data: {
      labels:
        pfgDistribution("PFGOV14") != 0
          ? [
              "Amount Distributed (£)", // + (pfgAchieved / 42).toFixed(2),
              "Total Value of All Projects (£)", // + (pfgNotAchieved / 42).toFixed(2),
            ]
          : ["Total Value of All Projects (£)"],
      datasets: [
        {
          label: "PFG14",
          data:
            pfgDistribution("PFGOV14") != 0
              ? [pfgDistribution("PFGOV14"), allProjectsValue]
              : [allProjectsValue],
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
            return (
              data["datasets"][0]["data"][tooltipItem["index"]] +
              "/" +
              allProjectsValue
            );
          },
          afterLabel: function (tooltipItem, data) {
            var dataset = data["datasets"][0];
            var percent = Math.round(
              (dataset["data"][tooltipItem["index"]] / allProjectsValue) * 100
            );
            return "(" + percent + "%)";
          },
        },
        backgroundColor: "#FFF",
        titleFontSize: 16,
        titleFontColor: "#0066ff",
        bodyFontColor: "#000",
        bodyFontSize: 12,
        displayColors: false,
      },
      title: {
        display: true,
        text: "PFG Target 14 Value Distribution",
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
  console.log(allModels);
  var pfgNumber = 0,
    pfgDistribution;
  for (var key in allModels) {
    for (let node of allModels[key].nodes) {
      if (node.id == pfg) {
        pfgNumber++;
      }
    }
  }
  console.log("pgfnumber", pfgNumber);
  pfgDistribution =
    allProjectsValue / (pfgNumber * countProperties(allModels) * 14) != Infinity
      ? allProjectsValue / (pfgNumber * countProperties(allModels) * 14)
      : 0;

  return pfgDistribution.toFixed(2);
}
