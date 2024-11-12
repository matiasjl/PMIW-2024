
class Mira{

  constructor() {  //parametros de constructor
    // declaro las propiedades de la clase
    this.x = 100;
    this.y = 100;
    this.diam = 50
  }
  
  actualizar( mx, my ){
    this.x = mx;
    this.y = my;
  }

  dibujar(){
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




}
