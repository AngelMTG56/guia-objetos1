// Ejercicio 7. Contador de palabras
// Qué practica: Un objeto como contador cuyas claves aparecen mientras el programa corre.
// Enunciado:
// Leer una frase, pasarla a minúsculas y separarla en palabras con split(" "). Contar cuántas
// veces aparece cada palabra usando un objeto. Mostrar cada palabra con su conteo en el orden
// en que apareció por primera vez, cuántas palabras distintas hay y cuál es la más repetida. Si
// hay empate, gana la que apareció primero.
// Ejemplo de ejecución:
// [prompt] Frase: el que madruga dios lo ayuda y el que no madruga también
// el: 2
// que: 2
// madruga: 2
// dios: 1

// Objetos en JavaScript · Sesión 2 · Página 11

// lo: 1
// ayuda: 1
// y: 1
// no: 1
// también: 1
// Palabras distintas: 9
// Más repetida: el (2 veces)

let frase = prompt("Frase:");

function contarPalabras(frase) {
  let contador = {};
  let palabras = frase.toLowerCase().split(" ");

  for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];

    if (contador[palabra] === undefined) {
      contador[palabra] = 1;
    } else {
      contador[palabra]++;
    }
  }

  return contador;
}

function contarClaves(objeto) {
  let cantidad = 0;

  for (let clave in objeto) {
    cantidad++;
  }

  return cantidad;
}

function buscarClaveMayor(objeto) {
  let mayor = -Infinity;
  let claveMayor = "";

  for (let clave in objeto) {
    if (objeto[clave] > mayor) {
      mayor = objeto[clave];
      claveMayor = clave;
    }
  }

  return claveMayor;
}

let contador = contarPalabras(frase);

for (let palabra in contador) {
  console.log(palabra + ": " + contador[palabra]);
}

console.log("Palabras distintas: " + contarClaves(contador));

let masRepetida = buscarClaveMayor(contador);
console.log("Más repetida: " + masRepetida + " (" + contador[masRepetida] + " veces)");

