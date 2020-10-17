$(document).ready(function() {
    var email = localStorage.getItem('email');
    if ( email !=  null ) {
          location.href ="../views/home.html";
        }
});

function saludar() {
    var email = $("#email").val();
    var name   = email.substring(0, email.lastIndexOf("@"));
    var user = new User(name);
    console.log(user.name);
    localStorage.setItem('email', email);
}
