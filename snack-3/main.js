//Generatore di “nomi cognomi” casuali: prendendo una lista di nomi e una lista di cognomi,
// Gatsby vuole generare una falsa lista di 3 invitati.

//creo una lista di nomi e cognomi
var nomi = ["Mario", "Alessio", "Luca"];
var cognomi = ["Rossi", "Bianchi", "Catullo"];
//creo lista vuota
var invitati = [];
//ciclo per generare nomi e cognomi random
for (var i = 1; i <= 3; i++) {
    var randomNome = Math.floor(Math.random() * nomi.length);
    var randomCognome = Math.floor(Math.random() * cognomi.length);
    //aggiungo nome lista
    var nomeCompleto = nomi[randomNome] + " " + cognomi[randomCognome];
    invitati.push(nomeCompleto);
}

//stampo la lista
console.log(invitati);
