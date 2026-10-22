// Ejercicio 8. Inventario del local
// Qué practica: Modificar valores con una clave dinámica, validando en el orden correcto.
// Enunciado:
// El programa arranca con este inventario:
// let inventario = { arepas: 20, empanadas: 35, jugos: 15, tintos: 40 };
// Se registran ventas: producto y cantidad, hasta que el producto sea "fin". Si el producto no
// existe o no hay suficiente, se avisa y no se modifica nada. Al final se muestra el inventario y los
// productos agotados.

let inventario = {
  arepas: 20,
  empanadas: 35,
  jugos: 15,
  tintos: 40
};

function vender(inventario, producto, cantidad) {
  if (inventario[producto] === undefined) return "No vendemos " + producto;
  if (inventario[producto] < cantidad) return "Solo quedan " + inventario[producto] + " " + producto;

  inventario[producto] -= cantidad;
  return "Vendidas " + cantidad + " " + producto + ". Quedan " + inventario[producto];
}

function obtenerAgotados(inventario) {
  let agotados = [];
  for (let clave in inventario) {
    if (inventario[clave] === 0) agotados.push(clave);
  }
  return agotados;
}

while (true) {
  let producto = prompt("Producto:");
  if (producto === null || producto.toLowerCase() === "fin") break;

  let cantidad = Number(prompt("Cantidad:"));
  console.log(vender(inventario, producto.toLowerCase(), cantidad));
}

console.log("Inventario final:");
for (let clave in inventario) console.log(clave + ": " + inventario[clave]);

console.log("Agotados: " + obtenerAgotados(inventario).join(", "));