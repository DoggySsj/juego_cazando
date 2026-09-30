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
let puntaje=0;
let tiempo=10;


const INTERVALO=setInterval(restarTiempo,1000);

function actualizarCanva(){
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
    
}

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

function limpiarCanva(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

}

function moverIzquierda(){
    gatoX=gatoX-10;
    actualizarCanva();
}

function moverDerecha(){
    gatoX=gatoX+10;
    actualizarCanva();
}

function moverArriba(){
    gatoY=gatoY-10;
    actualizarCanva();
}

function moverAbajo(){
    gatoY=gatoY+10;
    actualizarCanva();
}

function detectarColision() {
    if (gatoX < comidaX + ANCHO_COMIDA &&
        gatoX + ANCHO_GATO > comidaX &&
        gatoY < comidaY + ALTO_COMIDA &&
        gatoY + ALTO_GATO > comidaY) {
        comidaAleatorio()
        puntaje=puntaje+1;
        document.getElementById("puntos").textContent=puntaje;
        if (puntaje==1){
            alert("El gato esta satisfecho!!!");
            clearInterval(INTERVALO);
        }
        
    }
}

function comidaAleatorio(){
    comidaX=generarAleatorioX();
    comidaY=generarAleatorioY()
    actualizarCanva();
}

function generarAleatorioX(){
    let numeroEntreroX= parseInt(Math.random()*(501-ANCHO_COMIDA));
    return numeroEntreroX;
}

function generarAleatorioY(){
    let numeroEntreroY= parseInt(Math.random()*(501-ALTO_COMIDA));
    return numeroEntreroY;
}

function restarTiempo(){
    tiempo=tiempo-1;
    if (tiempo<=0){
            alert("GAME OVER");
            clearInterval(INTERVALO);
        }
    
    document.getElementById("tiempo").textContent=tiempo;

}

function reiniciar(){
    location.reload();

}