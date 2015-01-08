
/*
Autor=Alvaro Camarero, Lorena Marchan, Mario Ramirez, Paul Lozano.
Fecha=06-ene-2015
Licencia=gpl30
Version=1.0
Descripcion=Funciones para comprobar y validar los datos del formulario
*/     

/* 
 * Copyright (C) 2015 Paul Lozano Cruzado 
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Funcion que comprueba los campos del formulario
 * y si lo estan...activa la casilla de terminos
 */
function compruebaCampos() {

    var campo = document.getElementsByName("requeridos");
    var compruebaCampo = true;

    for (var i = 0; i < campo.length; i++) {

        if (campo[i].value === '') {
            compruebaCampo = false;
            break;
        }
    }

    if (compruebaCampo === true) {

        document.getElementById("condiciones").disabled = false;
    } else {

        document.getElementById("condiciones").disabled = true;
        document.getElementById("condiciones").checked = false;
        document.getElementById("envio").disabled = true;
    }
}
/**
 * Funcion que comprueba si esta activa la casilla
 * de terminos, si lo esta activa el boton de enviar
 */
function activarEnviar() {

    if (document.getElementById("condiciones").checked === true) {

        document.getElementById("envio").disabled = false;
    } else {

        document.getElementById("envio").disabled = true;
    }
}
/**
 * Funcion para validar el telefono mediante 
 * una expresion regular que solo permitira numeros
 * y que empieze por 6 o 9
 */
function validaTelf() {

    var valorNum = document.getElementById("tlf_movil").value;

    if (!(/^(6){1}[0-9]{8}$/.test(valorNum))) {

        alert("El campo tiene que ser numérico y tiene que ser un numero de movil");
        document.getElementById("tlf_movil").value = '';
        return false;
    } else {
        return true;
    }
}
function validarEmail()
{
    var email = document.getElementById("email").value;

    if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/).test(email)){
        
        alert('El email introducido es incorrecto');
        document.getElementById("email").value = '';
        return false;        
    }else {
        return true;
    }
}
/**
 * Funcion para comprobar todos las validaciones anteriores
 */
function validacion() {

    if (validaTelf() === true && validaEmail() === true) {
        
        var confirmacion=window.open("confirmacion.html","confirmaion","height=250 width=425");
        return true;
    } else {
        alert("Vuelve a revisar los campos, por favor");
        return false;
    }
}