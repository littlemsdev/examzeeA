$(document).ready(function() {
  var name = decodeURI(getUrlVars()["name"]);
  var id = decodeURI(getUrlVars()["id"]);
  $('#section-name').append(name);


  var url = 'https://examzee-api.herokuapp.com/api/v1/students?id='+ id;
  $.getJSON(url, function(result) {
    $.each(result, function(i, student) {
        var id = student.id;
        var student_number= student.student_number;
        var first_name = student.first_name;
        var middle_initial = student.middle_initial;
        var last_name = student.last_name;
        var full_name = student.full_name;
        $('.table-students > tbody').append( "<tr><td>" + student_number + "</td><td>" + first_name + "</td><td>" + middle_initial + "</td><td>" + last_name + "</td><td><a href='../students/student.html?id=" + student_number + "&full_name=" + full_name +"' class='btn btn-default btn-xs'>view</a></td></tr>" );
    });
  });

});
