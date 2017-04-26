$(document).ready(function() {
  $('#summernote').summernote({
    height: 150,
    focus: true
  });

  var select = document.getElementById("status");

  $("#publish").on('click', function(event){
    event.preventDefault();
    var exam_name = $('input[name="examName"]').val();
    var subject = $('input[name="subject"]').val();
    var total_item = $('input[name="totalItem"]').val();
    var htmltxt = $('textarea[name="content"]').val($('#summernote').summernote('code'));
    var content = htmltxt.val();
    var answer_keys = $("#answer_keys").val();

    var status = select.options[select.selectedIndex].value;;

    var dataString = 'content=' + content + '&exam_name=' + exam_name + '&subject=' + subject + '&total_item=' + total_item + '&answer_keys=' + answer_keys + '&status=' + status;

    $.ajax({
      type: "POST",
      url: "https://examzee-api.herokuapp.com/api/v1/exams",
      data: dataString,
      crossDomain: true,
      cache: false,
      success: function(data) {
        alert("Successfully added!");
        window.location.href = "../students/exams.html";
      }
    });

  });


});
