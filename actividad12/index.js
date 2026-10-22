 // 1.a
const numeros = [];

for (let i = 0; i < 5; i++) {
  const numero = Number(prompt("Ingresá un número (" + (i + 1) + " de 5)"));
  numeros.push(numero);
}

console.log(numeros); 

// 1.b
const impares = [];

for (let i = 0; i < 5; i++) {
  const numero = Number(prompt("Ingresá un número (" + (i + 1) + " de 5)"));
  if (numero % 2 !== 0) {
    impares.push(numero);
  }
}

console.log(impares); 

 // 1.c
const frutas = ["pera", "manzana", "banana", "durazno"];

frutas.forEach((fruta, indice) => {
  frutas[indice] = fruta.toUpperCase();
});

console.log(frutas);

// 1.d
const frutasOriginales = ["pera", "manzana", "banana", "durazno"];

const frutasMayusculas = frutasOriginales.map(fruta => fruta.toUpperCase());

console.log(frutasMayusculas);

// 1.e
const frutasBase = ["pera", "manzana", "banana", "durazno"];

const frutasConNa = frutasBase.filter(fruta => {
  if (fruta.includes("na")) {
    return true;
  }
  return false;
});

console.log(frutasConNa);

// 2.a
const producto = {
  nombre: "Remera básica",
  precio: 8000,
  stock: 12,
  talles: ["s", "m", "l"]
};

console.log(producto);

// 2.b
const productos = [
  { nombre: "Remera", precio: 8000, stock: 3, talles: ["s", "m", "l"] },
  { nombre: "Pantalón", precio: 15000, stock: 12, talles: ["s", "m", "l"] },
  { nombre: "Campera", precio: 30000, stock: 0, talles: ["m", "l"] },
  { nombre: "Buzo", precio: 20000, stock: 20, talles: ["s", "m", "l"] }
];

productos.forEach(prod => {
  if (prod.stock < 5) {
    console.log(prod);
  }
});

// 2.c
const productosConDescuento = productos.map(prod => {
  return { ...prod, precio: prod.precio * 0.9 };
});

console.log(productosConDescuento);

// 2.d
const productosMuchoStock = productos.filter(prod => prod.stock > 10);

console.log(productosMuchoStock);