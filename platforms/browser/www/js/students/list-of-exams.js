$(document).ready(function() {
  // var url = "http://192.168.250.47:8888/examzee/sections.php";
  // var url = "http://192.168.250.47:8888/examzee/sections.php";
  var url = "http://192.168.1.7:8888/examzee/lexams.php";
  $.getJSON(url, function(result) {
    $.each(result, function(i, exam) {
        var id = exam.id;
        var name = exam.exam_name;
        var t_item = exam.total_item;
        $('.table-exams > tbody').append( "<tr><td>" + name + "</td><td>" + t_item + "</td><td><button class='btn btn-default btn-xs' onClick='sendExam(this.id)' id=" + id + ">send</button><button class='btn btn-default btn-xs' onClick='createFile();'>create</button></td></tr>" );
    });
  });
});



function sendExam(exam_id){
  $.ajax({
    type: "POST",
    url: "http://192.168.1.7:8888/examzee/getExam.php",
    data: {
      exam_id: exam_id
    },
    crossDomain: true,
    cache: false,
    success: function(data) {
      window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, onError);
    }
  });
};

function onSuccess(fileSystem) {
    console.log(fileSystem.name);
}
