// tiempo relacionado a dialogos
// https://p5js.org/reference/p5/millis/

let t;
let marcaEnElTiempo = 0;
let tiempoPantallaActual = 0;
let estado;

function setup() {
  createCanvas( 600, 600 );
  
  textSize( 24 );
  
  estado = 0;
}


function draw() {
  t = int( millis() / 1000 );  //int() quita los decimales y /1000 lo muestra en segundos
  background( 255 );
  
  //logica de estados de tres pantallas
  if( estado === 0 ){
    background( 200, 0, 0 );
    
    
    if( mouseIsPressed ){
      estado = 1;
      marcaEnElTiempo = t;
      //return;
    }
  }else if( estado === 1){
    background( 0, 200, 0 );
    //tiempoPantallaActual = t - marcaEnElTiempo;
    
    
    if( keyIsPressed ){
      estado = 2;
      marcaEnElTiempo = t;
      //return;
    }    
  }else if( estado === 2 ){
    background( 0, 0, 200 );
    //tiempoPantallaActual = t - marcaEnElTiempo;
  
  
  }
  
  //visualizo las variables de tiempo
  tiempoPantallaActual = t - marcaEnElTiempo;
  text( t + " tiempo total", 50, 50 );
  text( marcaEnElTiempo + " marca en el tiempo", 50, 100 );
  text( tiempoPantallaActual + " tiempo estado actual", 50, 150 );
  
}

function mouseReleased(){
  
}
