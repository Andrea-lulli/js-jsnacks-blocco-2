// Snack4 (Bonus)
// Crea due array che hanno un numero di elementi 
// diversi.  Aggiungi elementi all’array che ha meno 
// elementi fino a quando ne avrà tanti quanti l’altro.

let numeri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let numeri2 = [0, 1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < numeri.length; i++) {
    let aggiungi = parseInt(prompt("Aggiungi ilnumero"));

    if (numeri.length > numeri2.length) {
        console.log(numeri2.push("aggiungi"));
    } else if (numeri.length = numeri2.length) {
        console.log("stesso numero elementi");
        console.log(numeri2.push("aggiungi"));
        console.log(numeri.push("aggiungi"));
    } 
}