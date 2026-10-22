// Ejercicio 13. Boletín 2.0
// Qué practica: Object.keys y Object.values combinados con métodos de array.
// Enunciado:
// Reescribe el ejercicio 5 sin for...in: usa Object.keys, Object.values y métodos de array.
// La salida debe ser idéntica. En un comentario responde: ¿qué función del ejercicio 5
// desapareció por completo y por qué?

let notas = {
  matematicas: 4.2,
  ingles: 3.1,
  programacion: 4.8,
  etica: 3.9
};

function contarClaves(objeto) {
  return Object.keys(objeto).length;
}

function calcularPromedioObjeto(objeto) {
  let valores = Object.values(objeto);
  let suma = 0;

  for (let i = 0; i < valores.length; i++) suma += valores[i];
  return suma / valores.length;
}

function buscarClaveMayor(objeto) {
  let claves = Object.keys(objeto);
  let mayor = -Infinity;
  let claveMayor = "";

  for (let i = 0; i < claves.length; i++) {
    let clave = claves[i];
    if (objeto[clave] > mayor) {
      mayor = objeto[clave];
      claveMayor = clave;
    }
  }

  return claveMayor;
}

function filtrarClavesMenores(objeto, limite) {
  let resultado = [];

  for (let clave of Object.keys(objeto)) {
    if (objeto[clave] < limite) resultado.push(clave);
  }

  return resultado;
}

for (let clave of Object.keys(notas)) console.log(clave + ": " + notas[clave]);

console.log("Promedio: " + calcularPromedioObjeto(notas).toFixed(1));
console.log("Mejor materia: " + buscarClaveMayor(notas));
console.log("Por reforzar: " + filtrarClavesMenores(notas, 3.5).join(", "));