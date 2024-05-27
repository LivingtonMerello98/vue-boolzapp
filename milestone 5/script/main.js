console.log('stai eseguendo la milestone 5');

const { createApp } = Vue;

createApp({
    data() {
        return {
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
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
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
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
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
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
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
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
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
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }            
            ],
            selectedChatIndex: 0, // Indice della chat selezionata  
            newMessage: '',
            searchQuery: '', // Campo per la ricerca
        }
    },
    watch: {
        searchQuery(newQuery) {
            this.updateContactVisibility(newQuery);
        }
    },
    methods: {
        // Funzione per aggiornare la visibilità dei contatti
        updateContactVisibility(query) {
            query = query.toLowerCase().trim();
            this.contacts.forEach(contact => {
                contact.visible = contact.name.toLowerCase().includes(query);
            });
        },

        // Input per apertura chat
        openChats(contactIndex) {
            this.selectedChatIndex = contactIndex;
            console.log('Chat aperta:', this.contacts[contactIndex].name);
        },

        // Messaggio inviato
        sendMessage() {
            if (this.newMessage.trim() !== '') {
                const myMessage = {
                    date: new Date().toLocaleString(),
                    message: this.newMessage,
                    status: 'sent',
                    showFlag: false
                };
                this.contacts[this.selectedChatIndex].messages.push(myMessage);
                this.newMessage = ''; // Pulizia campo di input

                // Invia la risposta automatica dopo 1 secondo
                setTimeout(this.receiveMessage, 1000);
            }
        },

        // Messaggio ricevuto
        receiveMessage() {
            const responses = [
                'ciaoooo',
                'guarda, adesso non posso risponderti...ci sentiam più tardi? :)',
                'ho visto il messaggio, torno a casa e ti rispondo... a dopo!',
                'dammi giusto qualche secondo... ci sei stasera no?',
                'ma da quanto tempo!'
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            const botMessage = {
                date: new Date().toLocaleString(),
                message: randomResponse,
                status: 'received',
                showFlag: false
            };
            this.contacts[this.selectedChatIndex].messages.push(botMessage);
        },

        // Gestione visibilità flag
        flag(index) {
            this.contacts[this.selectedChatIndex].messages.forEach((message, i) => {
                message.showFlag = i === index ? !message.showFlag : false;
            });
        },

        deleteMessage(messageIndex) {
            console.log('messaggio eliminato:', messageIndex);
            this.contacts[this.selectedChatIndex].messages.splice(messageIndex, 1);
        }
    },
    mounted() {
        this.updateContactVisibility(this.searchQuery);
    }                       
}).mount('#app');

