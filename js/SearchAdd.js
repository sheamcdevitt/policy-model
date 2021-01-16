$(document).ready(function () {
  $.ajaxSetup({
    cache: false,
  });
  $("#searchModal").on("keyup", function () {
    $("#resultModal").html("");
    $("#state").val("");
    var searchField = $("#searchModal").val();
    var expression = new RegExp(searchField, "i");
    //$.getJSON("json/Data.json", function (data) {
    $.each(data.nodes, function (key, value) {
      if (
        value.id.search(expression) != -1 ||
        value.description.search(expression) != -1 ||
        value.group.search(expression) != -1
      ) {
        var no = value.id.match(/([a-z]*)([\w.]+)/i);
        $("#resultModal").append(
          '<li class="list-group-item link-class resultModal-li">' +
            value.group +
            " " +
            no[2] +
            ' | <span class="text-muted">' +
            value.description +
            '<style = "visibility:hidden;"> | *' +
            value.id +
            "  "
        );
      }

      $("#resultModal").on("click", function (e) {
        e.stopPropagation();
      });

      $(document).on("click", function (e) {
        $("#resultModal").empty();
      });
    });

    $("#resultModal").on("click", "li", function () {
      $(this).removeClass("link-class");
      $(this).addClass("clicked-background");
      var click_text = $(this).text().split("*");
      $("#searchModal").val($.trim(click_text[1]));
      var clickedId = $("#searchModal").val();

      //Loop through nodes.json and return the node based on whats been selected
      //? Better way to do this? Works but seems lazy way of doing it
      for (var i = 0; i < data.nodes.length; i++) {
        if (
          data.nodes[i]["id"] == clickedId &&
          !passAdd.nodes.some((item) => item.id === clickedId)
        ) {
          passAdd.nodes.push(data.nodes[i]);
        }
      }
      console.log(passAdd);
    });
    //   });
  });
});
