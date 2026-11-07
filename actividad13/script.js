// Actividad 13 - DOM, Eventos y Persistencia
// Persistencia del carrito usando localStorage.

const CLAVE_CARRITO = "cantidadArticulos";

const contador = document.querySelector(
    'header nav span[aria-label="Cantidad de artículos en el carrito"]'
);

const boton = document.querySelector('main button[type="button"]');

// Lee la cantidad guardada. Si no existe o es inválida, devuelve 0.
function leerCantidad() {
    const guardado = Number(localStorage.getItem(CLAVE_CARRITO));
    return Number.isInteger(guardado) && guardado >= 0 ? guardado : 0;
}

// Muestra la cantidad en el header.
function renderizarCantidad(cantidad) {
    contador.textContent = cantidad;
}

// Guarda la cantidad en localStorage.
function guardarCantidad(cantidad) {
    localStorage.setItem(CLAVE_CARRITO, String(cantidad));
}

// Estado inicial: recupera lo persistido al cargar la página.
let cantidadArticulos = leerCantidad();
renderizarCantidad(cantidadArticulos);

// Evento click: suma un artículo, actualiza la vista y persiste.
boton.addEventListener("click", () => {
    cantidadArticulos += 1;
    renderizarCantidad(cantidadArticulos);
    guardarCantidad(cantidadArticulos);
});
