import { LightningElement, track } from 'lwc';

export default class Zippy_achievementLeaderboard extends LightningElement {
    @track leaders = [
        { id: 1, rank: 1, name: 'Alice Johnson', achievement: 'Completed AI Mastery', points: 1500, progressStyle: 'width: 90%', avatar: "http://placebear.com/250/250" },
        { id: 2, rank: 2, name: 'John Smith', achievement: 'Top in Data Science', points: 1400, progressStyle: 'width: 85%', avatar: "http://placebeard.it/250/250"},
        { id: 3, rank: 3, name: 'Emma Brown', achievement: 'Best in Python', points: 1300, progressStyle: 'width: 80%', avatar: "https://robohash.org/mail@ashallendesign.co.uk" }
    ];
}