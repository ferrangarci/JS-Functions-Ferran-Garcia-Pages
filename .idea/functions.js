// EXERCICI 1
/* function nomicog() {
    console.log("Ferran")
    console.log("Garcia")
    console.log("Pagès")
}

nomicog() */

// EXERCICI 2
/* function mostrarTipus(valor) {
    console.log(typeof valor);
}

mostrarTipus(42);
mostrarTipus("Hola");
mostrarTipus(true); */

// EXERCICI 3
/* function dataActual() {
    return new Date();
}

console.log(dataActual()); */

// EXERCICI 4
/* function canviarvariable() {
    let variable1 = "HOLA"
}

console.log(variable1) */

// EXERCICI 5
/* function vocals(text) {
    let comptador = 0;
    for (let i = 0; i < text.length; i++) {
        let lletra = text[i].toLowerCase();
        if ("aeiou".includes(lletra)) {
            comptador++;
        }
    }
    return comptador;
}

console.log(vocals("Guacamole")); */

// EXERCICI 6
/* function suma(a, b, c = 2) {
    return a + b + c;
}
console.log(suma(2, 3));
console.log(suma(2, 3, 4)); */

// EXERCICI 7
/* function dataActual() {
    return new Date();
}

function suma(a, b, c = 2) {
    return a + b + c;
}

function combinat(a, b, c) {
    console.log (dataActual());
    console.log (suma(a, b, c));
}
console.log(combinat(1, 2)); */

// EXERCICI 8
/* function comprovar(a, b) {
    if (a == 30 || b == 30 || (a+b == 30)) {
        return true;
    }
    else {
        return false;
    }
}
console.log(comprovar(5,25)) */

// EXERCICI 9
/* let trentaAnonima = function(a, b) {
    return a === 30 || b === 30 || a + b === 30;
};
console.log(trentaAnonima(15, 15)); */

// EXERCICI 10
/* let dosvalors = (a, b) => a === b;
console.log(dosvalors(5, "5"));
console.log(dosvalors(5, 5)); */

// EXERCICI 11
/* let arrelquadrada = (a) => (Math.sqrt(a).toFixed(2));
console.log(arrelquadrada(10)) */

// EXERCICI 12
let minuscules = (txt) => txt.toLowerCase();
console.log(minuscules("HOLa"))