import { LightningElement, track } from 'lwc';

export default class Zippy_hackathons extends LightningElement {
    @track userName = '';
    @track isClan = false;
    @track clanName = '';
    @track clanMembers = [];
    @track registeredParticipants = [];
    @track hackathons = [
        { id: 201, title: "AI & ML Championship", description: "Push AI to its limits!", 
            date: "April 10, 2025", type: "Online" , join: true},
        { id: 202, title: "CyberSec Battle", description: "Capture the flag challenge!", 
            date: "April 15, 2025", type: "Offline", join: false},
        { id: 203, title: "Space Tech Hack", description: "Innovate for space exploration!", 
            date: "April 20, 2025", type: "Hybrid", join: true},
    ];

    showMaps(){
        window.open('https://www.google.com/maps/place/BITS+Pilani+Hyderabad+Auditorium/@17.5454268,78.567987,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb83dfd971f19f:0x5ca299dd0c4577ad!8m2!3d17.5454217!4d78.5705673!16s%2Fg%2F11tfgxqgx_?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D');
    }

    handleUserNameChange(event) {
        this.userName = event.target.value;
    }

    handleRegisterTypeChange(event) {
        this.isClan = event.target.value === "clan";
    }

    handleClanNameChange(event) {
        this.clanName = event.target.value;
    }

    addClanMember() {
        const newMember = { id: Date.now(), name: `Member ${this.clanMembers.length + 1}` };
        this.clanMembers = [...this.clanMembers, newMember];
    }

    registerUser() {
        if (this.userName.trim() === '') {
            alert("Please enter your name to register.");
            return;
        }

        let participant = {
            id: Date.now(),
            name: this.isClan ? `${this.clanName} Clan` : this.userName,
            type: this.isClan ? "Clan" : "Solo"
        };

        this.registeredParticipants = [...this.registeredParticipants, participant];
    }

    joinHackathon(event) {
        const hackathonId = event.target.dataset.id;
        alert(`You have joined hackathon ID: ${hackathonId}!`);
    }
}
