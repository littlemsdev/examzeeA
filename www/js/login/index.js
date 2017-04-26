$(document).ready(function() {
  $("#login").click(function(){
    var usern=$("#username").val();
  	var pass=$("#password").val();
    var url = 'https://examzee-api.herokuapp.com/api/v1/sessions/'+ usern +'?password=' + pass;

    if($.trim(usern).length>0 && $.trim(pass).length>0) {
      window.location.href = "admin/dashboard.html";
      // $.ajax({
      //   type: "GET",
      //   url: url,
      //   crossDomain: true,
      //   cache: false,
      //   beforeSend: function(){$("#login").val('Connecting...');},
      //   success: function(data){
      //     try {
      //       var u = data[0].username;
      //       var p = data[0].password;
      //
      //       if((u == usern) && (p == pass)) {
      //         $("#login").val('Login');
      //         window.location.href = "admin/dashboard.html";
      //       }
      //     }
      //     catch(err) {
      //       $("#login").val('Login');
      //       $("#error-msg").removeClass("hidden");
      //     }
      //   }
      // });
    }
    return false;
  });

});
