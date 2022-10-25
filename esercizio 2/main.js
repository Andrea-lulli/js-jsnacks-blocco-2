// *Snack2*
// Generatore di “nomi cognomi” casuali del grande gatsby:
// Abbiamo una lista di nomi e una lista di cognomi, e da 
// queste vogliamo generare una "falsa" lista di invitati, 
// dove ogni invitato nella lista, è l'unione di un "nome" 
// e un "cognome" delle liste precedentemente dette, scelti 
// in modo casuale.

let nomeInvitati = ["andrea", "luca", "mirko", "gigi", "alberto"];

let cognomeInvitati = ["rossi", "verde", "russo", "ferrari", "bianchi"];

let listaInvitati = document.getElementById("stampa")



let randomElementName = Math.floor((Math.random() * nomeInvitati.length));

let randomElementSurname = Math.floor(Math.random() * cognomeInvitati.length);

listaInvitati.innerHTML += ` <div>${nomeInvitati[randomElementName]} ${cognomeInvitati[randomElementSurname]}</div>`










