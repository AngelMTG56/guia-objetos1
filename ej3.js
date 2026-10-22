// Ejercicio 3. Producto en oferta
// Qué practica: Construir un objeto nuevo a partir de otro sin modificar el original.
// Enunciado:
// El programa arranca con este objeto:
// let producto = { nombre: "Morral", precio: 85000, stock: 12 };
// Leer un porcentaje de descuento. Una función debe retornar un objeto nuevo con el precio
// rebajado y una propiedad extra precioAnterior. Las demás propiedades se copian igual.
// Mostrar ambos objetos para demostrar que el original quedó intacto.

let producto = {
  nombre: "Morral",
  precio: 85000,
  stock: 12
};

function aplicarDescuento(producto, porcentaje) {
  let nuevoProducto = { ...producto };
nuevoProducto.precioAnterior = nuevoProducto.precio;
nuevoProducto.precio = nuevoProducto.precio * (1 - porcentaje / 100);

  return nuevoProducto;
}

let descuento = Number(prompt("Ingrese el porcentaje de descuento:"));

let oferta = aplicarDescuento(producto, descuento);

console.log("Producto original:");
console.log(producto);

console.log("Producto en oferta:");
console.log(oferta);