"use strict";

var boton1 = window.document.getElementById("boton1");

boton1.addEventListener("click", () => {
  let input1 = document.getElementById("input1").value;
  metodo(input1);
});

function metodo(palabra) {
  document.getElementById("SpanResultadoHTML").innerHTML = palabra.palabra;
}
