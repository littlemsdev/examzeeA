$(document).ready(function() {
  var url = "https://examzee-api.herokuapp.com/api/v1/sections";
  $.getJSON(url, function(result) {
    $.each(result, function(i, section) {
        var id = section.id;
        var name = section.name;
        var sy = section.school_year;
        $('.table-sections > tbody').append( "<tr><td>" + name + "</td><td>" + sy + "</td><td><a href='../students/section.html?id=" + id + "&name=" + name +"' class='btn btn-default btn-xs'>view</a></td></tr>" );
    });
  });
});
