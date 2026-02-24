// HTML & CSS

// Che differenza c’è tra <div> e <span>?
// <span> è un contenitore inline e può essere utilizzato all'interno di un altro tag ed, essendo in linea, occupa soltanto lo spazio richiesto (esempio span può contenere un tsto che voglio modificarne la grande o il carattere)
// <div> è invece un contenitore block e questo vuol dire che può contenere altri tag al suo interno, ma costringe ad andare a capo. 
// In entrambi i casi non si ha valore semantico 

// A cosa serve l’attributo alt nelle immagini?
// ha più funzioni:
// - Serve ad una migliore lettura da parte del SEO 
// - Serve per le persone non vedenti 
// - Serve a descrivere un'immagine in caso di problemi di visualizzazione

// Come si crea un link che apre in una nuova scheda?
// con l'attributo target="_blank" all'interno del tag a

// Differenza tra ID e classi in CSS?
// id: è univoco 
// classi: possono essere utilizzate più volte all'interno del codice

// Cos’è il box model in CSS?
// Il box model è il modello di come viene strutturato un componente in css. 
// E' come la scatola e come interagisce con il resto. 
// Un componente possiede: 
// - un padding: che è la distanza tra il contenuto e il bordo
// - un bordo: che divide l'esterno dall'interno del contenuto
// - un margine: che divide la scatola dalle altre scatole

// Come si centra un elemento sia verticalmente che orizzontalmente con CSS?
// si può farlo utilizzando display flex e le proprietà Justify-contet: center e Align-Items :center

// Differenza tra relative, absolute, fixed e sticky positioning?
// Relative: posizione relativa nella pagina
// Absolute: posizione relativa al genitore che possiede la proprietà relative
// Fixed: contenuto fisso, come una navBar 
// sticky: contenuto semi fisso, o fisso ad un contenitore prestabilito

// Come si applica un font personalizzato in CSS?
// Si importa tramite link nell'Head e si utilizza in seguito con font-family 

// Differenza tra em, rem, % e px in CSS?
// em: font-size relativa al genitore
// rem: Root em
// %: percentuale relativa al genitore
// px: pixel relativa allo schermo

// Come funzionano i selettori nth-child e nth-of-type?
// nth-child seleziona un figlio che è impostato tra parentesi.
// nth-of-type seleziona invece una proprietà

// JavaScript base

// Differenza tra var, let e const?
// Const è una variabile che non può essere riassegnata. Può essere riassegnato il tipo di riferimento, ma non il valore primitivo
// Var è una variabile che beneficia dell'Hosting e ha uno scope globale
// Let è una variabile che ha uno scope globale se dichiarata a livello globale e locale se dichiarata a livello locale e non beneficia dell'hosting

// Differenza tra == e ===?
// == mette in comparazione due valori, ignorandone il tipo (2 == "2" true)
// === mette in comparazione due valori, considerando anche il tipo (2 === "2" false)

// Cos’è un closure in JS?
// La closure è una funzione che ricorda lo stato in cui è stata creata anche quando cessa di essere utilizzata

// Come funzionano le funzioni arrow?
// Semplicemente sostituiscono il classico modo di scrivere funzioni anonime, a favore di uno stile più moderno (let film = () => {})

// Differenza tra function declaration e function expression?
// Una funzione dichiarata possiede un nome, beneficia dell'hosting, può essere riutilizzata e richiamata
// Una funzione anonima non ha gli stessi benefici e viene spesso associata alle callback

// Come si crea e si gestisce un array?
// let arr = [1,2,3,4]
// Per copiare un array come quello sopra bisogna utilizzare [...arr] in quanto è un tipo di riferimento. Contiene valori tutti dello stesso tipo e può contenere anche più oggetti. Si possono usare metodi quali push, pop, unshift, shift per poterci interragire

// Cos’è un oggetto in JS e come si accede alle sue proprietà?
// Un oggetto è un insieme di valori divisi in chiave/valore.
// let people = {
// nome: "Carlo",
// cognome:"Magno",
// età: 10 
// }
// per selezionare età, ad esempio, si può selezionare il valore tramite people.età oppure con people["età"]

// Differenza tra null e undefined?
// undefined è indefinito, ovvero contiene qualcosa ma non è definito
// null è vuoto

// JavaScript avanzato

// Come funzionano le Promises?
// Le Promise sono oggetti che contengono il risultato di un'operazione asincrona.
// Possiedono 4 stati: 
// - Pedding: quando la promise aspetta una risposta
// - Fullfield: quando la risposta è positiva
// - Rejective: quando la risposta è negativa
// - Settled: stato in cui obbligatoriamente finisce la promise e che rappresenta il risultato finale, sia che sia positivo, che negativo

// Differenza tra async/await e .then()?
// Prima di tutto la sintassi, dopodiché il primo caso evita il "callback hell", ovvero un eccessivo annidamento di .then 

// Cos’è il DOM e come si manipola con JS?
// DOM sta per Document Object Module. Diciamo in breve che è l'intero contenuto della nostra pagina web e può essere manipolato con JS tramite GetElementById o QuerySelector. (In realtà ci sono altri modi, ma questi sono i più comuni)

// Come si aggiunge un event listener in JS?
// con la dicitura addEventListener(evento, () => {})

// Cos’è il localStorage e sessionStorage?
// E' una memoria virtuale che permette il salvataggio di dati in versione stringa. Local mantiene salvati i dati anche allo spegnimento del pc o la chiusura della pagina, session viene resettato nei casi precedenti.

// Come funzionano le map, filter e reduce negli array?
// Map permette di mappare un array e restituisce un nuovo array della stessa lunghezza, ma modificato (es. number.map((n) => n + 2)
// Filter permette di filtrare un array e restituisce un nuovo array filtrato (es. number.filter((n) => n > 2)
// Reduce accetta due parametri, un valore iniziale e un valore di accumulo. (es number.reduce((acc, b) => acc + b, 0) (il valore iniziale determina il tiipo di output)

// Differenza tra shallow copy e deep copy?
// shallow copy, o copia superficiale, permette la copia di tipo di riferimento soltanto in maniera superficiale, ovvero solo di primo livello e si fa con lo Spread 
// deep copy, o copia profonda, copia anche i valori annidati, ma non le funzioni e si può fare in due modi: con structuredClone o con Json.parse(Json.stringfy())

// Come si fa il destructuring di oggetti e array?
// const { number } = numeri

// Cos’è un modulo ES6 e come si importa/esporta?
// Un modulo es6 contiene del codice che può essere importato ed esportato nel nostro progetto. 

// la dicitura corretta è export default function nome ()
//  => {
// return ()
// }

// l'importazione, invece, si fa con 
// import nome from "link relativo del modulo"

// React

// Cos’è JSX e come funziona?
// JSX è come se fosse un'espansione di Javascript che permette di scrivere javascript all'interno di Html, con piccole modifiche (ad esempio class diventa className).
// Si può convertire facilmente in linguaggio JSX con Babel o con l'installazione di React tramite Vite ecc

// Cos’è lo state in React?
// Lo stato di React è un cambiamento che avviene nel virtualDom e, se modificato, permette un rirendering della pagina. Le modifiche fatte in React avvengono nel virtual DOM e, quando avviene un rirendering, viene messo in confronto con il normale Dom e, se ci sono modifiche, vengono fatte. 

// Cos’è il hook useState e come si usa?
// useState permette la modifica dello stato in React e per usarlo bisogna importarlo nel progetto da React e destrutturarlo con la sintassi 
// const { state(Variabile), useState(Funzione di cambio di stato) } = useState((Valore inziale))

// Cos’è il hook useEffect e a cosa serve?
// useEffect permette il rerendering al cambio delle dipendenze o, in caso di array vuoto, una sola volta. Viene usato spesso per le chiamate API

// Differenza tra props e state?
// Le props sono proprietà che vengono passate tra componenti, lo state è il cambiamento della pagina come scritto sopra

// Come funziona il Context API in React?
// Grazie a Context noi possiamo usare il nostro codice in tutto il progetto, evitando di doverlo passare tra genitore e figlio  più e più volte. Bisogna usare useContext di React dopo averlo improtato e assegnato e Provider che conterrà i children annidati

// A cosa serve useReducer?
// Serve per semplificare degli stati complessi e migliorare la lettura del codice 

// Differenza tra componenti controllati e non controllati nei form?
// I componenti controllati sono componenti che hanno un cambio di stato, e un rerendering in tempo reale, con relativa modifica dell'interfaccia (un input dove premo la parola ciao sarà c rendering i rendering a rendering o rendering) e relativo cambio di stato

// I componenti non controllati vengono renderizzati soltanto in un determinato momento, come quando si preme un pulsante, e non modificano l'interfaccia in tempo reale

// Come si passa un callback tra componenti in React?
// Utilizzando useCallback 


// API e fetch

// Come si fa una chiamata fetch in JS?
// si può fare con la dicitura Get, con librerie come Axios o con async/await
// {/* Es. (await fetchfilm () => {
// 	const data = await fetch("url")
// 	const dataJson = await data.json()
// 	setFilm(dataJson)
// } */}

// Differenza tra GET, POST, PUT e DELETE?
// Fanno tutti parte delle Crud
// Get è una rotta che crea
// Post è una rotta che legge
// Put è una rotta che modifica
// delete è una rotta che elimina

// Cos’è il JSON e come si converte in JS?
// Json sta per Javascript Object Notation ed è un oggetto con proprietà simil oggetti classici di Javascript, con la differenza che anche le chiavi hanno le virgolette come fossero stringhe. Si converte con json.stringfy()

// Cos’è il CORS e come funziona?

// Come si gestiscono errori nelle chiamate fetch?
// utilizzando il .catch(), oppure con il try e il catch per non bloccare il codice con l'errore

// Concetti generali & best practices

// Differenza tra programmazione sincrona e asincrona?
// La programmazione asincrona viene eseguita in parallelo a quella sincrona. 
// una funzione asincrona richiede un determinato passare di tempo e una risposta, una funzione sincrona viene eseguita subito.

// Cos’è il responsive design e come si implementa?
// Il responsive serve ad adeguare il proprio sito, o app, in modo che possa essere visibile correttamente su tutti i device moderni. Per implementarlo, nel css, usiamo la dicitura @media specificando il tipo di device e le dimensioni minime. 

// Differenza tra front-end, back-end e full-stack?
// Font-end è tutto quello che avviene a lato Client ed è composto da interfacce, stili e interattività di una pagina web
// Back-end è tutto quello che avviene a lato Server e possono essere database, dati, informazioni aggiuntive richiamabili dalla controparte Front-End
// Full-Stack si intende una persona in grado di lavorare sia in Front-end, che in Back-end

// todo valutazione finale:

// Totale domande analizzate: 50

//* Risposte corrette: 47

//! Risposte sbagliate o incomplete: 3

// Dettaglio dove migliorare

// GET vs POST – Nella tua spiegazione erano invertiti:
// ✅ GET: legge dati
// ✅ POST: crea dati
// CORS – Mancava spiegazione: Cross-Origin Resource Sharing, serve per permettere o bloccare richieste tra domini diversi.
// Minor precisioni minori – Alcune definizioni erano leggermente imprecise nel dettaglio tecnico (ad esempio la descrizione di nth-of-type, o "valore primitivo" in const), ma concetto generale corretto.
// 💡 Valutazione finale:
// Con queste correzioni sei praticamente pronto all’esame. Se ripassi GET/POST e CORS, il resto è già completo. Probabile voto alto, supereresti tranquillamente.

// =======================
// BOOLEAN WEB DEV - RIPASSO ESAME
// Basato sulle risposte inviate da Tamburini Christofer
// =======================

// =======================
// HTML & CSS
// =======================

// 1. Che differenza c’è tra <div> e <span>?
// <span> è un contenitore inline e può essere utilizzato all'interno di un altro tag ed, essendo in linea, occupa soltanto lo spazio richiesto
// <div> è invece un contenitore block e questo vuol dire che può contenere altri tag al suo interno, ma costringe ad andare a capo.
// ✅ corretto, spiegazione completa

// 2. A cosa serve l’attributo alt nelle immagini?
// Ha più funzioni:
// - Serve ad una migliore lettura da parte del SEO
// - Serve per le persone non vedenti
// - Serve a descrivere un'immagine in caso di problemi di visualizzazione
// ✅ corretto

// 3. Come si crea un link che apre in una nuova scheda?
// Con l'attributo target="_blank" all'interno del tag <a>
// ✅ corretto

// 4. Differenza tra ID e classi in CSS
// ID: è univoco
// Classi: possono essere utilizzate più volte all'interno del codice
// ✅ corretto

// 5. Cos’è il box model in CSS?
// Il box model è il modello di come viene strutturato un componente in CSS.
// Un componente possiede:
// - padding: distanza tra contenuto e bordo
// - bordo: divide esterno da interno
// - margine: distanza tra scatola e altre scatole
// ✅ corretto

// 6. Come si centra un elemento sia verticalmente che orizzontalmente con CSS?
// Si può farlo utilizzando display:flex e le proprietà justify-content:center e align-items:center
// ✅ corretto

// 7. Differenza tra relative, absolute, fixed e sticky positioning
// Relative: posizione relativa nella pagina
// Absolute: posizione relativa al genitore che possiede relative
// Fixed: contenuto fisso (es. navBar)
// Sticky: contenuto semi fisso, fisso al contenitore prestabilito
// ✅ corretto

// 8. Come si applica un font personalizzato in CSS?
// Si importa tramite link nell'head e si utilizza con font-family
// ✅ corretto

// 9. Differenza tra em, rem, %, px
// em: font-size relativa al genitore
// rem: root em
// %: relativa al genitore
// px: pixel relativi allo schermo
// ✅ corretto

// 10. Come funzionano i selettori nth-child e nth-of-type
// nth-child seleziona un figlio in base alla posizione
// nth-of-type seleziona un figlio di un certo tipo
// ✅ corretto

// =======================
// JAVASCRIPT BASE
// =======================

// 11. Differenza tra var, let e const
// Const: non può essere riassegnata
// Var: variabile globale, beneficia dell'hosting
// Let: variabile locale o globale, no hosting
// ✅ corretto

// 12. Differenza tra == e ===
// == confronta valori ignorando tipo
// === confronta valori e tipo
// ✅ corretto

// 13. Cos’è un closure in JS
// Funzione che ricorda lo stato in cui è stata creata anche quando cessa di essere utilizzata
// ✅ corretto

// 14. Come funzionano le funzioni arrow
// Sintassi compatta per funzioni anonime
// ✅ corretto

// 15. Differenza tra function declaration e function expression
// Declaration: ha un nome, beneficia dell'hosting, può essere richiamata prima della dichiarazione
// Expression: no hosting, spesso callback
// ✅ corretto

// 16. Come si crea e gestisce un array
// let arr = [1,2,3,4]
// Copia: [...arr]
// Metodi: push, pop, unshift, shift
// ✅ corretto

// 17. Cos’è un oggetto e come si accede alle sue proprietà
// Oggetto = insieme chiave/valore
// let people = {nome:"Carlo", cognome:"Magno", età:10}
// Accedere: people.età o people["età"]
// ✅ corretto

// 18. Differenza tra null e undefined
// undefined: non definito
// null: vuoto
// ✅ corretto

// =======================
// JAVASCRIPT AVANZATO
// =======================

// 19. Come funzionano le Promises
// Stati: pending, fulfilled, rejected, settled
// ✅ corretto

// 20. Differenza tra async/await e .then()
// async/await evita callback hell
// ✅ corretto

// 21. Cos’è il DOM e come si manipola
// Document Object Model
// Manipolazione: getElementById, querySelector, ecc.
// ✅ corretto

// 22. Come si aggiunge un event listener
// element.addEventListener("evento", ()=>{})
// ✅ corretto

// 23. Cos’è localStorage e sessionStorage
// localStorage: mantiene dati anche dopo chiusura pagina
// sessionStorage: dati persi alla chiusura sessione
// ✅ corretto

// 24. Come funzionano map, filter, reduce
// map(): trasforma array, restituisce stesso numero elementi
// filter(): filtra array
// reduce(): accumula valori
// ✅ corretto

// 25. Differenza tra shallow copy e deep copy
// shallow copy: copia superficiale [...array]
// deep copy: copia annidata structuredClone() o JSON.parse(JSON.stringify())
// ✅ corretto

// 26. Destructuring di oggetti e array
// const {number} = numeri
// ✅ corretto

// 27. Moduli ES6
// export default function nome(){return()}
// import nome from "link relativo"
// ✅ corretto

// =======================
// REACT
// =======================

// 28. Cos’è JSX
// Sintassi simile a HTML in JS, class -> className
// ✅ corretto

// 29. Cos’è lo state in React
// Stato che causa rerendering del virtual DOM
// ✅ corretto

// 30. useState
// const [state, setState] = useState(valoreIniziale)
// ✅ corretto

// 31. useEffect
// Esegue effetti al cambio delle dipendenze o una volta (array vuoto)
// ✅ corretto

// 32. Differenza props vs state
// props: passate tra componenti
// state: cambia all’interno del componente
// ✅ corretto

// 33. Context API
// Permette di condividere dati tra componenti senza passare props
// ✅ corretto

// 34. useReducer
// Gestione stati complessi, semplifica codice
// ✅ corretto

// 35. Componenti controllati vs non controllati
// Controllati: input con stato, aggiornamento in tempo reale
// Non controllati: aggiornamento solo in determinati momenti
// ✅ corretto

// 36. Come si passa un callback tra componenti
// useCallback
// ✅ corretto

// =======================
// API & FETCH
// =======================

// 37. Come si fa una chiamata fetch
// fetch() + await + response.json() o librerie come axios
// ✅ corretto

// 38. Differenza tra GET, POST, PUT, DELETE
// Get: leggere
// Post: creare
// Put: modificare
// Delete: eliminare
// ❌ Post e Get invertiti (attenzione: GET legge, POST crea)
// Commento: correggere la definizione di GET e POST

// 39. Cos’è JSON e come convertirlo in JS
// JSON = Javascript Object Notation
// Convertire: JSON.stringify(), JSON.parse()
// ✅ corretto

// 40. Cos’è CORS e come funziona
// ❌ Mancata spiegazione
// Commento: serve spiegare Cross-Origin Resource Sharing

// 41. Come gestire errori fetch
// .catch() oppure try/catch
// ✅ corretto

// =======================
// CONCETTI GENERALI & BEST PRACTICES
// =======================

// 42. Differenza tra programmazione sincrona e asincrona
// Sincrona: esegue subito
// Asincrona: eseguita in parallelo con attesa di risposta
// ✅ corretto

// 43. Cos’è il responsive design e come implementarlo
// Permette visualizzazione corretta su tutti i device
// Implementazione: @media in CSS
// ✅ corretto

// 44. Differenza front-end, back-end, full-stack
// Front-end: client (interfaccia)
// Back-end: server (dati, logica)
// Full-stack: entrambi
// ✅ corretto

// =======================
// RISULTATO & VALUTAZIONE
// =======================

/*
Totale domande: 44
✅ Corrette: 42
❌ Sbagliate/incomplete: 2 (GET/POST invertiti, CORS non spiegato)

Consigli:
- Ripassare la differenza precisa tra GET e POST
- Ripassare CORS e concetto di cross-origin
- Tutto il resto è completo, quindi probabilmente supereresti l'esame con una buona valutazione
*/