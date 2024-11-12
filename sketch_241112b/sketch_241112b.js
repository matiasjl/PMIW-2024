// POO Clases y Objetos
// rebotes, colisiones, sprite

let p = new Pelotita();
let mira = new Mira();  //convencion: objetos con miniscula y clases con primer letra mayuscula

function setup() {
  createCanvas(800, 600);
  //
  textAlign( CENTER, CENTER );
  textSize( 24 );
}

function draw() {
  background( 0, 0, 100 );

  p.actualizar();
  p.dibujar();

  mira.actualizar( mouseX, mouseY );
  mira.dibujar();
}

function mousePressed(){
  mira.disparar( p );
}
