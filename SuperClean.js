var total=0;
function sumar(valor) {
total += valor;
document.formulario.total.value=total;
}
function restar(valor) {
total-=valor;
document.formulario.total.value=total;
}
function validarNumero(e) {
tecla = (document.all) ? e.keyCode : e.which;
if (tecla==8) return true; 
patron =/[0-9]/;
te = String.fromCharCode(tecla); 
return patron.test(te); 
}
function validarSoloLetras(e) {
tecla = (document.all) ? e.keyCode : e.which;
if (tecla==5) return true; 
patron =/[a-zA-Z ]/;
te = String.fromCharCode(tecla); 
return patron.test(te); 
}
function validarSoloDirec(e) {
tecla = (document.all) ? e.keyCode : e.which;
if (tecla==5) return true; 
patron =/[a-zA-Z 0-9]/;
te = String.fromCharCode(tecla); 
return patron.test(te); 
}

$(function () {
$("#btnSumar").click(function () {
    // validar campos vacio
    let rut = $("#txtRut").val();
    let digito = $("#digitoRut").val();
    let nombre = $("#txtNombre").val();
    let apellido = $("#txtApellido").val();
    let direccion = $("#txtDireccion").val();
    let marca = $("#txtMarca").val();
    let modelo= $("#txtModelo").val();
    let ano = $("#txtAno").val();
    let encargado = $("#txtEncargado").val();
    let fecha= $("#txtFecha").val();
    let hora = $("#txtHora").val();
    let valor = $("#txtValor").val();
        if (rut == "") {
        alert("Debe especificar el Rut");
        $("#txtRut").focus();
        } else if (digito == "") {
        alert("Debe especificar el Digito del Rut");
        $("#digitoRut").focus();
        } else if (nombre == "") {
        alert("Debe especificar el nombre");
        $("#txtNombre").focus();
        } else if(apellido == "") {
        alert("Debe especificar el Apellido");
        $("#txtApellido").focus();
        } else if (direccion == "") {
        alert("Debe especificar la direccion");
        $("#txtDireccion").focus();
        } else if(marca == "") {
        alert("Debe especificar la marca");
        $("#txtMarca").focus();
        } else if(modelo == "") {
        alert("Debe especificar el Modelo");
        $("#txtModelo").focus();
        } else if (ano == "") {
        alert("Debe especificar el Año");
        $("#txtAno").focus(); 
        } else if(encargado == "0") {
        alert("Debe especificar la persona encargada");
        $("#txtEncargado").focus();
        } else if (fecha == "") {
        alert("Debe especificar la fecha");
        $("#txtFecha").focus(); 
        }  else if (hora == "") {
        alert("Debe especificar la hora");
        $("#txtHora").focus(); 
        }  else if (valor == "") {
        alert("Debe Seleccionar el Tipo de Lavado que realizó, ya sea Exterior o de Motor");
        }   else 
        alert("El cliente:  " + document.getElementById("txtNombre").value + " Debe pagar un Total de:  " + document.getElementById("txtValor").value);
    });   
});