import { LightningElement, track } from 'lwc';

export default class Zippy_clans extends LightningElement {
    @track teamName = '';
    @track teamCreated = false;
    @track teamMembers = [
        { id: 1, name: "Alice Johnson", role: "Mentor", avatar: "http://placebeard.it/250/250" },
        { id: 2, name: "Michael Smith", role: "Industry Expert", avatar: "https://robohash.org/mail@ashallendesign.co.uk" }
    ];
    @track events = [
        { id: 101, name: "AI Hackathon", description: "Build innovative AI solutions", type: "Online", date: "March 20, 2025" },
        { id: 102, name: "Cybersecurity Workshop", description: "Learn ethical hacking", type: "Offline", date: "March 25, 2025" },
        { id: 103, name: "Startup Pitch Fest", description: "Pitch ideas to investors", type: "Hybrid", date: "April 2, 2025" }
    ];

    handleTeamNameChange(event) {
        this.teamName = event.target.value;
    }

    createTeam() {
        if (this.teamName.trim() !== '') {
            this.teamCreated = true;
        }
    }

    inviteFriends() {
        const newMember = { id: Date.now(), name: "New Friend", role: "Teammate", avatar: "http://placebear.com/250/250" };
        this.teamMembers = [...this.teamMembers, newMember];
    }

    joinEvent(event) {
        const eventId = event.target.dataset.id;
        alert(`Your team has joined event ID: ${eventId}!`);
    }
}
