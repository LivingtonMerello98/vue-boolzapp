
Boolzap è un'applicazione web sviluppata con Vue.js per la messaggistica istantanea simile a WhatsApp. Consente agli utenti di comunicare tra loro attraverso chat individuali.

Funzionalità

    •Visualizzazione della lista dei contatti
    •Apertura delle chat individuali
    •Invio e ricezione di messaggi
    •Ricerca dei contatti
    •Gestione della visibilità dei messaggi



Struttura del Progetto
Il progetto è strutturato in 4 file principali:

    •index.html: Contiene la struttura HTML della pagina web e l'inclusione delle librerie esterne.

    •CSS: contiene fogli di stile e gestione della rsponsività per mobile,tablet e dekstop

    •assets: risorse grafiche

    •script/main.js: Contiene il codice JavaScript per l'interazione dinamica con la pagina HTML utilizzando il framework Vue.js.



Sviluppatore
    •Nome: Livington Merello
    •Email: livington.merello@gmail.com
    •GitHub: LivingtonMerello98


/******


Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto


Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato


Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.


Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)


Milestone 5 - opzionale
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato