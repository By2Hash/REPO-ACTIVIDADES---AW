//1

//a
console.log("Ejercicio A");
const edad = 20;
console.log(`Edad: ${edad}`)
if (edad > 18) {
    console.log("Es mayor de edad");
}
else {
    console.log("Es menor de edad");
}


//b
console.log("Ejercicio B");
if (edad % 2 === 0) {
    console.log("El numero es par");
} else {
    console.log("El numero es impar");
}

//c
console.log("Ejercicio C");
const nota = 7;
if (nota < 4) {
    console.log("Resultado:" + "Reprobado");
}
else if (nota < 7) {
    console.log("Resultado:" + "Aprobado");
}
else {
    console.log("Resultado:" + "Excelente");
}


//2

//a
console.log("Ejercicio A");
console.log("Bucles");
console.log("ASC");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


//b
console.log("Ejercicio B");
console.log("DESC");
for (let i = 10; i > 0; i--) {
    console.log(i);
}

//c
console.log("Ejercicio C");
for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log("El número es par");
    } else {
        console.log("El número es impar");
    }
}

//d
console.log("Ejercicio D");

for (let i = 0; i < 20; i++) {
    if (i % 2 === 0) {
        console.log(`El número ${i} es par`);
    } else {
        console.log(`El número ${i} es impar`);
    }
}