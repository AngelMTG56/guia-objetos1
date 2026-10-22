// Ejercicio 2. Actualizar el perfil
// Qué practica: Corchetes con una clave guardada en variable y comprobar si una clave existe.
// Enunciado:
// El programa arranca con este objeto:
// let cliente = { nombre: "Jorge Díaz", telefono: "3001234567", barrio: "La Playa",
// ciudad: "San Gil" };
// El usuario escribe qué dato quiere cambiar y el valor nuevo. Si la clave no existe, se avisa y no
// se crea. Se repite hasta que escriba "fin". Al final se muestra el perfil.

let cliente = {
    nombre: "angel martinez",
    telefono: "3209218157",
    barrio: "zulia",
    ciudad: "aratoca"
};

let dato;

while (true) {
    dato = prompt(
        "¿Qué dato quieres cambiar? (nombre, telefono, barrio, ciudad o fin)"
    );

    if (dato === null || dato.toLowerCase() === "fin") {
        break;
    }

    if (Object.hasOwn(cliente, dato)) {
        let nuevoValor = prompt("Nuevo valor:");

        if (nuevoValor !== null) {
            cliente[dato] = nuevoValor;
            console.log("Actualizado:", dato, "=", nuevoValor);
        }
    } else {
        console.log("El dato", dato, "no existe");
        alert("El dato " + dato + " no existe");
    }
}

console.log("Perfil final:");
console.log("Nombre:", cliente.nombre);
console.log("Teléfono:", cliente.telefono);
console.log("Barrio:", cliente.barrio);
console.log("Ciudad:", cliente.ciudad);