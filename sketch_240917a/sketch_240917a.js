// variable
let miNombre = "Matias";
// array 7 largo = tipo lista una dimension
let nombres = ["Juan Bautista", "Alana Florencia", "micaela", "Juan", "Emanuel", "Nazarena", "María Celeste", "Agostina Celeste" ];
// otra manera de declarar arrays, sin valores ni dimension
let apellidos = [];

function setup() {
  createCanvas(1000, 500);
  background( 255 );
  textSize( 24 );
  
  frameRate( 5 );  //no hagan esto en sus casas  //por defectp 60fps
  
  // agrego datos a mi arreglo manualmente
  apellidos.push("Casteran");  //0
  apellidos.push("Condoluci"); //1
  apellidos.push("Correa");    //2
  apellidos[9] = "Del Campo";  //10
  
}


function draw() {
  background( 255 );
  
  //muestro nombres alternadamente
  fill(0);
  text( nombres[frameCount % nombres.length], 50, 50 );
  //text( getTargetFrameRate(), 50, 50 );
  
  //muestro toda la lista de nombres
  for( let i = 0 ; i < nombres.length ; i++ ){  //nombres.lenght = 7
    text( i + ": " + nombres[i], 50, 120 + i*30 );
  }

  //muestro toda la lista de APELLIDOS
  for( let i = 0 ; i < apellidos.length ; i++ ){  //apellidos.lenght = 10
    text( i + ": " + apellidos[i], 300, 120 + i*30 );
  }
  
  console.log(apellidos.length);

}

function keyPressed(){
  if( key == 'a' )
    nombres.push("Diego");  // agrega un nuevo dato al final del array
  if( key == 's' )
    nombres.pop();  // borra el ultimo dato del array
}

function mousePressed(){
  nombres.sort();  // ordena alfabeticamente, de menor a mayor
}



/*

cars.length   // Returns the number of elements
cars.sort()   // Sorts the array
fruits.push("Lemon");  // Adds a new element (Lemon) to fruits

*/
