/*Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.*/
function random(){
  return Math.floor( Math.random() * 100) - 1
}

let arrayNumeri = []

let i = 0

const numeriRandom = document.querySelector ('#numeri-random')

let clock = setInterval( function(){
  arrayNumeri.push(random())
  console.log(arrayNumeri);
  numeriRandom.innerHTML += `<li>${arrayNumeri[i]}</li>`
  i++
}, 1000)

setTimeout( function(){
  clearInterval(clock)
}, 5000)

setTimeout( function(){
  numeriRandom.innerHTML = ``
}, 10000)

setTimeout( function(){
  let numeriUtente = []

  while ( numeriUtente.length < 5){

    let numeroInserito = parseInt(prompt('inserisci un numero'))

    if (!numeriUtente.includes(numeroInserito)) {
      numeriUtente.push(numeroInserito)
    }
  }

  console.log(numeriUtente);

  let numeriIndovinati = []

  for( let k = 0; k < numeriUtente.length; k++){

    if( arrayNumeri.includes( numeriUtente[k] ) ){
      numeriIndovinati.push( numeriUtente[k] )
    }
  }
  
  console.log(numeriIndovinati);
  document.getElementById("indovinati").innerHTML = `Hai indovinato ${numeriIndovinati.length} numeri, che sono: ${numeriIndovinati} `

}, 11000)


