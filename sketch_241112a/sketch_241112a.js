// POO Clases y Objetos
// rebotes, colisiones, sprite

let p = new Pelotita();
let mira = new Mira();  //convencion: objetos con miniscula y clases con primer letra mayuscula

function setup() {
  createCanvas(800, 600);
}


function draw() {
  background( 10 );

  p.actualizar();
  p.dibujar();
  
  mira.actualizar( mouseX, mouseY );
  mira.dibujar();
  
}
