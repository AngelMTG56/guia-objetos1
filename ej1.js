// Ejercicio 1. Ficha del aprendiz
// Qué practica: Crear un objeto con datos leídos, acceso por punto y propiedades calculadas.
// Enunciado:
// Leer el nombre, la edad, el número de ficha y el programa de un aprendiz, y guardarlos en un
// objeto. Agregar al objeto una propiedad mayorDeEdad con true o false según la edad.
// Mostrar la ficha.

const aprendiz = {
    nombre: prompt ("nombre:"),
    edad: prompt ("edad"),
    ficha: prompt ("numero de ficha"),
    programa: prompt ("programa")
};

aprendiz.mayordedad = aprendiz.edad >= 18;

console.log("nombre:", aprendiz.nombre);
console.log("edad:", aprendiz.edad);
console.log("numero de ficha:", aprendiz.numeroFicha);
console.log("programa:", aprendiz.programa);
console.log("mayor de edad:", aprendiz.mayordeedad ? "si" : "no");