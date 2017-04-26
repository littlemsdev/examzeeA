$(document).ready(function() {
  var name = decodeURI(getUrlVars()["name"]);
  var id = decodeURI(getUrlVars()["id"]);
  $('#section-name').append(name);

  $(".showStudents").one('click', function(event){
    event.preventDefault();
    var table = $('.table-students > tbody');
    $.ajax({
      type: "POST",
      // url: "http://192.168.250.47:8888/examzee/students.php",
      // url: "http://192.168.250.47:8888/examzee/students.php",
      url: "http://192.168.1.7:8888/examzee/students.php",
      data: {
        section_id: id
      },
      crossDomain: true,
      cache: false,
      success: function(data) {
        $.each(JSON.parse(data), function(index, element) {
          $('.table-students > tbody').append( "<tr><td>" + element.first_name + "</td><td>" + element.last_name + "</td><td><div class='btn-group btn-group-xs' role='group'><button type='button' onclick='viewGrade(this)' class='btn btn-default' id=" + element.id + ">view</button><button type='button' onclick='sendExam(this)' class='btn btn-primary sendExam' id=" + element.id + ">send</button></div></td></tr>" );
        })
      }
    });
  });
});

function viewGrade(elem){
  var student_id = elem.id;
  $.ajax({
    type: "POST",
    // url: "http://192.168.250.47:8888/examzee/section.php",
    url: "http://192.168.1.7:8888/examzee/student.php",
    // url: "http://192.168.1.10:8888/examzee/section.php",
    data: {
      id: student_id
    },
    crossDomain: true,
    cache: false,
    success: function(data) {
      window.location.href = "../students/student.html?id=" + student_id + "&full_name=" + data + "";
    }
  });
};
