 //Expresión para validar un correo electrónico
 var expr = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/; 

 //validación total de formulario
const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const validarFormulario = (e) => {
    if(e.target.name == 'nombre'){
        var nombre = $("#itNombre").val();
        if (nombre =="" || nombre.length < 2){
            $("#mensaje1").fadeIn();
            return false;
        };
    }else if (e.target.name == 'email'){
        var email = $("#itEmail").val();
        if (email =="" || !expr.test(email)){
            $("#mensaje2").fadeIn();
            return false;
        };
    }else if (e.target.name == 'celular'){
        var celular = $("#itCelular").val();
        if (celular =="" || celular.length < 8){
            $("#mensaje3").fadeIn();
            return false;
        };
    }else if (e.target.name == 'mensaje'){
        var mensaje = $("#itMensaje").val();
        if (mensaje ==""){
            $("#mensaje4").fadeIn();
            return false;
        };
    };
};

const validarFormulario2 = (e) => {
    var nombre = $("#itNombre").val();
    var email = $("#itEmail").val();
    var celular = $("#itCelular").val();
    var mensaje = $("#itMensaje").val();
    if(e.target.name == 'nombre'){
        if (nombre =="" || nombre.length < 2){
            document.getElementById('gruponombre').classList.add('app-form-control-incorrecto');
            return false;
        }else{
            $("#mensaje1").fadeOut();
            document.getElementById('gruponombre').classList.remove('app-form-control-incorrecto');
        };
    }else if (e.target.name == 'email'){
        if (email =="" || !expr.test(email)){
            document.getElementById('grupoemail').classList.add('app-form-control-incorrecto');
            return false;
        }else{
            $("#mensaje2").fadeOut();
            document.getElementById('grupoemail').classList.remove('app-form-control-incorrecto');
        };
    }else if (e.target.name == 'celular'){
        if (celular =="" || celular.length < 8){
            document.getElementById('grupocelular').classList.add('app-form-control-incorrecto');
            return false;
        }else{
            $("#mensaje3").fadeOut();
            document.getElementById('grupocelular').classList.remove('app-form-control-incorrecto');
        };
    }else if (e.target.name == 'mensaje'){
        if (mensaje ==""){
            document.getElementById('grupomensaje').classList.add('app-form-control-incorrecto');
            return false;
        }else{
            $("#mensaje4").fadeOut();
            document.getElementById('grupomensaje').classList.remove('app-form-control-incorrecto');
        }
    };
};

inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario2);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit',  (e) => {
    e.preventDefault();
});
//


//funcion para que solo se pueda ingresar NUMEROS en Celular (Formulario).
$(".integer").numeric(false, function() { alert("Valor inválido"); this.value = ""; this.focus(); });

//funcion para mostrar valor dolar y fecha
$.getJSON('https://mindicador.cl/api', function(data){
    var indicadores = data;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10){
        dd = '0' + mm;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    var today = dd + '/' + mm + '/' + yyyy;

    
    $("#dolar").html('$' + data.dolar.valor);
    $("#fechadolar").html(today);
});


$(document).ready(function() {
    
    //validar campos de formulario
    $("#bEnviar").click(function(){
        var nombre = $("#itNombre").val();
        var email = $("#itEmail").val();
        var celular = $("#itCelular").val();
        var mensaje = $("#itMensaje").val();
        
        if (nombre =="" || nombre.length < 2){
            $("#mensaje1").fadeIn();
            return false;
        }else{
            $("#mensaje1").fadeOut();
            if (email =="" || !expr.test(email)){
                $("#mensaje2").fadeIn();
                return false;
            }else{
                $("#mensaje2").fadeOut();
                if (celular =="" || celular.length < 8){
                    $("#mensaje3").fadeIn();
                    return false;
                }else{
                    $("#mensaje3").fadeOut();
                    if (mensaje ==""){
                        $("#mensaje4").fadeIn();
                        return false;
                    }else{
                        $("#mensaje4").fadeOut();
                    }
                }
            }
        }
    });
});