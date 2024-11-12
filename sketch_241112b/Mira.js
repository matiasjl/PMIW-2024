
class Mira {

  constructor() {  //parametros de constructor
    // declaro las propiedades de la clase
    this.x = 100;
    this.y = 100;
    this.diam = 50
  }

  actualizar( mx, my ) {
    this.x = mx;
    this.y = my;
  }

  dibujar() {
    push();
    stroke( 200, 0, 0 );  //rojo
    strokeWeight( 7 );
    noFill();
    circle( this.x, this.y, this.diam);
    //linea vertical
    line( this.x, this.y-40, this.x, this.y+40  );
    //linea horizontal
    line( this.x-40, this.y, this.x+40, this.y  );
    pop();
  }

  disparar( objetoPelotita ) {  //pido como parametro un objeto de la clase Pelotita
    //aqu[i calculo la distancia para determinar si colisiono, es decir, coinciden en coordenadas
    if ( dist( this.x, this.y, objetoPelotita.x, objetoPelotita.y ) < objetoPelotita.diam/2 ) {
      
      // idea 1: frenar la pelotita poniendo velocidad 0
      //objetoPelotita.frenar();
      
      // idea 2: contador de colisiones arriba de la pelotita
      objetoPelotita.hitear();
    }
  }
}
