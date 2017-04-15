$(document).ready(function() {
  var url = "http://192.168.250.22:8888/examzee/json.php";
  $.getJSON(url, function(result) {
    console.log(result);
    $.each(result, function(i, field) {
        var id = field.id;
        var role_id = field.role_id;
        var full_name = field.full_name;
        var username = field.username;
        $("#listview").append("name" + full_name);
    });
  });
});
