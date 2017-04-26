$(document).ready(function() {
  var student_number = decodeURI(getUrlVars()["id"]);
  var name = decodeURI(getUrlVars()["full_name"]);
  $('#student-name').append(name);

  var url = 'https://examzee-api.herokuapp.com/api/v1/student_grades?id='+ student_number;
  console.log(url);
  $.getJSON(url, function(result) {
    $.each(result, function(i, grade) {
        var id = grade.id;
        var exam_name = grade.exam_name
        var student_number = grade.student_number
        var status = grade.status_grade
        var score = grade.score

        if (grade.status == 3) {
          $('.table-grades > tbody').append( "<tr><td>" + exam_name + "</td><td>NA</td><td><button class='btn btn-xs btn-warning' onClick='checkExam();'>process</button></td></tr>" );
        } else {
          $('.table-grades > tbody').append( "<tr><td>" + exam_name + "</td><td>" + score + "</td><td>" + status + "</td></tr>" );
        }
    });
  });

});
