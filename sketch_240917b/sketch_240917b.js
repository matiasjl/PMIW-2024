// DIBUJANDO PIXEL ART
// -------------------

// array 2 dimensiones = TABLA / GRILLA
let grilla = [];  //mi arreglo bidimensional sin largo declarado
let cantidad = 10;
let tamano;

function setup() {
  createCanvas(500, 500);

  tamano = width / cantidad;  // 500/5 = 100

  // darle valor inicial a cada posicion de mi array
  for ( let x = 0; x < cantidad; x++ ) {
    grilla[x] = [];
    for ( let y = 0; y < cantidad; y++ ) {
      grilla[x][y] = false;
    }
  }
  // inicializo una sola de las posiciones en true
  grilla[0][0] = true;
}


function draw() {
  background( 255 );

  // dibujo una grilla del tamano del array
  for ( let x = 0; x < cantidad; x++ ) {
    for ( let y = 0; y < cantidad; y++ ) {
      //coloreo
      if ( grilla[x][y] === false ) {
        fill(200)
      } else {
        fill(0)
      }
      //dibujo
      rect( x*tamano, y*tamano, tamano, tamano );
    }
  }
}

function mousePressed() {
  //cada cuadrado ser[a un btn
  for ( let x = 0; x < cantidad; x++ ) {
    for ( let y = 0; y < cantidad; y++ ) {
      //determino la zona rectangular del boton
      if ( mouseX > x*tamano && mouseX < x*tamano+tamano &&
        mouseY > y*tamano && mouseY < y*tamano+tamano ) {
        // igual a lo contrario de su valor actual
        grilla[x][y] = !grilla[x][y];
      }
    }
  }
}
