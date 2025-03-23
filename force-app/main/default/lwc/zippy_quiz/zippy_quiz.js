import { LightningElement, track } from 'lwc';

export default class Zippy_quiz extends LightningElement {
    @track quizzes = [
        {
            id: 1,
            name: "JavaScript Basics",
            description: "Test your fundamental JavaScript skills!",
            questionCount: 10,
            invitedFriends:[]
        },
        {
            id: 2,
            name: "Python for Beginners",
            description: "Quiz covering Python syntax and basics.",
            questionCount: 15,
            invitedFriends:[]
        },
        {
            id: 3,
            name: "AI & Machine Learning",
            description: "Test your knowledge about AI concepts!",
            questionCount: 12,
            invitedFriends:[]
        }
    ];

    @track selectedQuiz = null;

    handleQuizClick(event) {
        const quizId = event.currentTarget.dataset.id;
        this.selectedQuiz = this.quizzes.find(q => q.id == quizId);
    }

    startQuiz() {
        alert(`Starting Quiz: ${this.selectedQuiz.name}`);
    }

    closeQuiz() {
        this.selectedQuiz = null;
    }

    @track isModalOpen = false;
    @track currentQuiz;

    @track friendsList = [
        { id: 1, name: 'Alice', invited: false },
        { id: 2, name: 'Bob', invited: false },
        { id: 3, name: 'Charlie', invited: false },
        { id: 4, name: 'David', invited: false },
        { id: 5, name: 'Eva', invited: false }
    ];

    // Open the Invite Modal
    openInviteModal(event) {
        this.isModalOpen = true;
        this.currentQuiz = this.quizzes.find(q => q.id == event.target.dataset.id);
    }

    // Close the Invite Modal when clicking outside or pressing close
    closeInviteModal(event) {
        if (event.target.classList.contains('modal-overlay') || event.target.classList.contains('close-btn')) {
            this.isModalOpen = false;
        }
    }

    // Invite a Friend
    inviteFriend(event) {
        const friendId = parseInt(event.target.dataset.id);
        this.friendsList = this.friendsList.map(friend => {
            if (friend.id === friendId) {
                return { ...friend, invited: true };
            }
            return friend;
        });

        const invitedFriend = this.friendsList.find(friend => friend.id === friendId);
        if (invitedFriend) {
            this.currentQuiz.invitedFriends = [...this.currentQuiz.invitedFriends, invitedFriend];
        }
    }
}
