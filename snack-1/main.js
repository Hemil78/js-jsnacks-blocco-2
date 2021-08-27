//Il software deve chiedere per 5 volte all’utente di inserire un numero.
//Il programma stampa la somma di tutti i numeri inseriti.
//Esegui questo programma in due versioni, con il for e con il while.

/* var somma = 0;

for (var i = 1; i <= 5; i++) {
    var numero = parseInt( prompt( "Inserisci un numero" ) );
    somma += numero;
}
console.log ( somma ); */

var somma = 0;
var i = 1;
while (i <= 5) {
    var numero = parseInt(prompt("Inserisci un numero"));
    while (isNaN(numero)) {
        numero = parseInt(prompt("Non è un numero!!"));
    }
    somma += numero;
    i++;
}
console.log (somma);
