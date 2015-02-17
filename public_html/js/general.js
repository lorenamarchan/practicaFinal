
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


function nVentana(link) {
    var nv = window.open(link, "nventana", "scrollbars=yes, height=600, width=600");
}

/* nombre:      cerrar
 * descrpcion:  funcion que cierra las ventanas emergentes de la web.
 * parametros:  ninguno
 * devuelve:    nada
 */
function cerrar() {
    window.close();
}

function cerrarAviso() {
    document.getElementById('avisoCookies').style.height = "0px";
    document.getElementById('aceptarCookies').style.height = "0px";
    document.getElementById('aceptarCookies').style.paddingTop = "0px";
    document.getElementById('aceptarCookies').style.paddingBottom = "0px";
}

/* nombre:      expandir
 * descrpcion:  funcion que muestra mas texto (o menos) en cada apartado de la zona de categoria
 * parametros:  n:String, obj:Object
 * devuelve:    nada
 */
function expandir(n, obj) {
    var el = (document.getElementById("art_" + n).style.height).slice(0, -2);
    var tamano = document.getElementById("texto_" + n).offsetHeight + "px";
    var num = parseInt(el);
    if (num > 80) {
        document.getElementById("art_" + n).style.height = "80px";
        obj.value = "mas info";
    }
    else {
        document.getElementById("art_" + n).style.height = tamano;
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

    if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))) {
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

        window.open("confirmacion.html", "confirmaion", "height=250 width=425");
        return true;
    } else {
        alert("Vuelve a revisar los campos, por favor");
        compruebaCampos();
        return false;
    }
}

var busqueda = "";

function focusBuscar(elem) {
    elem.value = "";
    elem.style.color = "#433333";
    elem.style.fontStyle = "normal";
}
function blurBuscar(elem) {
    elem.value = "Buscar...";
    elem.style.color = "#70624C";
    elem.style.fontStyle = "italic";
}


function buscar(e) {
    busqueda = document.getElementById('busqueda').value;
    var evento = window.event || e;
    if (evento.keyCode == 13) {
        document.cookie = "busqueda=" + busqueda;
        window.location.assign("busqueda.html");
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}

function resultado() {
    var resultado = document.getElementsByClassName('resultado');
    for (var i = 0; i < resultado.length; i++) {
        resultado[i].innerHTML = getCookie('busqueda');
    }
    document.getElementById('aGoogle').href = "https://www.google.es/?gws_rd=ssl#q=inurl:caballitos.hol.es+" + getCookie('busqueda');
}


function visualizar(numero) {
    var elem1 = document.getElementById("usod_" + numero);
    var elem2 = document.getElementById("usot_" + numero);
    var demas = document.getElementsByClassName('usod');
    for (var i = 0; i < demas.length; i++) {
        if (demas[i].id !== "usod_" + numero) {
            demas[i].style.display = "none";
            elem2.style.backgroundPosition = "right 6px";
        }
    }
    if (elem1.style.display === "block") {
        elem1.style.display = "none";
        elem2.style.backgroundPosition = "right 6px";
    }
    else {
        elem1.style.display = "block";
        elem2.style.backgroundPosition = "right -10px";
    }
}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value;
}

