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
    graficarRectangulo(gatoX,gatoY,ANCHO_GATO,ALTO_GATO,"red");
}

function graficarComida(){
    graficarRectangulo(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"blue");

}

function graficarRectangulo(x,y,ancho,alto,color){
    ctx.fillStyle=color;
    ctx.fillRect(x,y,ancho,alto);
}


function iniciarJuego(){
    graficarGato();
    graficarComida();
}

