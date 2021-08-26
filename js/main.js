// Consegna:
// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

// creo lista cognomi con un array

var cognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

// chiedo all'utente di inserire il suo cognome e lo aggiungo nell'array

var cognomeUtente = prompt("Inserisci il tuo cognome");

// transformo la prima lettera del cognome inserito dall'utente in maiuscolo

cognomeUtente = cognomeUtente.charAt(0).toUpperCase() + cognomeUtente.substring(1);

// aggiungo il cognome inserito dall'utente nell'array

cognomi.push(cognomeUtente);

// ordino alfabeticamente la lista dei cognomi nell'array

cognomi.sort();

// mostro tutti i singoli cognomi ordinati alfabeticamente

for (var i = 0; i < cognomi.length; i++) {
    document.getElementById("lista").innerHTML += "<br>" + cognomi[i] + "<br>";
}

// scrivo anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

document.getElementById("cognome").innerHTML += (cognomi.indexOf(cognomeUtente) + 1) + ".";
