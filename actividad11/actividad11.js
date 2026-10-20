//1 - A 

function saludar() {
    console.log("¡Hola, bienvenido!");
}
saludar();
//1 - B
function saludarPersona(nombre) {
    console.log(`Hola ${nombre}, bienvenido`);
}
saludarPersona("Bauty");
//1 - C

function esMayordeEdad(edad) {
    if (edad > 18) {
        return true
    }
    else {
        return false
    }
}
let edad = esMayordeEdad(20);
console.log(edad);

//2 - A

const controlEdad = (edad) => {
    if (edad > 18) {
        return true
    }
    else {
        return false
    }
}
let resultado = controlEdad(4);
console.log(resultado);

//2 - B
const control = (num1, num2) => {
    if (num1 < num2) {
        return `El número parámetro1 (${num1}) es menor que parámetro2 (${num2})`
    }
    else if (num1 === num2) {
        return `El número parámetro1 (${num1}) es igual que parámetro2 (${num2})`

    }
    else {
        return `El número parámetro1 (${num1}) es mayor que parámetro2 (${num2})`


    }
}

let r1 = control(2, 10);
let r2 = control(9,9);
let r3 = control(20,6);
console.log(r1);
console.log(r2);
console.log(r3);



//3 - A
{
    const suma = (a, b) => {
        console.log(`El resultado de la suma es ${a + b}`);
    };

    const resta = (a, b) => {
        console.log(`El resultado de la resta es ${a - b}`);
    };

    const operacion = (num1, num2, callback) => {
        callback(num1, num2);
    };

    operacion(10, 5, suma);
    operacion(10, 5, resta);
}

// 3 - B
{
    const suma = (a, b) => {
        console.log(`El resultado de la suma es ${a + b}`);
    };

    const resta = (a, b) => {
        console.log(`El resultado de la resta es ${a - b}`);
    };

    const operacion = (num1, num2, callback) => {
        if (typeof num1 !== "number" || typeof num2 !== "number" || Number.isNaN(num1) || Number.isNaN(num2)) {
            console.log("Debe ingresar solo números.");
            return;
        }
        callback(num1, num2);
    };

    operacion(10, 5, suma);
    operacion(10, 5, resta);
    operacion("10", 5, suma);
}