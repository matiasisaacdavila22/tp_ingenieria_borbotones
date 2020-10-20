$(document).ready(function() {
    var isAuth = localStorage.getItem('isAuth');
    
    if ( isAuth != null) {
          $("#login").hide();
          $("#register").hide();
          $("#logout").show();
          $("#panel").show();
          }else{
                location.href ="../home.html";
        }
        var obra;
        if(localStorage.getItem("obra")){
          var personJSONFromLS = localStorage.getItem("obra");
          obra = JSON.parse(personJSONFromLS);
          var ruta = '../img/'+obra.foto;
          $('#imagenPrevia').html("<img src='"+ruta+"' />");
        }
        mostrarObras();

  $("#logout").click( function() {
            localStorage.removeItem('isAuth');
          //  localStorage.clear();
            location.href ="../home.html";
        });

$("#panel").click( function() {
          location.href ="../panel.html";
              });

$("#obras").click( function() {
          location.href ="../obras/index.html";
              });
$('#name').value = 'matias davial';
getSelectValue();
});
function getSelectValue()
    {
        var selectedValue = document.getElementById("list").value;
        if(selectedValue == 1){
          $("#textarea").show();
          $("#textLabel").show();
          $("#list2").show();
          $("#autorClasico").hide();
          $("#nombreAutor").hide();
          $("#anioClasico").hide();
          $("#labelAutor").hide();
          $("#labelNombre").hide();
          $("#labelAnio").hide();
        }else if(selectedValue == 2){
          $("#textarea").hide();
          $("#textLabel").hide();
          $("#list2").hide();
          $("#autorClasico").show();
          $("#nombreAutor").show();
          $("#anioClasico").show();
          $("#labelAutor").show();
          $("#labelNombre").show();
          $("#labelAnio").show();
        }else{
          $("#textarea").hide();
          $("#textLabel").hide();
          $("#list2").hide();
          $("#autorClasico").hide();
          $("#nombreAutor").hide();
          $("#anioClasico").hide();
          $("#labelAutor").hide();
          $("#labelNombre").hide();
          $("#labelAnio").hide();
        }
    }
    getSelectValue();

    function mostrarObras(){
      var obra;
      if(localStorage.getItem("obra")){
        var personJSONFromLS = localStorage.getItem("obra");
        obra = JSON.parse(personJSONFromLS);

        var name = document.getElementById('name');
        name.innerHTML = obra.name;

        var nameAutor = document.getElementById('nameAutor');
        nameAutor.innerHTML = (obra.autor.length > 1 ) ? obra.autor : obra.autorClasico;

        var type = document.getElementById('type');
        type.innerHTML = (obra.list == 1) ? 'Original' : 'Replica';

        var status = document.getElementById('status');
        status.innerHTML = (obra.list3 == 1) ? 'Venta' : 'Exibicion';
      }
    }
