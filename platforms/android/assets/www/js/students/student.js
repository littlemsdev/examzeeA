$(document).ready(function() {
  var student_id = decodeURI(getUrlVars()["id"]);
  var name = decodeURI(getUrlVars()["full_name"]);
  $('#student-name').append(name);

  $(".gradeShow").one('click', function(event){
    event.preventDefault();
    var table = $('.table-grades > tbody');
    $.ajax({
      type: "POST",
      // url: "http://192.168.250.47:8888/examzee/students.php",
      // url: "http://192.168.250.47:8888/examzee/grades.php",
      url: "http://192.168.1.7:8888/examzee/students.php",
      data: {
        student_id: student_id
      },
      crossDomain: true,
      cache: false,
      success: function(data) {
        $.each(JSON.parse(data), function(index, element) {
          $('.table-grades > tbody').append( "<tr><td>" + element.exam_id + "</td><td>" + element.score + "</td><td>"+ element.status +"</td></tr>" );
        })
      }
    });
  });

});
