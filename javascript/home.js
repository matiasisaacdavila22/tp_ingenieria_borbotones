$(document).ready(function() {
    var isAuth = localStorage.getItem('isAuth');

    if ( isAuth != null) {
          $("#login").hide();
          $("#register").hide();
          $("#logout").show();
          $("#panel").show();
          }else{
      $("#login").show();
      $("#register").show();
      $("#logout").hide();
      $("#panel").hide();
        }
  $("#logout").click( function() {
            localStorage.removeItem('isAuth');
          //  localStorage.clear();
            location.href ="../views/home.html";
        });

$("#login").click( function() {
          location.href ="../views/login.html";
              });

$("#register").click( function() {
          location.href ="../views/register.html";
              });

$("#panel").click( function() {
          location.href ="../views/panel.html";
              });

$("#obras").click( function() {
          location.href ="../views/obras/index.html";
              });

$("#ingresar").click( function() {
        alert('fadsfsdfs');
    });

});
function salir() {
  location.href ="../views/home.html";
}
