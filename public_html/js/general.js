
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
window.onload = function () {
    cookies();
};


function nVentana(link) {
    var nv = window.open(link, "nventana", "scrollbars=yes, height=600, width=600");
}

/* nombre:      cerrar
 * descrpcion:  funcion que cierra las ventanas emergentes de la web.
 * parametros:  ninguno
 * devuelve:    nada
 */
function cookies() {
    if (!getCookie("cookieHabilitado")) {
        console.log('entra1');
        var body = document.getElementsByTagName('body')[0];
        var avisoCookies = '<div id="avisoCookies"> <div id="texto">';
        avisoCookies += 'Usamos cookies propias y de terceros para mostrar publicidad personalizada seg&uacute;n su navegaci&oacute;n. Si continua navegando consideramos que acepta el uso de cookies. ';
        avisoCookies += ' <a id="aceptarCookies" onclick="aceptarCookie();">OK</a> ';
        avisoCookies += '<a id="masInfo" href="javascript:void(0)" onclick="nVentana(\'politicacookies.html\')"> M&aacute;s informaci&oacute;n</a></div>';
        body.insertAdjacentHTML('afterbegin', avisoCookies);
        document.getElementById('avisoCookies').style.height = "55px";
    }
    else {
        if (getCookie("nombre") != "" && getCookie("apellidos_1") != "" && getCookie("apellidos_2") != "") {
            var header = document.getElementsByTagName('header')[0];
            var usuario = getCookie("nombre") + " " + getCookie("apellidos_1") + " " + getCookie("apellidos_2");
            header.innerHTML += '<p id="bienvenida">bienvenido ' + usuario + ".</p>";
        }
    }
}
function aceptarCookie() {
    document.getElementById('avisoCookies').style.height = "0px";
    setCookie("cookieHabilitado", true, 365);
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
        cookiesDatos();
        window.open("confirmacion.html", "confirmacion", "height=250 width=425");
        return true;
    } else {
        alert("Vuelve a revisar los campos, por favor");
        compruebaCampos();
        return false;
    }
}


function cookiesDatos() {
    if (getCookie("cookieHabilitado")) {
        console.log('entra2');
        var nombre = document.getElementById('nombre').value;
        var apellidos_1 = document.getElementById('apellidos_1').value;
        var apellidos_2 = document.getElementById('apellidos_2').value;
        var email = document.getElementById('email').value;
        setCookie("nombre", nombre, 365);
        setCookie("apellidos_1", apellidos_1, 365);
        setCookie("apellidos_2", apellidos_2, 365);
        setCookie("email", email, 365);
    }

}

var busqueda = "";

function busca() {
    if (getCookie("cookieHabilitado")) {
        busqueda = document.getElementById('busqueda').value;
        document.cookie = "busqueda=" + busqueda;
    }
    window.location.assign("busqueda.html");
}

function resultadoBusqueda() {
    var busq = (getCookie("cookieHabilitado")) ? getCookie('busqueda') : "";
    var resultados = document.getElementsByClassName('resultado');
    for (var i = 0; i < resultados.length; i++) {
        resultados[i].innerHTML = busq;
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

function cookiesFormulario() {
    if (getCookie("nombre") != "") {
        document.getElementById('nombre').value = getCookie("nombre");
    }
    if (getCookie("apellidos_1") != "") {
        document.getElementById('apellidos_1').value = getCookie("apellidos_1");
    }
    if (getCookie("apellidos_2") != "") {
        document.getElementById('apellidos_2').value = getCookie("apellidos_2");
    }
    if (getCookie("email") != "") {
        document.getElementById('email').value = getCookie("email");
    }
}