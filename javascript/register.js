$(document).ready(function() {

  var isAuth = localStorage.getItem('isAuth');
  if(isAuth != null){
    location.href ="../views/home.html";
  }else{
      $("#login").show();
      $("#register").show();
      $("#logout").hide();
      $("#panel").hide();

$("#login").click( function() {
          location.href ="../views/login.html";
              });

$("#register").click( function() {
          location.href ="../views/register.html";
              });

 getSelectValue();
}
});
function getSelectValue()
    {
        var selectedValue = document.getElementById("list").value;
        var text= list.options[list.selectedIndex].text;
        var checkBox = document.getElementById("myCheck");
        var text = document.getElementById("text");
        if(selectedValue == 1){
          $("#myCheck").show();
          $("#checkBox").show();
          $("#textarea").hide();
          $("#textLabel").hide();
          document.getElementById("myCheck").checked = false;
          text.style.display = "none";
        }else{
          $("#myCheck").hide();
          $("#checkBox").hide();
          $("#textarea").show();
          $("#textLabel").show();
          document.getElementById("myCheck").checked = false;
          text.style.display = "none";
          }
    }
    getSelectValue();


  function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");

  if (checkBox.checked == true){
    text.style.display = "block";
    $("#checkBox").hide();
  } else {
    text.style.display = "none";
    $("#checkBox").show();
  }
 }

 function saludar() {
    var email = $("#email").val();
    var password = $("#password").val();
    var name = $("#name").val();
    var telefono = $("#telefono").val();
    var selectedValue = document.getElementById("list").value;

    if(name.length > 3 && password.length > 3 && telefono.length > 5 && email.length > 4 && selectedValue != ''){
      localStorage.setItem(email, email);
      localStorage.setItem(password, password);
        alert("Regsitro con exito.");
      window.location.replace("../views/home.html");
       alert("Regsitro con exito.");

      }else{
           alert('no se aceptan');
     }

  }
