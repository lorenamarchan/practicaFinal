
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


/* nombre:      nVentana
 * descrpcion:  funcion que abre las ventanas emergentes de la web.
 * parametros:  ninguno
 * devuelve:    nada
 */

function nVentana() {
    var nv = window.open("licencia.html", "nventana", "height=600 width=600");
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
