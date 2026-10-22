// Ejercicio 6. Glosario de backend
// Qué practica: Un objeto como diccionario: buscar por clave sin recorrer, y agregar claves
// nuevas.
// Enunciado:
// El programa arranca con este glosario:
// let glosario = {
// api: "Conjunto de reglas para que dos programas se comuniquen.",
// servidor: "Programa que recibe peticiones y devuelve respuestas.",
// ruta: "Dirección a la que llega una petición, como /productos.",
// middleware: "Función que se ejecuta entre la petición y la respuesta.",
// endpoint: "Combinación de un método HTTP y una ruta."
// };
// El usuario escribe términos hasta "fin" y el programa muestra la definición, sin importar
// mayúsculas. Si el término no está, pregunta si quiere agregarlo y, si sí, pide la definición y lo
// agrega. Al final dice cuántos términos tiene el glosario.

let glosario = {
  api: "Conjunto de reglas para que dos programas se comuniquen.",
  servidor: "Programa que recibe peticiones y devuelve respuestas.",
  ruta: "Dirección a la que llega una petición, como /productos.",
  middleware: "Función que se ejecuta entre la petición y la respuesta.",
  endpoint: "Combinación de un método HTTP y una ruta."
};

function contarClaves(objeto) {
  let cantidad = 0;
  for (let clave in objeto) cantidad++;
  return cantidad;
}

function buscarDefinicion(glosario, termino) {
  return glosario[termino];
}

while (true) {
  let termino = prompt("Término:");

  if (termino === null || termino.toLowerCase() === "fin") break;

  let clave = termino.toLowerCase();
  let definicion = buscarDefinicion(glosario, clave);

  if (definicion !== undefined) {
    console.log(clave + ": " + definicion);
  } else {
    console.log('"' + termino + '" no está en el glosario');
    let respuesta = prompt("¿Quieres agregarlo? (si/no):");

    if (respuesta.toLowerCase() === "si") {
      glosario[clave] = prompt("Definición:");
      console.log("Agregado");
    }
  }
}

console.log("El glosario tiene " + contarClaves(glosario) + " términos");