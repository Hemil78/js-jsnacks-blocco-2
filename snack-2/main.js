//Inserisci un numero, se è pari stampa il numero,
//se è dispari stampa il numero successivo

//chiedo all'utente di inserire un numero
var numeroUtente = parseInt(prompt("Inserisci un numero"));
//se pari stampo il numero
if (numeroUtente % 2 == 0) {
    console.log (numeroUtente);
//se è dispari stampo il numero successivo
}else if (numeroUtente % 2 == 1) {
    numeroUtente = numeroUtente + 1;
    console.log (numeroUtente);
}