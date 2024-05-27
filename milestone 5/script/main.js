console.log('stai eseguendo la milestone 5');

const { createApp } = Vue;

createApp({
    data() {
        return {
            // array di contatti
            contacts: [
                {
                    name: 'Michele',
                    avatar: './assets/img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            showFlag: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent',
                            showFlag: false
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received',
                            showFlag: false
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './assets/img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent',
                            showFlag: false
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received',
                            showFlag: false
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent',
                            showFlag: false
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './assets/img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received',
                            showFlag: false
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent',
                            showFlag: false
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received',
                            showFlag: false
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './assets/img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent',
                            showFlag: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received',
                            showFlag: false
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './assets/img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent',
                            showFlag: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received',
                            showFlag: false
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './assets/img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent',
                            showFlag: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received',
                            showFlag: false
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent',
                            showFlag: false
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './assets/img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent',
                            showFlag: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received',
                            showFlag: false
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './assets/img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received',
                            showFlag: false
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent',
                            showFlag: false
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received',
                            showFlag: false
                        }
                    ],
                }            
            ],
            selectedChatIndex: 0, // Indice della chat selezionata  
            newMessage: '',
            searchQuery: '', // Campo per la ricerca
            isChatOpen: false, // Booleano per controllare se la chat è aperta
            isTyping: false, //booleano per tracciare quando il "bot" sta digitando
        }
    },
    watch: {

    // Funzione che viene chiamata quando la query di ricerca viene modificata
        searchQuery(newQuery) {
        // Aggiorna la visibilità dei contatti in base alla nuova query di ricerca
        this.updateContactVisibility(newQuery);
        }

    },
    methods: {
        // Funzione per aggiornare la visibilità dei contatti in base alla query di ricerca
        updateContactVisibility(query) {
        // Trasforma la query in minuscolo e rimuove gli spazi bianchi in eccesso
        query = query.toLowerCase().trim();
        // Itera su ogni contatto
        this.contacts.forEach(contact => {
            // Imposta la visibilità del contatto in base alla corrispondenza con la query
            contact.visible = contact.name.toLowerCase().includes(query);
        });
        },


        // Funzione per aprire una chat quando un contatto viene cliccato
        openChats(contactIndex) {
        // Imposta l'indice della chat selezionata sul contatto cliccato
        this.selectedChatIndex = contactIndex;
        // Mostra la finestra della chat
        this.isChatOpen = true;
        // Registra nel registro la chat aperta
        console.log('Chat aperta:', this.contacts[contactIndex].name);
        },


        // Funzione per inviare un messaggio
        sendMessage() {
        // Controlla se il campo di input non è vuoto
        if (this.newMessage.trim() !== '') {
        // Crea un oggetto per il messaggio inviato
            const myMessage = {
                date: new Date().toLocaleString(), // Ottiene la data e l'ora corrente
                message: this.newMessage, // Ottiene il testo del messaggio dal campo di input
                status: 'sent', // Imposta lo stato del messaggio come inviato
                showFlag: false // Imposta la visibilità del flag a false
            };
            // Aggiunge il messaggio inviato alla lista dei messaggi del contatto selezionato
            this.contacts[this.selectedChatIndex].messages.push(myMessage);
            // Pulisce il campo di input dopo l'invio del messaggio
            this.newMessage = '';

            // Imposta isTyping su true per simulare la digitazione
            this.isTyping = true;

                // Invia la risposta automatica dopo 1 secondo
                setTimeout(() => {
                    // Chiama la funzione per ricevere un messaggio di risposta
                    this.receiveMessage();
                    // Imposta isTyping su false dopo aver ricevuto il messaggio di risposta
                    this.isTyping = false;
                }, 5000); // 5000 millisecondi (5 secondi) di ritardo per simulare una risposta automatica
            }
        },

        // Funzione per ricevere un messaggio di risposta automatica
        receiveMessage() {
            // Array di risposte possibili
            const responses = [
                'ciaoooo',
                'guarda, adesso non posso risponderti...ci sentiam più tardi? :)',
                'ho visto il messaggio, torno a casa e ti rispondo... a dopo!',
                'dammi giusto qualche secondo... ci sei stasera no?',
                'ma da quanto tempo!',
                'hei, sono in ufficio adesso',
                'ehi non posso risponderti, ti chiamo più tardi?'
            ];
            // Genera una risposta casuale selezionando un elemento dall'array
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            // Crea un oggetto per il messaggio ricevuto
            const botMessage = {
                date: new Date().toLocaleString(), // Ottiene la data e l'ora corrente
                message: randomResponse, // Ottiene una risposta casuale dall'array
                status: 'received', // Imposta lo stato del messaggio come ricevuto
                showFlag: false // Imposta la visibilità del flag a false
            };
            // Aggiunge il messaggio ricevuto alla lista dei messaggi del contatto selezionato
            this.contacts[this.selectedChatIndex].messages.push(botMessage);
        },

        // Funzione per gestire la visibilità del flag di un messaggio
        flag(index) {
            // Itera attraverso tutti i messaggi del contatto attualmente selezionato
            this.contacts[this.selectedChatIndex].messages.forEach((message, i) => {
            // Se l'indice del messaggio corrente è uguale all'indice passato come parametro,
            // allora inverte lo stato di visibilità del flag; altrimenti, imposta la visibilità a false
            message.showFlag = i === index ? !message.showFlag : false;
            });
        },

        deleteMessage(messageIndex) {
            console.log('messaggio eliminato:', messageIndex);
            this.contacts[this.selectedChatIndex].messages.splice(messageIndex, 1);
        },

        // Funzione per chiudere la chat e mostrare la sidebar
        closeChat() {
            this.isChatOpen = false;
        }
    },
    mounted() {
        this.updateContactVisibility(this.searchQuery);
    }                       
}).mount('#app');
