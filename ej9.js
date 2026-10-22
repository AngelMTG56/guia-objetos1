// Ejercicio 9. Ficha con dirección
// Qué practica: Acceso encadenado y protegerse cuando un nivel no existe.
// Enunciado:
// El programa arranca con estos dos objetos:
// let cliente = {
// nombre: "Laura Gómez",
// telefonos: ["3104567890", "6077241234"],
// direccion: { calle: "Calle 12 # 9-45", barrio: "Centro", ciudad: "San Gil" }
// };
// let clienteNuevo = { nombre: "Pedro Ruiz", telefonos: [] };
// Mostrar la ficha de cliente, leer un teléfono nuevo, un barrio y una calle nuevos, actualizar el
// objeto y volver a mostrar la ficha. Al final, mostrar la ciudad de clienteNuevo usando la misma
// función que con cliente, sin que el programa se rompa.

let cliente = {
  nombre: "Laura Gómez",
  telefonos: ["3104567890", "6077241234"],
  direccion: {
    calle: "Calle 12 # 9-45",
    barrio: "Centro",
    ciudad: "San Gil"
  }
};

let clienteNuevo = {
  nombre: "Pedro Ruiz",
  telefonos: []
};

function mostrarFicha(cliente) {
  let direccion = cliente.direccion || {
    calle: "sin dirección",
    barrio: "sin dirección",
    ciudad: "sin dirección"
  };

  console.log(cliente.nombre);
  console.log("Teléfonos: " + cliente.telefonos.join(", "));
  console.log("Dirección: " + direccion.calle + ", " + direccion.barrio + ", " + direccion.ciudad);
}

function cambiarDireccion(cliente, calle, barrio) {
  if (!cliente.direccion) {
    cliente.direccion = {};
  }

  cliente.direccion.calle = calle;
  cliente.direccion.barrio = barrio;
}

function obtenerCiudad(cliente) {
  if (cliente.direccion && cliente.direccion.ciudad) {
    return cliente.direccion.ciudad;
  }
  return "sin dirección";
}

console.log("--- Antes ---");
mostrarFicha(cliente);

let telefono = prompt("Nuevo teléfono:");
cliente.telefonos.push(telefono);

let barrio = prompt("Nuevo barrio:");
let calle = prompt("Nueva calle:");

cambiarDireccion(cliente, calle, barrio);

console.log("--- Después ---");
mostrarFicha(cliente);

console.log("Ciudad de Pedro Ruiz: " + obtenerCiudad(clienteNuevo));