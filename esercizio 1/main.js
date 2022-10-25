
// *Snack1*
// Inserisci un numero, se è pari stampa il numero, 
// se è dispari stampa il numero successivo 
// ( del numero inserito dall'utente: esempio se il numero dell'utente 
// è 2, il numero successivo è 3  ).


let numeri = parseInt(prompt("Inseirisci Numero"));

let stampaPari = document.getElementById("stampapari")

let stampaDispari = document.getElementById("stampadispari")



if (numeri % 2 == 0) {

    stampaPari.innerHTML = `${numeri} è un numero pari`

} else if (numeri % 3 == 0) {

    stampaDispari.innerHTML = `${1 + numeri} è un numero dispari +1`
}





