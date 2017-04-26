$(document).ready(function() {
  // var url = "http://192.168.250.47:8888/examzee/sections.php";
  // var url = "http://192.168.250.47:8888/examzee/sections.php";
  var url = "http://192.168.1.7:8888/examzee/sections.php";
  $.getJSON(url, function(result) {
    $.each(result, function(i, section) {
        var id = section.id;
        var name = section.name;
        // $('.table-sections > tbody').append( "<tr><td>" + name + "</td><td><a href='../students/section.html?id=" + id + "'><i class='fa fa-search'></i></a></td></tr>" );
        $('.table-sections > tbody').append( "<tr><td>" + name + "</td><td><button class='btn btn-default btn-xs' onClick='section_view(this.id)' id=" + id + ">view</button></td></tr>" );
    });
  });
});

function section_view(section_id){
  $.ajax({
    type: "POST",
    // url: "http://192.168.250.47:8888/examzee/section.php",
    // url: "http://192.168.250.47:8888/examzee/section.php",
    url: "http://192.168.1.7:8888/examzee/section.php",
    data: {
      id: section_id
    },
    crossDomain: true,
    cache: false,
    success: function(data) {
      window.location.href = "../students/section.html?id=" + section_id + "&name=" + data + "";
    }
  });
};
