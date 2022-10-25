// *Snack3*
// Crea un array di numeri interi e fai la somma di 
// tutti gli elementi  che sono in posizione (indice) 
// dispari
   
let numeri = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let stampa = document.getElementById("stampa")
let numeriDispari = 0

for (let i = 0; i < numeri.length; i++) {
if (numeri % 2 != 0) {

    numeriDispari = numeriDispari + numeri[i]
} 
}

stampa.innerHTML = numeriDispari