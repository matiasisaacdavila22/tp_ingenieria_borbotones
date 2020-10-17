$(document).ready(function() {
    var email = localStorage.getItem('email');
    if ( email !=  null ) {
          location.href ="../views/home.html";
        }
});

<<<<<<< HEAD
function send() {
    var nombre = $("#email").val();
=======
function saludar() {
    var email = $("#email").val();
    var name   = email.substring(0, email.lastIndexOf("@"));
    var user = new User(name);
    console.log(user.name);
>>>>>>> 455bf235b63ffb27abff288d1b83967325da5814
    localStorage.setItem('email', email);
}

function salir() {
  location.href ="../views/home.html";
}
