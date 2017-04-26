$(document).ready(function() {
  $('#summernote').summernote({
    height: 150,
    focus: true
  });

  $("#publish").on('click', function(event){
    event.preventDefault();
    var exam_name = $('input[name="examName"]').val();
    var total_item = $('input[name="totalItem"]').val();
    var htmltxt = $('textarea[name="content"]').val($('#summernote').summernote('code'));
    var content = htmltxt.val();
    var answer_key = $("#answer_key").val();
    var dataString = 'content=' + content + '&exam_name=' + exam_name + '&total_item=' + total_item + '&answer_key=' + answer_key;

    $.ajax({
      type: "POST",
      url: "http://192.168.43.198:8888/examzee/exam.php",
      data: dataString,
      crossDomain: true,
      cache: false,
      success: function(data) {
        if(data == "success") {
          alert("Successfully Added!");
          window.location.href = "exams.html";
        } else {
          alert("error");
        }
      }
    });

  });


});
