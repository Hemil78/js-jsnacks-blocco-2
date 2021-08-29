//Crea due array che hanno un numero di elementi diversi.
//Aggiungi elementi casuali all’array che ha meno elementi,
//fino a quando ne avrà tanti quanti l’altro

// Array con elementi maggiore
var maggiore = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150 ];
console.log (maggiore);

// Array con elementi minore
var minore = [ 10, 20, 30, 40, 50 ];
console.log (minore);

    // eseguo un ciclo per verificare le quantità
while ( maggiore.length > minore.length ) {
    // eseguo il push per renderli uguali
    minore.push(Math.floor(Math.random() * 100));
}
// stampa degli array
console.log(maggiore, minore);