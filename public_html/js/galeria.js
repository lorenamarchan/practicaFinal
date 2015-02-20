
/*
Autor=Alvaro Camarero, Lorena Marchan, Mario Ramirez, Paul Lozano.
Fecha=06-ene-2015
Licencia=gpl30
Version=1.0
Descripcion=Funciones JavaScript para la galeria
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
window.onload = galerias;

/* nombre:      galerias
 * descrpcion:  funcion que rellena las galerias con las imagenes a traves de arrays.
 * parametros:  ninguno
 * devuelve:    nada
 */
function galerias() {
                var imagenesClases = ["clases1", "clases2", "clases3", "clases4", "clases5", "clases6", "clases7", "clases8", "clases9", "clases10", "clases11"];
                var imagenesRutas = ["ruta1", "ruta2", "ruta3", "ruta4", "ruta5", "ruta6"];
                var imagenesEstablecimiento = ["caballo1", "caballo2", "caballo3", "caballo4", "caballo5", "caballo6", "caballo7", "caballo8"];
                rellenoGalerias('clases', imagenesClases);
                rellenoGalerias('rutas', imagenesRutas);
                rellenoGalerias('establecimiento', imagenesEstablecimiento);
            }

            function rellenoGalerias(grupo, imagenes) {
                for (var i = 0; i < imagenes.length; i++) {
                    var imagen = '<img src="img/galeria_img/' + imagenes[i] + '.jpg" alt="' + imagenes[i] + '.jpg">';
                    var divsimagen = '<div class="imagen"><a href="img/galeria_img/' + imagenes[i] + '.jpg" data-lightbox="' + grupo + '">';
                    document.getElementById(grupo).innerHTML += divsimagen + imagen + '</a></div>';
                }
            }