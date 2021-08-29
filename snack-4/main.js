//Crea un array di numeri interi
//e fai la somma di tutti gli elementi che sono in posizione (indice dell'array) dispari

// Creo un array con numeri interi
var numeri = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120 ];
console.log (numeri);

//creo un array vuoto che conterrà i numeri con indice dispari
var numDisp = [];
console.log (numDisp);

// eseguo un ciclo for per selezionare i numeri con indice dispari
var sommaNumDisp = 0;

for ( var i = 0; i < numeri.length; i++ ) {
    if ( i % 2 == 1 ) {
        numDisp.push (numeri [i]);

        // eseguo la somma dei numeri selezionati
        sommaNumDisp += numeri [i];        
    }
}

// stampa della somma
console.log(sommaNumDisp);
