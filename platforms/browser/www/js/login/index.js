$("#login").click(function(){
  var username=$("#username").val();
	var password=$("#password").val();
  var dataString = 'username='+username+'&password='+password;
  // alert(dataString);

  if($.trim(username).length>0 && $.trim(password).length>0) {
    $.ajax({
      type: "POST",
      url: "http://192.168.1.9:8888/examzee/login.php",
      data: dataString,
      crossDomain: true,
      cache: false,
      beforeSend: function(){$("#login").val('Connecting...');},
      success: function(data){
        if(data == "success") {
          $("#login").val('Login');
          window.location.href = "admin/dashboard/index.html";
        } else {
          $("#login").val('Login');
          $("#error-msg").removeClass("hidden");
        }
      }
    });
  }
  return false;
});
