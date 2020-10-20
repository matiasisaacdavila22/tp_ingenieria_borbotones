$(document).ready(function() {
    var isAuth = localStorage.getItem('isAuth');
  
    if ( isAuth !=  null ) {
          location.href ="../views/home.html";
        }
});

function saludar() {
    var nombre = $("#email").val();
    var password = $('#password').val();
    if(nombre == localStorage.getItem(nombre) && password == localStorage.getItem(password)){
        localStorage.setItem('isAuth', true);
    }else{
      alert('nombre de usuario o password incorrecto!!!');
    }

}

function salir() {
  location.href ="../views/home.html";
}
