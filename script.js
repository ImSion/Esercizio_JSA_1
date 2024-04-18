// Primo esercizio. Crea una funzione che controlli due numeri interi. Ritorna `true` se uno dei due è 50 o se la somma dei due è 50.
function fiftyistrue (a, b) {
  if (a === 50 || b === 5 || a + b === 50) {
    return true
  } else return false
}

console.log(fiftyistrue(a = 24, b = 26)); //restituirà true perchè il risultato è 50
console.log(fiftyistrue(a = 24, b = 24)); //restituirà false perchè il risultato è 48
console.log(fiftyistrue(a = 50, b = 0)); //restituirà true perchè almeno a è 50

// Secondo esercizio. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la stringa e la posizione come parametri e ritorna la stringa modificata.

function removechar (stringa, posizione) {
  let word = stringa.split("")
  word.splice(posizione, 1)
  return word.join("")
}

console.log(removechar("Ciao lorenzo!", 10)); // toglie la decima lettera topo la prima (C), quindi contando anche lo spazio, toglierà Z

// terzo esercizio. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna `true` se rispecchiano queste condizioni, altrimenti ritorna `false`.

function between (a, b) {
  if (
    (a >= 40 && a <= 60 && b >= 40 && b <= 60) ||
    (a >= 70 && a <= 100 && b >= 70 && b <= 100)
  ) {
    return true
  } else 
  return false
}

console.log(between (a = 70, b = 80));

// Quarto esercizio. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con “Los” o “New”, altrimenti ritorni `false`.

function nameCity (nomeCitta) {
  return nomeCitta.startsWith("Los") || nomeCitta.startsWith("New")
} 

console.log(nameCity (nomeCitta = "Los Angeles")); // restituirà true perchè è incluso "Los"
console.log(nameCity(nomeCitta = "Buenos Aires")); // restituirà false perchè non è incluso nè los nè new

// Quinto esercizio. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array.
// L’array deve essere passato come parametro.

function sommaArray(arr) {               //qui definiamo la funzione che accetta come parametro l'array
  let temp = 0                           //dichiariamo la variable temp e la inizializziamo a zero. Questa variabile ci servirà per memorizzare la somma degli elementi dell'array
  for (let i = 0; i < arr.length; i++) { //ciclo for per scorrere lungo tutti gli array
    const element = arr[i]               // in ogni iterazione del ciclo, viene estratto un elemento dell'array e memorizzato in questa costante
    temp += element                      //il valore dell'elemento corrente viene aggiunto a questa variabile, che tiene traccia della somma parziale
  }
  return temp   //Alla fine del ciclo, la funzione restituisce il valore della variabile temp, che rappresenta la somma di tutti gli elementi dell'array.
}

console.log(sommaArray([3, 10, 22])); //35
console.log(sommaArray([5, 5, 5])); //15
console.log(sommaArray([-30, 20, 20])); //10

// Sesto esercizio. Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritorna `true`, altrimenti ritorna `false`.

function notThisNumbers (arr) {
  return !arr.includes(1) && !arr.includes(3)
}

console.log(notThisNumbers ([2, 5])); // sarà true perchè non ci sono nè 1 nè 3
console.log(notThisNumbers ([1, 5])); // sarà false perchè c'è 1

// Settimo esercizio. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
// Angolo acuto: meno di 90° ⇒ ritorna “acuto”
// Angolo ottuso: tra i 90° e i 180° gradi ⇒ ritorna “ottuso”
// Angolo retto: 90° ⇒ ritorna “retto”
// Angolo piatto: 180° ⇒ ritorna “piatto”

function angles (deg) {
  if (deg < 90) return "acuto"
  if (deg > 90 && deg < 180) return "ottuso"
  if (deg === 90) return "retto"
  if (deg === 180) return "piatto"
}

console.log(angles (deg = 80)); //acuto
console.log(angles (deg = 110)); //ottuso
console.log(angles (deg = 90)); //retto
console.log(angles (deg = 180)); //piatto

// Ottavo esercizio. Crea una funzione che crei un acronimo a partire da una frase. Es. “Fabbrica Italiana Automobili Torino” deve ritornare “FIAT”.

function acronimo(frase) {                         // Questa riga definisce una funzione chiamata acronimo che accetta un parametro frase
  let arrayParole = frase.split(" ")               // La frase viene suddivisa in un array di parole utilizzando lo spazio come separatore. Il metodo split(" ") divide la stringa in corrispondenza di ogni spazio e restituisce un array di parole.
  let temp = ""                                    //Viene dichiarata una variabile temp e inizializzata come una stringa vuota. Questa variabile verrà utilizzata per memorizzare le iniziali delle parole.
  for (let i = 0; i < arrayParole.length; i++) {   //Viene avviato un ciclo for che scorre attraverso tutte le parole nell'array arrayParole.
    const parola = arrayParole[i]                  // In ogni iterazione del ciclo, viene estratta una parola dall'array arrayParole e memorizzata nella costante parola.
    if (parola.charAt(0) === parola.charAt(0).toUpperCase()) { // Controlla se la prima lettera è maiuscola, non tenendo in considerazione le parole con lettera minuscola
    temp += parola.charAt(0)                       //Viene aggiunta all'acronimo (temp) la prima lettera di ogni parola utilizzando il metodo charAt(0) che restituisce il carattere nella posizione zero della stringa (cioè la prima lettera della parola).
    }
  }
  return temp.toUpperCase()                        //Alla fine del ciclo, la funzione restituisce l'acronimo, che è memorizzato nella variabile temp, convertendo tutte le lettere in maiuscolo utilizzando il metodo toUpperCase().
}

console.log(acronimo ("World Wide Web")); //restituisce WWW
console.log(acronimo ("Fabbrica Italiana Automobili Torino")); //restituisce FIAT
console.log(acronimo ("Artificial Intelligence")); //restituisce AI
console.log(acronimo ("National Aeronautics and Space Administration")); //restituisce NASA, escludendo "and"