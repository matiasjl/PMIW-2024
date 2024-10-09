// una sola variable con un solo dato NO justifica un arreglo
let miNombre = "Matias";

// variables que podr[ian sintetizarse en un array
let estudiante1 = "Juan";
let estudiante2 = "Maria";
let estudiante3 = "...";
let estudiante4;
let estudiante5;

// mi array: declaracion y asignacion de datos: 5 de largo
let estudiantes = [ "Barba Riofrio", "Betancu", "Bravo Vergel", "Breit", "Bruny" ];

function setup() {
  
  createCanvas( 1600, 600 );
  background( 200 );
  textSize( 36 );

  frameRate( 5 );  //baja el frame per second de la aplicacion
  //estudiantes[]
  
  console.log( "Largo del array: " + estudiantes.length );
  
  // otra manera de agregar datos a mi arreglo
  //estudiantes[9] = "Diaz Palma";
}


function draw() {
  background( 200 );
  
  fill( 0 );
  // escriba un texto
  //text( "miNombre", 100, 100 );
  // escribo el contenido de la variable
  //text( miNombre, 100, 100 );
  // escribo... todos los datos del array
  //text( estudiantes, 100, 100 );
  // escribo solo la primera posicion del array 
  text( estudiantes[frameCount%5], 100, 100 );
  
  // dibujar la lista en pantalla uno abajo del otro
  for( let i = 0 ; i < estudiantes.length ; i++ ){
    text( estudiantes[i], 100, 200 + i*40 );
  }

}
