class Billete {
  constructor(v, c) {
    this.valor = v; //Valor del Billete
    this.cantidad = c; //Cantidad de Billetes
  }
}

function entregarDinero(){
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bi of caja){
    if(dinero > 0){
      div = Math.floor(dinero / bi.valor);
      if(div > bi.cantidad){
        papeles = bi.cantidad;
      } else {
        papeles = div;
      }
      entregado.push(new Billete(bi.valor, papeles));
      dinero = dinero - (bi.valor * papeles);
    }
  }
  if(dinero > 0){
    resultado.innerHTML = "Soy un cajero pobre y no tengo dinero :(";
  } else {
    for(var e of entregado){
      if(e.cantidad > 0){
        resultado.innerHTML += e.cantidad + " Billetes de $" + e.valor + "<br />";
      }
    }
  }
}

var caja = []; //Caja del Cajero
var entregado = [];
caja.push(new Billete(100, 3)); //VALOR / CANTIDAD
caja.push(new Billete(50, 3)); //VALOR / CANTIDAD
caja.push(new Billete(20, 2)); //VALOR / CANTIDAD
caja.push(new Billete(10, 2)); //VALOR / CANTIDAD
caja.push(new Billete(5, 3)); //VALOR / CANTIDAD

var dinero = 0; //Dinero que quiero
var div = 0;
var papeles = 0; //Cantidad de papeles
var resultado = document.getElementById('resultado');
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
