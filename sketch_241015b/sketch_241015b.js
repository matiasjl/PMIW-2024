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
  if ( estado === 0 ) {
    background( 200, 0, 0 );


    if ( tiempoPantallaActual >= 10 || mouseIsPressed ) {  //paso de estado a los 10 segundos
      estado = 1;
      marcaEnElTiempo = t;
      //return;
    }
  } else if ( estado === 1) {
    background( 0, 200, 0 );
    //tiempoPantallaActual = t - marcaEnElTiempo;


    if ( tiempoPantallaActual >= 10 || mouseIsPressed  ) {  // ambas condiciones son posible, paso automatico por tiempo y paso manual con clic
      estado = 2;
      marcaEnElTiempo = t;
      //return;
    }
  } else if ( estado === 2 ) {
    background( 0, 0, 200 );
    //tiempoPantallaActual = t - marcaEnElTiempo;

    // -----------------------------------------------------DIALOGO
    //ejemplo para mostrar dialogos por lineas
    if ( tiempoPantallaActual >= 2 ) {
      text( "hola juan", 100, 200 );
    }
    if ( tiempoPantallaActual >= 4 ) {
      text( "hola maria", 120, 240 );
    }
    if ( tiempoPantallaActual >= 6 ) {
      text( "¿como estas?", 100, 280 );
    }
    if ( tiempoPantallaActual >= 8 ) {
      text( "¿bien y tuuu?", 120, 320 );
    }
    if ( tiempoPantallaActual >= 10 ) {
      text( "cursando la clase de programacion", 100, 360 );
    }
    if ( tiempoPantallaActual >= 12 ) {
      text( "que interesante, y porque estamos hablando?", 120, 400 );
    }    
  }
  // -----------------------------------------------------DIALOGO
  
  //visualizo las variables de tiempo
  tiempoPantallaActual = t - marcaEnElTiempo;
  text( t + " tiempo total", 50, 50 );
  text( marcaEnElTiempo + " marca en el tiempo", 50, 80 );
  text( tiempoPantallaActual + " tiempo estado actual", 50, 110 );
}

function mouseReleased() {
}
