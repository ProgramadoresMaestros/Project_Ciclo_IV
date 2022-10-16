//alert("Mensaje de alerta");

let nombre = "razon_social";
const nit = "nit";
let direccion = "direccion";
const telefono = "telefono";
let pais = "pais";


console.log(nombre + " " + nit + " " 
+ "direccion" + " " + telefono + " " + "pais");


//let info = document.write(nombre);
let info = document.getElementById("dato");
info.innerHTML = ("nombre" + " " + "nit" + " " 
+ "direccion" + " " + telefono + " " + "pais" );

