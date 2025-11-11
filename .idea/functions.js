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
function suma(a, b, c = 2) {
    return a + b + c;
}
console.log(suma(2, 3));
console.log(suma(2, 3, 4));