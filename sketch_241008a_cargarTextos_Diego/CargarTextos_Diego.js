//CONTENIDOS:
//Importar textos de TXT y CSV
//Agregar sonido
//Uso de translate
//Uso de split

//Sonido: Deben pegar esta linea de código en el index.html
//<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/addons/p5.sound.js"></script>

//Documentacion
//TXT: https://p5js.org/reference/p5/loadStrings/
//CSV: https://p5js.org/reference/p5/loadTable/


let guionTXT;
let guionCSV;
let song;


function preload() {
  soundFormats('mp3', 'ogg');
  song = loadSound('/data/InfinityTrain.mp3');
  guionTXT= loadStrings('/data/guionTXT.txt');
  guionCSV = loadTable("/data/guionCSV.csv", "csv", "header");
}


function setup() {
  createCanvas(1000, 500);
  song.setVolume(0.5);
  background(230);
  textSize(18);

  TextosTXT(30, 30, 0);
  TextosTXT(30, 60, 1);
  TextosTXT(30, 90, 2);
  TextosTXT(30, 120, 3);
  
  rect(width/2-20, 0, 20, height);

  DialogosCSV(width/2 + 20, 20, 'Escena1_Dialogo1');
  DialogosCSV(width/2 + 20, 130, 'Escena1_Dialogo2');
  DialogosCSV(width/2 + 20, 240, 'Escena1_Dialogo3');
  DialogosCSV(width/2 + 250, 360, 'Escena1_Dialogo4');
}


function mousePressed() {
  //MUSICA
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}


//======================================== Cargar textos de TXT
function TextosTXT(posX, posY, numLinea) {
  push();
  fill(0);
  let textoCompleto = guionTXT[numLinea];
  let textosDivididos = split(textoCompleto, '>> ');
  text(textosDivididos[0], posX, posY);
  text(textosDivididos[1], posX + 70, posY);

  //for (let i=0; i < guionTXT.length; i++) {
  //  text(guionTXT[i], 30, 30 + (30*i));
  //}
  pop();
}
//=======================================================================



//======================================== Cargar textos de excel (CSV)
function DialogosCSV(posX, posY, _id) {
  push();
  translate(posX, posY);

  //Burbuja de dialogo
  fill(20);
  rect(0, 0, 235, 95, 10);
  fill(255);
  text(GetTextCSV(_id, 'Nombre'), 20, 30);
  text(GetTextCSV(_id, 'Es'), 20, 40, 220, 70);
  pop();
}

function GetTextCSV(_id, _columna) {
  let IDColumna = guionCSV.getColumn('ID');

  for (let fila=0; fila < IDColumna.length; fila++) {
    if (IDColumna[fila] === _id)
      return guionCSV.getColumn(_columna)[fila];
  }
  return "NO SE ENCONTRO EL ID: " + _id;
}
//=======================================================================
