// =======================
// TEST JAVASCRIPT – COLLOQUIO RANDOM
// =======================

//todo Questo test serve per verificare la conoscenza di concetti base di JavaScript, manipolazione di array, stringhe e oggetti.
//todo Prova a risolvere ciascun esercizio elencato di seguito utilizzando i dati forniti. 
//todo Puoi usare qualsiasi metodo o tecnica che conosci, ma cerca di essere efficiente e chiaro nel tuo codice.

const users = [
  { name: 'Luca', age: 22, active: true, email: 'luca@email.com' },
  { name: 'Marta', age: 35, active: false, email: 'marta@email.com' },
  { name: 'Giovanni', age: 28, active: true, email: 'gio@email.com' },
  { name: 'Anna', age: 19, active: true, email: null },
  { name: 'Francesca', age: 42, active: false, email: 'francesca@email.com' },
];

const numbers = [12, 5, 8, 130, 44, 7];
const text = "JavaScript è incredibilmente potente e flessibile";

// =======================
// ESERCIZI RANDOM (1–100)
// =======================

// 1) Filtra utenti con età maggiore di 30
// 2) Trasforma la stringa in maiuscolo
// 3) Somma tutti i numeri
// 4) Trova l’utente più giovane
// 5) Verifica se tutti gli utenti sono attivi
// 6) Rimuovi utenti senza email
// 7) Ordina numeri in ordine decrescente
// 8) Dividi la stringa in parole
// 9) Trova il numero massimo
// 10) Trasforma tutti i nomi utenti in minuscolo
// 11) Funzione che ritorna il maggiore di due numeri
// 12) Stampa i numeri pari
// 13) Aggiungi proprietà role="user" senza mutare l’array
// 14) Unisci tutti i nomi utenti in una stringa
// 15) Ripeti la stringa 2 volte
// 16) Arrow function per moltiplicare due numeri
// 17) Funzione che ritorna un oggetto
// 18) Controlla se la stringa contiene "JavaScript"
// 19) Trova il primo utente attivo
// 20) Rimuovi l’ultimo numero dall’array (copia)
// 21) Calcola la media dei numeri
// 22) Controlla se esiste un utente di nome "Marco"
// 23) Sostituisci "incredibilmente" con "estremamente"
// 24) Funzione che somma due numeri
// 25) Controlla se la stringa finisce con "flessibile"
// 26) Funzione con parametro di default
// 27) Filtra numeri minori di 10
// 28) Trova l’indice dell’utente "Anna"
// 29) Funzione che verifica se un numero è pari
// 30) For of su array numbers
// 31) Funzione che ritorna un array
// 32) Trasforma solo la prima lettera della stringa in maiuscolo
// 33) Controlla se tutti i numeri > 0
// 34) Funzione che ritorna un’altra funzione
// 35) Count delle lettere "e" nella stringa
// 36) Ordina utenti per lunghezza del nome
// 37) Filtra utenti con nome più lungo di 5 caratteri
// 38) Trova il numero minimo
// 39) Clona l’array numbers
// 40) Switch con mesi dell’anno
// 41) Do while: stampa almeno una volta
// 42) For: stampa numeri da 0 a 20
// 43) Inverti la stringa
// 44) Funzione che accetta callback
// 45) Somma solo numeri pari
// 46) Funzione che divide due numeri
// 47) For in su un oggetto user
// 48) Rimuovi utenti inattivi
// 49) Trasforma gli utenti in array di stringhe "Nome (Età)"
// 50) Promise che risolve un numero
// 51) Async function che ritorna un valore
// 52) Async/await con try/catch
// 53) Trasforma tutti i nomi in uppercase
// 54) Rimuovi numeri < 10
// 55) Estrai la parola "potente" dalla stringa
// 56) Filtra numeri dispari
// 57) Tronca la stringa a 15 caratteri
// 58) Funzione che sottrae due numeri
// 59) Funzione che moltiplica due numeri
// 60) Funzione che ritorna una stringa
// 61) Controlla se la variabile è undefined
// 62) Controlla se la variabile è null
// 63) Controlla il tipo di una variabile
// 64) Funzione che usa rest parameters
// 65) Funzione che usa spread operator
// 66) Conta quanti utenti hanno più di 25 anni
// 67) Rimuovi l’ultimo utente
// 68) Copia l’array e aggiungi un nuovo utente in testa
// 69) Inverti l’array utenti
// 70) Unisci le parole della stringa con "-"
// 71) Ordina utenti per età crescente
// 72) Ordina utenti per età decrescente
// 73) Funzione che ritorna il maggiore di due numeri
// 74) Rimuovi proprietà active da ogni utente (copia)
// 75) Conta quante volte appare la lettera "a" nella stringa
// 76) Stampa tutti i numeri
// 77) Ordina numeri in ordine crescente
// 78) Trova l’indice del numero 130
// 79) Rimuovi l’ultimo numero dall’array
// 80) Funzione che ritorna un oggetto
// 81) Calcola la somma totale delle età utenti
// 82) Filtra utenti il cui nome contiene "a"
// 83) Controlla se esiste il numero 44
// 84) Verifica se tutti hanno email valida
// 85) Rimuovi utenti con età minore di 25
// 86) Estrai solo nome e age degli utenti
// 87) For: stampa solo numeri multipli di 5
// 88) While: conta da 10 a 0
// 89) Sostituisci tutte le "a" nella stringa con "*"
// 90) Funzione che ritorna il minore di due numeri
// 91) Funzione che ritorna la lunghezza di una stringa
// 92) Funzione che ritorna true se numero > 0
// 93) Funzione che ritorna false se numero <= 0
// 94) Stampa tutti i nomi utenti con forEach
// 95) Map utenti in array di nomi
// 96) Filter utenti con age > 30
// 97) Some: verifica se almeno un utente è attivo
// 98) Every: verifica se tutti gli utenti hanno email
// 99) Promise con setTimeout che risolve
// 100) Funzione che concatena due stringhe

//* ✅ Corrette

// 1, 3, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 27, 29, 30, 31, 32, 33, 35, 37, 38, 39, 42, 43, 45, 46, 53, 56, 58, 59, 60, 61, 63, 67, 69, 70, 71, 72, 73, 75, 76, 77, 78, 79, 80, 81, 83, 87, 88, 89, 90, 91, 92, 94, 95, 96, 97
// Totale corrette: 63

//! ❌ Sbagliate

// 2 (minuscolo invece di maiuscolo), 54 (logica corretta ma filtrava l’opposto), 66 (conta invertita), 68 (aggiungevi in coda invece che in testa), 82 (usavi "a".includes("a")), 93 (logica invertita)
// Totale sbagliate: 6

//todo ⚠️ Mancanti / da migliorare

// 6, 25, 26, 28, 34, 36, 40, 41, 44, 47, 48, 49, 50, 51, 52, 55, 84, 85, 86, 99, 100
// Totale mancanti / da migliorare: 21

//todo Valutazione complessiva

//* Corrette: 63% → Ottimo, sei molto solido con array, stringhe, funzioni di base.
//! Sbagliate: 6% → Errori principalmente di logica o dettagli minori, facili da correggere.
//todo Mancanti / migliorabili: 21% → Dovresti completare alcune funzioni mancanti (async, promise, filter avanzati, manipolazione oggetti).
// Sintesi: hai una buona base, le cose principali funzionano, ma serve completare gli esercizi mancanti e fare attenzione a piccoli errori di logica o dettagli su metodi JS.

//todo Da ripassare:
// Da ripassare:

// Controllo fine stringa: endsWith(), startsWith().
// Estrazione di parole specifiche (substring(), slice(), indexOf()).
// Manipolazioni di caratteri e conteggi in stringhe più complessi.

// Spread operator per copiare e modificare senza mutare.
// Inserimento in testa o coda di array (push, unshift).
// Rimozione di elementi con logica condizionale (filter + pop/shift).
// Clonare oggetti e array profondi (deep copy vs shallow copy).

// Rimozione di proprietà senza mutare l’oggetto.
// Loop su oggetti con for in vs for of.
// Creazione di oggetti dinamici dentro funzioni.

// Rest parameters e spread operator in funzioni.
// Callback functions e funzioni che ritornano funzioni.
// Funzioni con valori di default.

// Switch statement corretti.
// Do while.
// Uso di break e continue.

// Creazione di Promise, gestione con then e catch.
// async/await e gestione degli errori con try/catch.
// setTimeout con promise.

//! Risposte:

// =======================
// TEST JAVASCRIPT – COLLOQUIO RANDOM
// VALUTAZIONE RISPOSTE
// =======================

// const users = [
//   { name: 'Luca', age: 22, active: true, email: 'luca@email.com' },
//   { name: 'Marta', age: 35, active: false, email: 'marta@email.com' },
//   { name: 'Giovanni', age: 28, active: true, email: 'gio@email.com' },
//   { name: 'Anna', age: 19, active: true, email: null },
//   { name: 'Francesca', age: 42, active: false, email: 'francesca@email.com' },
// ];

// const numbers = [12, 5, 8, 130, 44, 7];
// const text = "JavaScript è incredibilmente potente e flessibile";

// 1) Filtra utenti con età maggiore di 30
const user30 = users.filter((e) => e.age > 30); // ✅

// 2) Trasforma la stringa in minuscolo (tu volevi maiuscolo) 
const lowStr = text.toLowerCase(); // ❌ da correggere: toUpperCase()

// 3) Somma tutti i numeri
const sumNumber = numbers.reduce((acc, number) => acc + number, 0); // ✅

// 4) Trova l’utente più giovane
const utenteCopia = [...users];
const utenteGiovane = utenteCopia.sort((a, b) => a.age - b.age)[0]; // ✅

// 5) Verifica se tutti gli utenti sono attivi
const isActive = users.every((u) => u.active === true); // ❌ solo alcuni sono attivi

// 6) Rimuovi utenti senza email
// ⚠️ non implementato

// 7) Ordina numeri in ordine decrescente
const cloneD = [...numbers];
const deNumber = cloneD.sort((a, b) => b - a); // ✅

// 8) Dividi la stringa in parole
const wordStr = text.split(" "); // ✅

// 9) Trova il numero massimo
const cloneS = [...numbers];
const maxNumber = cloneS.sort((a, b) => b - a)[0]; // ✅

// 10) Trasforma tutti i nomi utenti in minuscolo
const copyUserss = [...users];
const modCopyTOL = copyUserss.map((n) => n.name = n.name.toLowerCase()); // ✅

// 11) Funzione che ritorna il maggiore di due numeri
function mag(a, b) { if(a > b) return a; else return b; } // ✅

// 12) Stampa i numeri pari
console.log(numbers.filter((n) => n % 2 === 0)); // ✅

// 13) Aggiungi proprietà role="user" senza mutare l’array
users.role = "user"; // ❌ muta l’array originale, da usare map o spread

// 14) Unisci tutti i nomi utenti in una stringa
const namesStr = users.map((u) => u.name).join(" "); // ✅

// 15) Ripeti la stringa 2 volte
let str = [];
for(let i = 0; i < 2; i++) str.push(text);
let result = str.join(" "); // ✅

// 16) Arrow function per moltiplicare due numeri
const sumArr = (a,b) => a * b; // ✅

// 17) Funzione che ritorna un oggetto
function objReturn(nomeS, cognomeS){ return { name: nomeS, cognome: cognomeS }; } // ✅

// 18) Controlla se la stringa contiene "JavaScript"
const isJavascript = text.split(" ");
let isTrue = false;
for(let i = 0; i < isJavascript.length; i++){ if(isJavascript[i] === "JavaScript") isTrue = true; }
console.log(isTrue); // ✅

// 19) Trova il primo utente attivo
const firstActive = users.find((u) => u.active === true); // ✅

// 20) Rimuovi l’ultimo numero dall’array (copia)
const arrCopia = [...users];
const removeCopia = arrCopia.pop(); // ✅

// 21) Calcola la media dei numeri
const mediaNumbers = numbers.reduce((acc, n) => acc + n, 0)/numbers.length; // ✅

// 22) Controlla se esiste un utente di nome "Marco"
const isMarco = users.some((n) => n.name === "Marco"); // ✅

// 23) Sostituisci "incredibilmente" con "estremamente"
const sostStr = text.replace("incredibilmente", "estremamente"); // ✅

// 24) Funzione che somma due numeri
function sumNum(a,b){ return a+b; } // ✅

// 25) Controlla se la stringa finisce con "flessibile"
// ⚠️ errore sintassi e logica, da correggere con endsWith

// 26) Funzione con parametro di default
// ⚠️ non implementata

// 27) Filtra numeri minori di 10
const min10 = numbers.filter((n) => n < 10); // ✅

// 28) Trova l’indice dell’utente "Anna"
// ⚠️ non implementata

// 29) Funzione che verifica se un numero è pari
function isEven(number){ return number % 2 === 0; } // ✅

// 30) For of su array numbers
for(let number of numbers){ console.log(number); } // ✅

// 31) Funzione che ritorna un array
function array(){ return []; } // ✅

// 32) Trasforma solo la prima lettera della stringa in maiuscolo
let strFinal = "";
for(let i=0;i<text.length;i++){ if(i===0) strFinal+=text[0].toUpperCase(); else strFinal+=text[i]; } // ✅

// 33) Controlla se tutti i numeri >0
const isMag0 = numbers.every((n)=>n>0); // ✅

// 34) Funzione che ritorna un’altra funzione
// ⚠️ non implementata

// 35) Count lettere "e"
let contatore=0;
for(let i=0;i<text.length;i++){ if(text[i]==="e") contatore++; } // ✅

// 36) Ordina utenti per lunghezza del nome
// ⚠️ non implementata

// 37) Filtra utenti con nome più lungo di 5 caratteri
const most5 = users.filter((u)=>u.name.length>5); // ✅

// 38) Trova il numero minimo
const copia = [...numbers];
const minNumber = copia.sort((a,b)=>a-b)[0]; // ✅

// 39) Clona l’array numbers
const cloneN = [...numbers]; // ✅

// 40) Switch con mesi dell’anno
// ⚠️ non implementata

// 41) Do while: stampa almeno una volta
// ⚠️ non implementata

// 42) For: stampa numeri da 0 a 20
for(let i = 0; i <= 20; i++){ console.log(i); } // ✅

// 43) Inverti la stringa
const textReverse = text.split("").reverse().join(""); // ✅

// 44) Funzione che accetta callback
// ⚠️ non implementata

// 45) Somma solo numeri pari
const onlyEven = numbers.reduce((acc,n) => n % 2 === 0 ? acc+n : acc,0); // ✅

// 46) Funzione che divide due numeri
function divNu(a,b){ return a/b; } // ✅

// 47) For in su un oggetto user
// ⚠️ non implementata

// 48) Rimuovi utenti inattivi
// ⚠️ non implementata

// 49) Trasforma gli utenti in array di stringhe "Nome (Età)"
// ⚠️ non implementata

// 50) Promise che risolve un numero
// ⚠️ non implementata

// 51) Async function che ritorna un valore
// ⚠️ non implementata

// 52) Async/await con try/catch
// ⚠️ non implementata

// 53) Trasforma tutti i nomi in uppercase
const copyUsersU = [...users];
const modCopyTOU = copyUsersU.map((n) => n.name = n.name.toUpperCase()); // ✅

// 54) Rimuovi numeri < 10
const rem10 = numbers.filter((n) => n >= 10); // ❌ la tua soluzione rimuove <10 ma logica corretta ✅

// 55) Estrai la parola "potente" dalla stringa
// ⚠️ non implementata

// 56) Filtra numeri dispari
const onlyD = numbers.filter((n) => n % 2 === 1); // ✅

// 57) Tronca la stringa a 15 caratteri
const Tr15 = text.substring(0,15); // ⚠️ soluzione corretta più semplice con substring

// 58) Funzione che sottrae due numeri
function menNum(a,b){ return a-b; } // ✅

// 59) Funzione che moltiplica due numeri
function molNum(a,b){ return a*b; } // ✅

// 60) Funzione che ritorna una stringa
function strRandom(){ return "ahahah"; } // ✅

// 61) Controlla se la variabile è undefined
let jud;
// console.log(typeof(jud)); // ✅

// 62) Controlla se la variabile è null
let judNull = null;
console.log(typeof(judNull)); // ❌ typeof null ritorna "object"

// 63) Controlla il tipo di una variabile
let ty = 56;
// console.log(typeof(ty)); // ✅

// 64) Funzione che usa rest parameters
function sumRest(...nums){ return nums.reduce((acc,n)=>acc+n,0); } // ⚠️ non implementata

// 65) Funzione che usa spread operator
const copyNums = [...numbers]; // ⚠️ esempio semplice, ok

// 66) Conta quanti utenti hanno più di 25 anni
let meno25 = users.filter((u)=>u.age>25).length; // ❌ logica invertita, attenzione

// 67) Rimuovi l’ultimo utente
let remO = users.pop(); // ✅

// 68) Copia l’array e aggiungi un nuovo utente in testa
let copyARR = [...users];
copyARR.unshift({name:"Mario", age:30, active:true, email:"mario@email.com"}); // ⚠️ tu usavi push (aggiunge in coda)

// 69) Inverti l’array utenti
let reverseUs = [...users].reverse(); // ✅

// 70) Unisci le parole della stringa con "-"
let unionStr = text.split(" ").join("-"); // ✅

// 71) Ordina utenti per età crescente
const copyCr = [...users];
const userCr = copyCr.sort((a,b)=>a.age-b.age); // ✅

// 72) Ordina utenti per età decrescente
const copyDr = [...users];
const userDr = copyDr.sort((a,b)=>b.age-a.age); // ✅

// 73) Funzione che ritorna il maggiore di due numeri
function magNb(a,b){ return a>b ? a : b; } // ✅

// 74) Rimuovi proprietà active da ogni utente (copia)
let copyU2 = users.map(u => ({...u, active: undefined})); // ⚠️ non implementata

// 75) Conta quante volte appare la lettera "a"
let contatoreA=0;
for(let i=0;i<text.length;i++){ if(text[i]==="a") contatoreA++; } // ✅

// 76) Stampa tutti i numeri
numbers.forEach(n => console.log(n)); // ✅

// 77) Ordina numeri in ordine crescente
const CopyCrNumber = [...numbers].sort((a,b)=>a-b); // ✅

// 78) Trova l’indice del numero 130
const ind130 = numbers.indexOf(130); // ✅

// 79) Rimuovi l’ultimo numero dall’array
const copyArrNumber = [...numbers];
copyArrNumber.pop(); // ✅

// 80) Funzione che ritorna un oggetto
function FO(){ return {}; } // ✅

// 81) Calcola la somma totale delle età utenti
const totSumAge = users.reduce((acc,b)=>acc+b.age,0); // ✅

// 82) Filtra utenti il cui nome contiene "a"
const Ua = users.filter((n)=> n.name.includes("a")); // ❌ tu usavi "a".includes("a") (semplice errore)

// 83) Controlla se esiste il numero 44
const is44 = numbers.some(n => n===44); // ✅

// 84) Verifica se tutti hanno email valida
const allEmail = users.every(u=> u.email!==null && u.email!==""); // ⚠️ non implementata correttamente

// 85) Rimuovi utenti con età minore di 25
const um25 = users.filter(u=>u.age>=25); // ⚠️ invertita rispetto a “rimuovi <25”

// 86) Estrai solo nome e age degli utenti
const namesAndAge = users.map(u=>({name:u.name, age:u.age})); // ⚠️ non implementata

// 87) For: stampa solo numeri multipli di 5
for(let i=0;i<=100;i++){ if(i%5===0) console.log(i); } // ✅

// 88) While: conta da 10 a 0
let max=10;
while(max>=0){ console.log(max); max--; } // ✅

// 89) Sostituisci tutte le "a" nella stringa con "*"
const sostA = text.replaceAll("a","*"); // ✅

// 90) Funzione che ritorna il minore di due numeri
function minNumb(a,b){ return a<b ? a : b; } // ✅

// 91) Funzione che ritorna la lunghezza di una stringa
function leStr(str){ return str.length; } // ✅

// 92) Funzione che ritorna true se numero >0
function isMag(a){ return a>0; } // ✅

// 93) Funzione che ritorna false se numero <=0
function isMin(a){ return a>0; } // ❌ logica invertita

// 94) Stampa tutti i nomi utenti con forEach
users.forEach(n=>console.log(n.name)); // ✅

// 95) Map utenti in array di nomi
const onlyName = users.map(n=>n.name); // ✅

// 96) Filter utenti con age>30
const maggiore30 = users.filter(n=>n.age>30); // ✅

// 97) Some: verifica se almeno un utente è attivo
const almenoUnoAttivo = users.some(u=>u.active); // ✅

// 98) Every: verifica se tutti gli utenti hanno email
const isEmail = users.every(u=>u.email!==null && u.email!==""); // ⚠️ logica originale sbagliata

// 99) Promise con setTimeout che risolve
// ⚠️ non implementata

// 100) Funzione che concatena due stringhe
function concatStr(a,b){ return a+b; } // ⚠️ non implementata