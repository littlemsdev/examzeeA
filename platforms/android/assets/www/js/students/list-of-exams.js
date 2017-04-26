$(document).ready(function() {
  var url = "https://examzee-api.herokuapp.com/api/v1/exams";
  $.getJSON(url, function(result) {
    $.each(result, function(i, exam) {
        var id = exam.id;
        var name = exam.exam_name;
        var subj = exam.subject;
        var t_item = exam.total_item;
        $('.table-exams > tbody').append( "<tr><td>" + name + "</td><td>" + subj + "</td><td>" + t_item + "</td><td><button type='button' class='btn btn-info btn-xs' data-toggle='modal' data-target='#myModal'>send to all</button></td></tr>" );
    });
  });
});
