// Ejercicio 1. Ficha del aprendiz
// Qué practica: Crear un objeto con datos leídos, acceso por punto y propiedades calculadas.
// Enunciado:
// Leer el nombre, la edad, el número de ficha y el programa de un aprendiz, y guardarlos en un
// objeto. Agregar al objeto una propiedad mayorDeEdad con true o false según la edad.
// Mostrar la ficha.
function leerAprendiz() {
  const nombre = "Ana";
  const edad = 19;
  const numeroFicha = "3477122";
  const programa = "Desarrollo de Software";

const aprendiz = {
  nombre: nombre,
  edad: edad,
  numeroFicha: numeroFicha,
  programa: programa,
  mayorDeEdad: edad >= 18
};

console.log("Ficha del aprendiz:");
console.log("Nombre:", aprendiz.nombre);
console.log("Edad:", aprendiz.edad);
console.log("Número de ficha:", aprendiz.numeroFicha);
console.log("Programa:", aprendiz.programa);
console.log("Mayor de edad:", aprendiz.mayorDeEdad);


