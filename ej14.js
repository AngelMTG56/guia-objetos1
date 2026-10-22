// Ejercicio 14. Reporte de inventario
// Qué practica: Object.entries con filter y map.
// Enunciado:
// Con este inventario:
// let inventario = { arepas: 20, empanadas: 8, jugos: 0, tintos: 40, pandebonos: 5 };

// Objetos en JavaScript · Sesión 2 · Página 17

// Mostrar cuántos productos hay, el total de unidades, los productos con stock bajo (más de 0 y
// menos de 10) con su cantidad, y los agotados. Usa Object.entries, Object.values, filter
// y map; nada de for ni for...in.

let inventario = {
  arepas: 20,
  empanadas: 8,
  jugos: 0,
  tintos: 40,
  pandebonos: 5
};

function contarUnidades(inventario) {
  let unidades = Object.values(inventario);
  return unidades.reduce((total, valor) => total + valor, 0);
}

function obtenerStockBajo(inventario) {
  return Object.entries(inventario).filter((par) => par[1] > 0 && par[1] < 10);
}

function formatearPares(pares) {
  return pares
    .map((par) => par[0] + " (" + par[1] + ")")
    .join(", ");
}

let productos = Object.keys(inventario).length;

let stockBajo = obtenerStockBajo(inventario);
let agotados = Object.entries(inventario).filter((par) => par[1] === 0);

console.log("Productos: " + productos);
console.log("Unidades en total: " + contarUnidades(inventario));
console.log("Stock bajo: " + formatearPares(stockBajo));
console.log("Agotados: " + agotados.map((par) => par[0]).join(", "));