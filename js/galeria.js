//Galeria(Solo mobil)
var imagenes=new Array(
        ['img/ganardor1_b.jpg'],
        ['img/ganardor2_b.jpg'],
        ['img/ganardor3_b.jpg'],
        ['img/ganardor4_b.jpg'],
		['img/ganardor5_b.jpg'],
		['img/ganardor6_b.jpg']
    );
    var contador=0;
 
    /**
     * Funcion para cambiar la imagen y link
     */
function rotarImagenes()
{
	// cambiamos la imagen y la url
	"use strict";
	contador++;
	document.getElementById("gal").src = imagenes[contador%imagenes.length];
}

/*$(document).ready(function() {
{

});*/
onload=function() {
	// Cargamos una imagen aleatoria
	rotarImagenes();

	// Indicamos que cada 5 segundos cambie la imagen
	setInterval(rotarImagenes,5000);
};