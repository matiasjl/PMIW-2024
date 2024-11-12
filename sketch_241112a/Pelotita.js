
class Pelotita {

  constructor() {  //parametros de constructor
    // declaro las propiedades de la clase
    this.x = 400;
    this.y = 300;
    this.diam = 50
      this.vel = 5;  // incrementando en cada rebote
  }

  dibujar() {
    push();
    fill( 200 );
    noStroke();
    circle( this.x, this.y, this.diam );
    pop();
  }

  actualizar() {
    //actualización posición
    this.x = this.x + this.vel;  //ESTADO

    //logica de rebotes, con matematicas
    if ( this.x+(this.diam/2) >= width ) {  //EVENTO
      //toque el borde DERECHO de mi canvas
      //incremento la velocidad en 1
      this.vel = this.vel + 1;
      //ejecuto el rebote cambiando el signo
      this.vel = this.vel * -1;  // regla de signos jeje
      console.log( this.vel );
    }
    if ( this.x-(this.diam/2) <= 0 ) {  //EVENTO
      //toque el borde IZQUIERDO de mi canvas
      //incremento la velocidad en 1
      this.vel = this.vel - 1;
      //ejecuto el rebote cambiando el signo
      this.vel = this.vel * -1;  // regla de signos jeje
      console.log( this.vel );
    }
  }
}
