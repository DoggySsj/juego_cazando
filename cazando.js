let canvas=document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");

const ALTO_GATO=59;
const ANCHO_GATO=50;
const ALTO_COMIDA=20;
const ANCHO_COMIDA=20;

let gatoX=(canvas.width-ANCHO_GATO)/2;
let gatoY=(canvas.height-ALTO_GATO)/2;
let comidaX=480;
let comidaY=480;

function graficarGato(){
    ctx.fillStyle="red";
    ctx.fillRect(gatoX,gatoY,ALTO_GATO,ANCHO_GATO);
}

function graficarComida(){
    ctx.fillStyle="blue";
    ctx.fillRect(comidaX,comidaY,ALTO_COMIDA,ANCHO_COMIDA);

}

function iniciarJuego(){
    graficarGato();
    graficarComida();
}