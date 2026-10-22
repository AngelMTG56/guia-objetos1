// Ejercicio 4. Reserva de rafting
// Qué practica: Agregar y eliminar propiedades según decisiones del usuario.
// Enunciado:
// Leer el nombre del cliente y la cantidad de adultos, y crear una reserva con la actividad "Rafting
// río Fonce" y seguro: true. Preguntar si van menores; si sí, agregar la propiedad menores con
// su cantidad. Preguntar si rechaza el seguro; si sí, eliminar la propiedad seguro. Calcular el
// total: $70000 por adulto, $50000 por menor y $8000 por persona si hay seguro. Mostrar solo los
// datos que existen en la reserva.

let cliente = prompt("Cliente:");
let adultos = Number(prompt("Adultos:"));

function crearReserva(cliente, adultos) {
  return {
    cliente: cliente,
    actividad: "Rafting río Fonce",
    adultos: adultos,
    seguro: true
  };
}

function calcularTotal(reserva) {
  let total = reserva.adultos * 70000;

  if (reserva.menores !== undefined) {
    total += reserva.menores * 50000;
  }

  if (reserva.seguro !== undefined) {
    let personas = reserva.adultos;

    if (reserva.menores !== undefined) {
      personas += reserva.menores;
    }

    total += personas * 8000;
  }

  return total;
}

function mostrarReserva(reserva) {
  console.log("Reserva");
  console.log("Cliente: " + reserva.cliente);
  console.log("Actividad: " + reserva.actividad);
  console.log("Adultos: " + reserva.adultos);

  if (reserva.menores !== undefined) {
    console.log("Menores: " + reserva.menores);
  }

  if (reserva.seguro !== undefined) {
    console.log("Seguro: incluido");
  } else {
    console.log("Seguro: no incluido");
  }

  console.log("Total: $" + calcularTotal(reserva));
}

let reserva = crearReserva(cliente, adultos);

let respuestaMenores = prompt("¿Van menores de edad? (si/no):");
if (respuestaMenores.toLowerCase() === "si") {
  reserva.menores = Number(prompt("¿Cuántos menores?:"));
}

let rechazaSeguro = prompt("¿Rechaza el seguro? (si/no):");
if (rechazaSeguro.toLowerCase() === "si") {
  delete reserva.seguro;
}

mostrarReserva(reserva);
