import { LightningElement, track } from 'lwc';

export default class Zippy_chatter extends LightningElement {
    @track newPost = '';
    @track posts = [
        { id: 1, user: "Alice Johnson", message: "Just completed the Python course! 🎉", avatar: "http://placebear.com/250/250", reactions: { heart: 5, like: 8, fire: 2, laugh: 3 } },
        { id: 2, user: "Michael Smith", message: "Check out this amazing AI tutorial! 🤖", avatar: "http://placebeard.it/250/250", reactions: { heart: 3, like: 4, fire: 6, laugh: 1 } }
    ];

    handlePostChange(event) {
        this.newPost = event.target.value;
    }

    handlePost() {
        if (this.newPost.trim() !== '') {
            const newPost = {
                id: Date.now(),
                user: "You",
                message: this.newPost,
                avatar: "https://robohash.org/mail@ashallendesign.co.uk",
                reactions: { heart: 0, like: 0, fire: 0, laugh: 0 }
            };
            this.posts = [newPost, ...this.posts];
            this.newPost = '';
        }
    }

    handleReaction(event) {
        const postId = Number(event.target.dataset.id);
        const reaction = event.target.dataset.reaction;
        
        this.posts = this.posts.map(post => {
            if (post.id === postId) {
                return { ...post, reactions: { ...post.reactions, [reaction]: post.reactions[reaction] + 1 } };
            }
            return post;
        });
    }
}
