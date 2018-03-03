var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo = {
  url: "tile.png",
  cargaOK: false
}
var vaca = {
  url: "vaca.png",
  cargaOK: false
};
var pollo = {
  url:"pollo.png",
  cargaOK: false
};
var cerdo = {
  url:"cerdo.png",
  cargaOK: false
}

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);


function cargarFondo(){
  fondo.cargaOK = true;
  dibujar();
}
function cargarVacas(){
  vaca.cargaOK = true;
  dibujar();
}
function cargarPollos(){
  pollo.cargaOK = true;
  dibujar();
}
function cargarCerdos(){
  cerdo.cargaOK = true;
  dibujar();
}
function dibujar(){
  if(fondo.cargaOK){
    papel.drawImage(fondo.imagen, 0, 0,);
  }
  if(vaca.cargaOK == true){
    var cantidadvaca = aleatorio(0, 5);
    console.log(cantidadvaca + " vacas");
    for(var v = 0; v < cantidadvaca; v++){
      var x = aleatorio(0, 5);
      var y = aleatorio(0, 5);
      var x = x * 80;
      var y = y * 80;
      papel.drawImage(vaca.imagen, x, y);
    }

  }
  if(pollo.cargaOK == true){
    var cantidadpollo = aleatorio(0,5);
    console.log(cantidadpollo + " pollos");
    for(var p = 0; p < cantidadpollo; p++){
      var x = aleatorio(0, 5);
      var y = aleatorio(0, 5);
      var x = x * 80;
      var y = y * 80;
      papel.drawImage(pollo.imagen, x, y);
    }
  }
  if(cerdo.cargaOK == true){
    var cantidadCerdo = aleatorio(0,10);
    console.log(cantidadCerdo +" cerdos");
    for(var c = 0; c < cantidadCerdo; c++){
      var x = aleatorio(0, 5);
      var y = aleatorio(0, 5);
      var x = x * 80;
      var y = y * 80;
      papel.drawImage(cerdo.imagen, x, y);
    }
  }
}

function aleatorio(min,maxi){
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
