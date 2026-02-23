//todo Rispondi alle seguenti domande sui metodi di ritorno in JavaScript:

// 1) "hello".toUpperCase() → "HELLO" String
  
// 2) "HELLO".toLowerCase() → "hello" String

// 3) "hello world".includes("world") → true Booleano

// 4) "hello world".startsWith("hell") → true Booleano

// 5) "hello world".endsWith("world") → true Booleano

// 6) "hello,world".split(",") → ["hello", "word"] Array

// 7) ["a","b","c"].join("-") → "abc" Stringa

// 8) [1,2,3,4].map(x => x * 2) → [2,4,6,8] un nuovo Array

// 9) [1,2,3,4].filter(x => x % 2 === 0) → [2,4] nuovo array filtrato

// 10) [1,2,3,4].reduce((acc, x) => acc + x, 0) → 10 Number 

// 11) [1,2,3].find(x => x > 1) → 2 Number 

// 12) [1,2,3].findIndex(x => x > 1) → 1 Number/indice

// 13) [1,2,3].some(x => x > 2) → true Booleano

// 14) [1,2,3].every(x => x > 0) → true Booleano

// 15) [1,2,3].includes(2) → true Booleano

// 16) [1,2,3].indexOf(2) → 1 Number/indice

// 17) [1,2,3,2].lastIndexOf(2) → 3 Number/indice

// 18) "hello world".indexOf("o") → 4 Number/indice

// 19) "hello world".lastIndexOf("o") → 7 Number/indice

// 20) "   hello   ".trim() → "hello" String

// 21) "   hello   ".trimStart() → "hello   " String

// 22) "   hello   ".trimEnd() → ? "   hello" String

// 23) "hello world".replace("world","JS") → "hello JS" String

// 24) "hello world".replaceAll("l","x") → "hexxo world" String

// 25) [1,2,3].push(4) → [1,2,3,4] Array

// 26) [1,2,3].pop() → [1,2] Array

// 27) [1,2,3].shift() → [2,3] Array

// 28) [1,2,3].unshift(0) → [0,1,2,3] Array

// 29) [1,2,3].concat([4,5]) → [1,2,3,4,5] Array

// 30) [1,2,3,4].slice(1,3) → [2,3] Array

// 31) [1,2,3,4].splice(1,2) → 2 Number

// 32) [1,2,3].reverse() → [3,2,1] Array

// 33) [3,1,2].sort() → [1,2,3] Array

// 34) Math.floor(3.7) → 3 Number

// 35) Math.ceil(3.2) → 4 Number

// 36) Math.round(3.5) → 3 Number

// 37) Math.random() → 0 1 Number o 0 o 1

// 38) parseInt("123") → 123 Number

// 39) parseFloat("123.45") → 123.45 Number

// 40) Number("123") → 123 Number

// 41) String(123) → "123" String

// 42) Boolean(0) → false Booleano

// 43) Boolean(1) → true Booleano

// 44) Object.keys({a:1,b:2}) → [a,b] Array

// 45) Object.values({a:1,b:2}) → [1,2] Array

// 46) Object.entries({a:1,b:2}) → [a1,b2] Array

// 47) Array.isArray([1,2,3]) → true Booleano

// 48) isNaN("abc") → true Booleano

// 49) typeof 123 → "number" String

// 50) typeof "hello" → "string" String

//! Valutazione:

//* ✅ Corrette: 37

//! ❌ Sbagliate: 13

//* Valutazione: 37/50 → 72%

// 💡 Buon risultato, ma attenzione a:
// Metodi degli array che ritornano valori diversi dall’array modificato (push, pop, shift, unshift)
// splice, replaceAll, Math.round, typeof, Object.keys/entries
// Piccoli errori di sintassi o valori attesi nelle stringhe o array

//! Risposte:

// 1) "hello".toUpperCase() → "HELLO" String ✅
  
// 2) "HELLO".toLowerCase() → "hello" String ✅

// 3) "hello world".includes("world") → true Boolean ✅

// 4) "hello world".startsWith("hell") → true Boolean ✅

// 5) "hello world".endsWith("world") → true Boolean ✅

// 6) "hello,world".split(",") → ["hello", "word"] Array ❌ (corretto: ["hello","world"])

// 7) ["a","b","c"].join("-") → "abc" Stringa ❌ (corretto: "a-b-c")

// 8) [1,2,3,4].map(x => x * 2) → [2,4,6,8] un nuovo Array ✅

// 9) [1,2,3,4].filter(x => x % 2 === 0) → [2,4] nuovo array filtrato ✅

// 10) [1,2,3,4].reduce((acc, x) => acc + x, 0) → 10 Number ✅

// 11) [1,2,3].find(x => x > 1) → 2 Number ✅

// 12) [1,2,3].findIndex(x => x > 1) → 1 Number/indice ✅

// 13) [1,2,3].some(x => x > 2) → true Boolean ✅

// 14) [1,2,3].every(x => x > 0) → true Boolean ✅

// 15) [1,2,3].includes(2) → true Boolean ✅

// 16) [1,2,3].indexOf(2) → 1 Number/indice ✅

// 17) [1,2,3,2].lastIndexOf(2) → 3 Number/indice ✅

// 18) "hello world".indexOf("o") → 4 Number/indice ✅

// 19) "hello world".lastIndexOf("o") → 7 Number/indice ✅

// 20) "   hello   ".trim() → "hello" String ✅

// 21) "   hello   ".trimStart() → "hello   " String ✅

// 22) "   hello   ".trimEnd() → "   hello" String ✅

// 23) "hello world".replace("world","JS") → "hello JS" String ✅

// 24) "hello world".replaceAll("l","x") → "hexxo world" String ❌ (corretto: "hexxo worxd")

// 25) [1,2,3].push(4) → [1,2,3,4] Array ❌ (corretto: ritorna 4 Number)

// 26) [1,2,3].pop() → [1,2] Array ❌ (corretto: ritorna 3 Number)

// 27) [1,2,3].shift() → [2,3] Array ❌ (corretto: ritorna 1 Number)

// 28) [1,2,3].unshift(0) → [0,1,2,3] Array ❌ (corretto: ritorna 4 Number)

// 29) [1,2,3].concat([4,5]) → [1,2,3,4,5] Array ✅

// 30) [1,2,3,4].slice(1,3) → [2,3] Array ✅

// 31) [1,2,3,4].splice(1,2) → 2 Number ❌ (corretto: ritorna [2,3] Array)

// 32) [1,2,3].reverse() → [3,2,1] Array ✅

// 33) [3,1,2].sort() → [1,2,3] Array ✅

// 34) Math.floor(3.7) → 3 Number ✅

// 35) Math.ceil(3.2) → 4 Number ✅

// 36) Math.round(3.5) → 3 Number ❌ (corretto: 4 Number)

// 37) Math.random() → 0 1 Number o 0 o 1 ❌ (corretto: Number tra 0 e 1, escluso 1)

// 38) parseInt("123") → 123 Number ✅

// 39) parseFloat("123.45") → 123.45 Number ✅

// 40) Number("123") → 123 Number ✅

// 41) String(123) → "123" String ✅

// 42) Boolean(0) → false Boolean ✅

// 43) Boolean(1) → true Boolean ✅

// 44) Object.keys({a:1,b:2}) → [a,b] Array ❌ (corretto: ["a","b"])

// 45) Object.values({a:1,b:2}) → [1,2] Array ✅

// 46) Object.entries({a:1,b:2}) → [a1,b2] Array ❌ (corretto: [["a",1],["b",2]])

// 47) Array.isArray([1,2,3]) → true Boolean ✅

// 48) isNaN("abc") → true Boolean ✅

// 49) typeof 123 → "number" String ✅

// 50) typeof "hello" → "string" String ✅ 