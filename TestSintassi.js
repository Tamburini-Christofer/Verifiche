//todo Rispondi alle seguenti domande di sintassi

// 1) Come dichiari una variabile usando let?
let var1 = 0;

// 2) Come dichiari una costante usando const?
const var2 = 0;

// 3) Come dichiari una variabile con var?
var var3 = 4

// 4) Come scrivi un commento su una sola riga?
// In questo modo

// 5) Come scrivi un commento su più righe?
/* 
In questo modo
*/ 

// 6) Come concatenare due stringhe usando +?
console.log("ciao mondo" + " " + "e universo")

// 7) Come usare template literal per inserire variabili in una stringa?
console.log(`${var1} è un numero che non vale molto`)

// 8) Come scrivere una funzione normale (function declaration)?
function sum () {
    //Codice
}

// 9) Come scrivere una funzione anonima (function expression)?
const sum2 = () => {
    // Cordice
}

// 10) Come scrivere una arrow function?
const sum3 = () => {
    //Codice
}

// 11) Come ritorni un valore da una funzione?
function val (a,b) {
    return a * b
}

// 12) Come passi parametri a una funzione?
function par (par1, par2) {
    return par1 + par2
}

// 13) Come dichiari un array con 3 elementi?
const arr3 = [1,2,3]

// 14) Come accedi al secondo elemento di un array?
console.log(arr3[1])

// 15) Come aggiungi un elemento alla fine di un array?
arr3.push(4)

// 16) Come rimuovi l’ultimo elemento di un array?
arr3.pop()

// 17) Come aggiungi un elemento all’inizio di un array?
arr3.unshift(0)

// 18) Come rimuovi il primo elemento di un array?
arr3.shift()

// 19) Come usare slice per ottenere una porzione di array?
arr3.slice(0,2)

// 20) Come usare splice per rimuovere o aggiungere elementi in un array?
arr3.splice(1,2)

// 21) Come usare map per trasformare un array?
const arrMap = arr3.map((n) => n * 2)

// 22) Come usare filter per filtrare elementi di un array?
const arrFil = arr3.filter((n) => n > 1)

// 23) Come usare reduce per sommare tutti gli elementi di un array?
const sumArr = arr3.reduce((acc,b) => acc + b, 0)

// 24) Come controlli se un array include un valore?
const is2 = arr3.includes(2)

// 25) Come accedi a un valore di un oggetto tramite proprietà?
const people = {
    nome: "Gianni",
    età: 22
}

console.log(people.nome || people["nome"])

// 26) Come aggiungi una nuova proprietà a un oggetto?ù
people.lavoro = "fattorino"

// 27) Come rimuovi una proprietà da un oggetto?

// 28) Come usare Object.keys per ottenere le chiavi di un oggetto?
console.log(Object.keys(people))

// 29) Come usare Object.values per ottenere i valori di un oggetto?
console.log(Object.values(people))

// 30) Come usare Object.entries per ottenere coppie chiave-valore?
console.log(Object.entries(people))

// 31) Come scrivi un if semplice?
if(1 > 2) {
    return true
}

// 32) Come scrivi un if…else?
if(1 > 2) {
    return true
}
else {
    return false
}

// 33) Come scrivi un if…else?
if(5 > 6) {
    return "Ciao"}
else if (5 < 6) {
    return "NonCiao"}
else {
    return "Miao"}

// 34) Come scrivi un ternary operator?
let isPreferito = true;

console.log(isPreferito ? "Preferito" : "Non preferito ")

// 35) Come scrivi un ciclo for standard?
for(let i = 0; i <= 10; i++) {
    console.log(i)
}

// 36) Come scrivi un ciclo for…of?
for(let values of arr3) console.log(values)

// 37) Come scrivi un ciclo for…in?
for(let key in people) console.log(people)

// 38) Come scrivi un ciclo while?
let i = 10;

while(i >= 0) {
    console.log(i)
    i--
}

// 39) Come scrivi un ciclo do…while?
do {
    i--
}
while(i >= 0) {
    console.log(i)
    i--
}
// 45) Come lanci un’eccezione con throw?

try{
    //codice
}
catch(err){
    console.log(new throw "Errore " err) 
}

// 46) Come gestisci errori con try…catch?
try{
    //codice
}
catch(err){
    console.log(err) 
}

// 47) Come dichiari una Promise?
let call = new Promise(req,res)

// 48) Come usi async/await con fetch?
async function fetch () {
    const data = await fetch(url)
    const dataRes = await dara.json()
    console.log(dataRes)
}

// 49) Come dichiari una funzione immediatamente invocata (IIFE)?
(function iife (){

}, ())

// 50) Come esporti ed importi moduli ES6?
export default function aba
import Aba from "link"

//! Valutazione

//*✅ Corrette: 33
//!❌ Sbagliate: 17

//* 33 / 50 → 66%

// 👉 Base solida
// ⚠️ Da fissare per l’esame:

// return vs console.log
// throw
// Promise
// async/await
// moduli ES6
// for...in

//! Risposte:

// 1) let var1 = 0; ✅

// 2) const var2 = 0; ✅

// 3) var var3 = 4; ✅

// 4) commento singola riga ✅

// 5) commento multi-linea ✅

// 6) concatenazione stringhe con + ✅

// 7) template literal `${}` ✅

// 8) function declaration ✅

// 9) function expression ❌ (hai usato arrow function)

// 10) arrow function ✅

// 11) return da funzione ✅

// 12) parametri funzione ✅

// 13) array con 3 elementi ✅

// 14) accesso secondo elemento array ✅

// 15) push ✅

// 16) pop ✅

// 17) unshift ✅

// 18) shift ✅

// 19) slice ✅

// 20) splice ✅

// 21) map ✅

// 22) filter ✅

// 23) reduce ✅

// 24) includes ✅

// 25) accesso proprietà oggetto ✅

// 26) aggiunta proprietà oggetto ✅

// 27) rimozione proprietà ❌ (manca delete)

// 28) Object.keys ✅

// 29) Object.values ✅

// 30) Object.entries ✅

// 31) if semplice ❌ (return fuori funzione)

// 32) if / else ❌ (return fuori funzione)

// 33) if / else if / else ❌ (return fuori funzione)

// 34) ternary operator ✅

// 35) for standard ✅

// 36) for...of ✅

// 37) for...in ❌ (stampavi people invece di people[key])

// 38) while loop ✅

// 39) do...while ❌ (sintassi errata)

// 45) throw ❌ (sintassi errata)

// 46) try / catch ✅

// 47) Promise ❌ (manca executor function)

// 48) async / await fetch ❌ (fetch sovrascritta + typo)

// 49) IIFE ❌ (sintassi errata)

// 50) export / import ❌ (sintassi incompleta)
