let sortDirection = false;

function loadTableData(tableData) {
  const tablebody = document.getElementById("tableData");
  let dataHtml = "";

  for (let row of tableData) {
    dataHtml += `<tr><td>${row.policyIndicator}</td><td>${row.action}</td><td>${row.measurable}</td><td>${row.keyPartners}</td></tr>`;
  }

  tablebody.innerHTML = dataHtml;
}

function sortNumberColumn(sort, columnName) {
  tableData = tableData.sort((a, b) => {
    return sort ? a[columnName] - b[columnName] : b[columnName] - a[columnName];
  });
}

function sortColumn(columnName) {
  const dataType = typeof tableData[0][columnName];
  sortDirection = !sortDirection;

  switch (dataType) {
    case "number":
      sortNumberColumn(sortDirection, columnName);
      break;
  }

  loadTableData(tableData);
}
