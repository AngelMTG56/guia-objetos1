// Ejercicio 5. Boletín de notas
// Qué practica: for...in, clave y valor, y contar claves sin length.
// Enunciado:
// El programa arranca con este objeto:
// let notas = { matematicas: 4.2, ingles: 3.1, programacion: 4.8, etica: 3.9 };
// Mostrar cada materia con su nota, el promedio con un decimal, la materia con mejor nota y las
// materias por reforzar (nota menor a 3.5). Las funciones deben seguir funcionando si agregas
// una quinta materia sin tocarlas.

let notas = {
  matematicas: 4.2,
  ingles: 3.1,
  programacion: 4.8,
  etica: 3.9
};

function contarClaves(objeto) {
  let cantidad = 0;

  for (let clave in objeto) {
    cantidad++;
  }

  return cantidad;
}

function calcularPromedioObjeto(objeto) {
  let suma = 0;
  let cantidad = 0;

  for (let clave in objeto) {
    suma += objeto[clave];
    cantidad++;
  }

  return suma / cantidad;
}

function buscarClaveMayor(objeto) {
  let claveMayor = "";
  let mayor = -Infinity;

  for (let clave in objeto) {
    if (objeto[clave] > mayor) {
      mayor = objeto[clave];
      claveMayor = clave;
    }
  }

  return claveMayor;
}

function filtrarClavesMenores(objeto, limite) {
  let claves = [];

  for (let clave in objeto) {
    if (objeto[clave] < limite) {
      claves.push(clave);
    }
  }

  return claves;
}

for (let clave in notas) {
  console.log(clave + ": " + notas[clave]);
}

let promedio = calcularPromedioObjeto(notas);
console.log("Promedio: " + promedio.toFixed(1));

let mejorMateria = buscarClaveMayor(notas);
console.log("Mejor materia: " + mejorMateria);

let porReforzar = filtrarClavesMenores(notas, 3.5);
console.log("Por reforzar: " + porReforzar.join(", "));