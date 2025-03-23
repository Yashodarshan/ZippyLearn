import { LightningElement, track } from 'lwc';

export default class Zippy_chatbot extends LightningElement {
    @track isOpen = false;
    @track messages = [
        { id: 1, text: "Hello! How can I assist you today?", type: "bot" }
    ];
    messageId = 2;

    toggleChat() {
        this.isOpen = !this.isOpen;
    }

    handleKeyUp(event) {
        if (event.key === 'Enter') {
            this.sendMessage();
        }
    }

    sendMessage() {
        let input = this.template.querySelector('input');
        let messageText = input.value.trim();
        if (!messageText) return;
        
        this.messages = [...this.messages, { id: this.messageId++, text: messageText, type: "user" }];
        input.value = '';
        setTimeout(() => this.autoReply(), 1000);
    }

    autoReply() {
        const replies = [
            "Interesting! Tell me more.",
            "I see. What else would you like to ask?",
            "That sounds great! Need more details?",
            "Can you elaborate on that?"
        ];
        let reply = replies[Math.floor(Math.random() * replies.length)];
        this.messages = [...this.messages, { id: this.messageId++, text: reply, type: "bot" }];
    }
}