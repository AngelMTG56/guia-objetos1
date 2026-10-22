// Ejercicio 11. Pedido de domicilio
// Qué practica: Dos objetos que comparten claves: uno con cantidades y otro con precios.
// Enunciado:
// El programa arranca con el menú de precios:
// let precios = { arepa: 3500, empanada: 2500, jugo: 4000, tinto: 1500 };
// El usuario agrega productos y cantidades hasta escribir "fin". Los productos se guardan en un
// objeto items (producto: cantidad). Si pide un producto que ya estaba, la cantidad se suma. Si
// no está en el menú, se rechaza. Al final se muestra el detalle, el subtotal, el domicilio ($3000 si
// el subtotal es menor a $20000; si no, gratis) y el total.
let precios = {
  arepa: 3500,
  empanada: 2500,
  jugo: 4000,
  tinto: 1500
};

let items = {};

function agregarItem(items, producto, cantidad) {
  if (precios[producto] === undefined) return producto + " no está en el menú";
  if (items[producto] === undefined) items[producto] = 0;
  items[producto] += cantidad;
}

function calcularSubtotal(items, precios) {
  let subtotal = 0;
  for (let p in items) subtotal += items[p] * precios[p];
  return subtotal;
}

function mostrarDetalle(items, precios) {
  let subtotal = calcularSubtotal(items, precios);
  let domicilio = subtotal < 20000 ? 3000 : 0;

  console.log("Detalle:");
  for (let p in items) console.log(p + " x" + items[p] + " = $" + items[p] * precios[p]);

  console.log("Subtotal: $" + subtotal);
  console.log("Domicilio: $" + domicilio);
  console.log("Total: $" + (subtotal + domicilio));
}

while (true) {
  let producto = prompt("Producto:");
  if (producto === null || producto.toLowerCase() === "fin") break;

  let cantidad = Number(prompt("Cantidad:"));
  let p = producto.toLowerCase();

  if (precios[p] === undefined) {
    console.log(p + " no está en el menú");
  } else {
    if (items[p] === undefined) items[p] = 0;
    items[p] += cantidad;
  }
}

mostrarDetalle(items, precios);