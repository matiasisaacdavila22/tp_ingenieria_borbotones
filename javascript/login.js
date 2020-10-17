$(document).ready(function() {
    var email = localStorage.getItem('email');
    if ( email !=  null ) {
          location.href ="../views/home.html";
        }
});

function saludar() {
    var nombre = $("#email").val();
    localStorage.setItem('email', email);
}
