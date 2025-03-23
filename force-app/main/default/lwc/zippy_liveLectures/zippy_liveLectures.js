import { LightningElement, track } from 'lwc';

export default class Zippy_liveLectures extends LightningElement {
    @track lectures = [
        {
            id: 1,
            topic: "Deep Learning Basics",
            instructor: "Prof. Lisa Smith",
            date: "March 21, 2025",
            time: "2:00 PM - 3:30 PM",
            status: "Live",
            statusClass: "live",
            buttonName: "Join",
            isNotLive : false
        },{
            id: 2,
            topic: "Introduction to AI",
            instructor: "Dr. John Doe",
            date: "March 20, 2025",
            time: "10:00 AM - 11:30 AM",
            status: "Upcoming",
            statusClass: "upcoming",
            buttonName: "Join",
            isNotLive : true
        },
        {
            id: 3,
            topic: "Web Development Trends",
            instructor: "Mr. Alex Brown",
            date: "March 25, 2025",
            time: "5:00 PM - 6:30 PM",
            status: "Register",
            statusClass: "register",
            buttonName: "Register",
            isNotLive : false
        }
    ];

    handleJoin(event) {
        if(event.target.dataset.status === 'register'){
            window.open('https://www.eventbrite.com/d/india--bangalore/web-development/?page=1');
        } else if(event.target.dataset.status === 'live'){
            window.open('https://meet.google.com/qjj-zzqo-wgd');
        }
    }
}
