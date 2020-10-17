$(document).ready(function() {
    var email = localStorage.getItem('email');
    if ( email !=  null ) {
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
            localStorage.removeItem('email');
            localStorage.clear();
            location.reload();
        });

$("#login").click( function() {
          location.href ="../views/login.html";
              });

$("#register").click( function() {
          location.href ="../views/register.html";
              });

});

function saludar() {
    var nombre = $("#email").val();
    localStorage.setItem('email', email);
}
