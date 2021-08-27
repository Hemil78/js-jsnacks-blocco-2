//Inserisci un numero, se è pari stampa il numero,
//se è dispari stampa il numero successivo

//chiedo all'utente di inserire un numero
var numeroUtente = parseInt(prompt("Inserisci un numero"));
//se non è un numero
while (isNaN(numeroUtente)) {
    numeroUtente = parseInt(prompt("Non è un numero!!"));
}
//se pari stampo il numero
if ( numeroUtente % 2 == 0 ) {
    console.log ( numeroUtente );
//se è dispari stampo il numero successivo
} else  {
    console.log ( numeroUtente + 1 );
}