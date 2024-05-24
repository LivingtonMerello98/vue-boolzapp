'use strict';
console.log('stai eseguendo la milestone 3');

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
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
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
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
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
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                }
            ],
            selectedChatIndex: 0, // Indice della chat selezionata  
            newMessage: '' 
        }
    },
    methods: {

        //input per apertura chat
        openChats(contactIndex) {
            this.selectedChatIndex = contactIndex;
            console.log('Chat aperta:', this.contacts[contactIndex].name);
        },

        // messaggio inviato
        sendMessage() {
            if (this.newMessage.trim() !== '') {
                const myMessage = {
                    date: '',
                    message: this.newMessage,
                    status: 'sent'
                };
                this.contacts[this.selectedChatIndex].messages.push(myMessage);
                this.newMessage = ''; // Pulizia campo di input

                 // Invia la risposta automatica dopo 1 secondo
                 setTimeout(this.receiveMessage, 1000);
            }
        },

        // messaggio ricevuto
        receiveMessage() {
            const responses = [
                'ciaoooo',
                'guarda ora, non posso...ci sentiam più tardi? :)',
                'ho visto il messaggio, torno a casa e ti rispondo... a dopo!',
                'dammi giusto qualche secondo... ci sei stasera no?',
                'ma da quanto tempo!'
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            const botMessage = {
                date: '',
                message: randomResponse,
                status: 'received'
            };
            this.contacts[this.selectedChatIndex].messages.push(botMessage);
        }
    }
}).mount('#app');
