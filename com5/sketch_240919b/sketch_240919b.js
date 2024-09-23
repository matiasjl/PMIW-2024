// arrays bidimensionales / dos dimensiones / matrices
let miTabla = [];
let largo = 5;

function setup() {
  createCanvas( 500, 500 );
  background(200);
  textSize( 48 );

  // asignar valores a mi tabla, recorriendo el arreglo declaro
  for ( let x = 0; x < largo; x++ ) {  //recorre del 0 al 4
    miTabla[x] = [];  //declaro un arreglo adentro de cada posicion de mi "arreglo original"
    for ( let y = 0; y < largo; y++ ) {  //recorre del 0 al 4
      //carga de datos en mi arreglo = un numero aleatorio
      miTabla[x][y] = int(random(10));
      // este bloque de do ble for se repite 5 x 5 = 25
      console.log( miTabla[x][y] );  //miTabla[0][0], miTabla[0][2]... miTabla[4][4].
    }
  }
}


function draw() {

  //for anidado de 5x5=25
  for ( let x = 0; x < largo; x++ ) {  //recorre del 0 al 4
    for ( let y = 0; y < largo; y++ ) {  //recorre del 0 al 4
      //grilla
      fill(255);
      rect( x*width/largo, y*height/largo, width/largo, height/largo );  // = 100

      //dibujar los numeros en la grilla
      fill(0 );
      text( miTabla[x][y], x*width/largo + 30, y*height/largo + 60 );
    }
  }
}
