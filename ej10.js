// Ejercicio 10. El clon que no era clon
// Qué practica: Referencias: distinguir cuándo dos variables apuntan al mismo objeto y copiar
// objetos anidados.

// Objetos en JavaScript · Sesión 2 · Página 14

// Enunciado:
// Parte A. Copia este código y, antes de ejecutarlo, escribe en un comentario lo que crees que
// imprime la última línea y por qué. Después ejecútalo. Si te equivocaste, explica en otro
// comentario qué fue lo que no viste. Equivocarse aquí no resta: dejarlo sin explicar sí.
// Parte B. Escribe una función que haga una copia completa del pedido, de modo que cambiar el
// barrio de la copia no afecte el original. Pruébala.
// Ejemplo de ejecución:
// (Salida de la parte B, con el pedido original de la parte A antes de modificarlo)
// Barrio del original: Centro
// Barrio de la copia: La Playa
// Parte A
let pedido = {
  cliente: "Ana",
  total: 30000,
  entrega: { barrio: "Centro", hora: "7:00 pm" }
};

let copia1 = pedido;
copia1.total = 45000;

let copia2 = {
  cliente: pedido.cliente,
  total: pedido.total,
  entrega: pedido.entrega
};

copia2.cliente = "Luis";
copia2.entrega.barrio = "La Playa";

console.log(pedido.total, pedido.cliente, pedido.entrega.barrio);
// Parte B
function clonarEntrega(entrega) {
  return {
    barrio: entrega.barrio,
    hora: entrega.hora
  };
}

function clonarPedido(pedido) {
  return {
    cliente: pedido.cliente,
    total: pedido.total,
    entrega: clonarEntrega(pedido.entrega)
  };
}

let pedidoOriginal = {
  cliente: "Ana",
  total: 30000,
  entrega: { barrio: "Centro", hora: "7:00 pm" }
};

let copiaCompleta = clonarPedido(pedidoOriginal);

copiaCompleta.entrega.barrio = "La Playa";

console.log("Barrio del original: " + pedidoOriginal.entrega.barrio);
console.log("Barrio de la copia: " + copiaCompleta.entrega.barrio);