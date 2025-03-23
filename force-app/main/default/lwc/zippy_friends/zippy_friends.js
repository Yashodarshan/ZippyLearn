import { LightningElement, track } from 'lwc';

export default class FriendsList extends LightningElement {
    @track friends = [
        { id: 1, name: "Alice Johnson", status: "Online", statusClass: "online", role: "Mentor", roleClass: "badge mentor", avatar: "http://placebear.com/250/250" },
        { id: 2, name: "Michael Smith", status: "Offline", statusClass: "offline", role: "Industry Expert", roleClass: "badge expert", avatar: "http://placebeard.it/250/250" },
        { id: 3, name: "Emma Davis", status: "Online", statusClass: "online", avatar: "http://placebeard.it/250/250" },
        { id: 4, name: "Daniel Wilson", status: "Offline", statusClass: "offline", avatar: "http://placebeard.it/250/250" },
        { id: 5, name: "Sophia Martinez", status: "Online", statusClass: "online", role: "Mentor", roleClass: "badge mentor", avatar: "https://robohash.org/mail@ashallendesign.co.uk" }
    ];

    @track filteredFriends = [...this.friends];

    handleSearch(event) {
        const searchTerm = event.target.value.toLowerCase();
        this.filteredFriends = this.friends.filter(friend => 
            friend.name.toLowerCase().includes(searchTerm)
        );
    }

    handleChatClick(event) {
        alert("Chat feature coming soon! 🚀");
    }
}
