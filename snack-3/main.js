//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi,
// Gatsby vuole generare una falsa lista di 3 invitati.

//creo una lista di nomi
var cognomi = ["Rossi", "Bianchi", "Verdi"];
//creo una lista di cognomi
var nomi = ["Mario", "Carlo","Lucio"];
//genero una lista di nomi e cognomi casuale
var cognomiRandom = cognomi[Math.floor(Math.random() * cognomi.length)];
console.log(cognomiRandom);
var nomiRandom = nomi[Math.floor(Math.random() * nomi.length)];
console.log(nomiRandom);
//associo nomi e cognomi random e li stampo
var randomName = cognomiRandom + nomiRandom;

while (randomName < 4) {
    console.log(randomName);
    randomName++;
}