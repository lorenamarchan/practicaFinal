
/*
 Autor=Alvaro Camarero, Lorena Marchan, Mario Ramirez, Paul Lozano.
 Fecha=06-ene-2015
 Licencia=gpl30
 Version=1.0
 Descripcion=Funciones JavaScript generales a toda la pagina
 */

/* 
 * Copyright (C) 2015 Alvaro Camarero, Lorena Marchan, Mario Ramirez, Paul Lozano.
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

/*FUNCIONES PARA LA VENTANA NUEVA*/

/* nombre:      nVentana
 * descrpcion:  funcion que abre las ventanas emergentes de la web.
 * parametros:  ninguno
 * devuelve:    nada
 */
function nVentana() {
    var nv = window.open("licencia.html", "nventana", "scrollbars=yes, height=600, width=600");
}

/* nombre:      cerrar
 * descrpcion:  funcion que cierra las ventanas emergentes de la web.
 * parametros:  ninguno
 * devuelve:    nada
 */
function cerrar() {
    window.close();
}

/* nombre:      expandir
 * descrpcion:  funcion que muestra mas texto (o menos) en cada apartado de la zona de categoria
 * parametros:  n:String, obj:Object
 * devuelve:    nada
 */
function expandir(n, obj) {
    if (document.getElementById("art_" + n).style.height > "70px") {
        document.getElementById("art_" + n).style.height = "70px";
        obj.value = "mas info";
    }
    else {
        document.getElementById("art_" + n).style.height = "auto";
        obj.value = "menos info";
    }
}

/*FUNCIONES PARA LAS VALIDACIONES*/

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
 * Funcion para validar el telefono mediante una expresion 
 * regular que solo permitira numeros y que empieze por 6
 */
function validaTelf() {

    var valorNum = document.getElementById("tlf_movil").value;

    if (!(/^(6){1}[0-9]{8}$/.test(valorNum))) {

        alert("Introduce un numero de movil correcto");
        document.getElementById("tlf_movil").value = '';
        return false;
    }
    return true;
}
/**
 * Funcion para validar el email mediante una expresion 
 * regular que nos asegurara que sea un email valido
 */
function validarEmail()
{
    var email = document.getElementById("email").value;
        
    if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))){    
        alert('El email introducido es incorrecto');
        document.getElementById("email").value = '';
        return false;        
    }
    return true;
}
/**
 * Funcion para comprobar todos las validaciones anteriores
 */
function validacion() {

    if (validarEmail() === true && validaTelf() === true) {
        
        window.open("confirmacion.html","confirmaion","height=250 width=425");
        return true;
    } else {
        alert("Vuelve a revisar los campos, por favor");
        return false;
    }
}