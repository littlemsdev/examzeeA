$( document ).ready(function() {
  console.log( "ready!" );
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });
});
