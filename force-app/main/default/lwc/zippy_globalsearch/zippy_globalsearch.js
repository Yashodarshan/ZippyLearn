import { LightningElement, track, wire } from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import dashboardLMS from '@salesforce/messageChannel/zippy_dashboardselect__c';

const allData = {
    videos: ['Intro to AI', 'Machine Learning Basics', 'Deep Learning Crash Course', 'Ace the coding interviews', 'Product Management Framework'],
    lectures: ['Live Data Science Q&A', 'React for Beginners','Deep Learning Basics','Introduction to AI','Deep Learning Basics'],
    quizzes: ['Python Basics Quiz', 'JavaScript Advanced Quiz','AIML Quiz'],
    friends: ['Alice Johnson', 'Micheal Smith', 'Emma Davis'],
    feed: ['AI in 2025 - Discussion', 'How to Ace Coding Interviews','Completed Python Course','Checkout AI tutorial'],
    hackathons: ['AI Hackathon 2025', 'Blockchain Challenge', 'AI & ML Championship', 'CyberSec Battle','Space Tech Hack']
};

export default class Zippy_globalsearch extends LightningElement {

    @wire(MessageContext)
    messageContext;

    menuItems ={
        'videos' : '1-1',
        'lectures' : '1-2',
        'quizzes' : '1-3',
        'friends' : '2-2',
        'feed' : '2-3',
        'hackathons' : '2-5'
    };

    @track searchResults = [];
    selectedCategory = 'all';

    // Close the search on clicking outside or close button
    closeSearch() {
        this.dispatchEvent(new CustomEvent('closesearch'));
    }

    handleCategoryChange(event) {
        this.selectedCategory = event.target.value;
        this.handleSearch();
    }

    handleClickOutside(event) {
        // Check if the clicked element is inside the search container
        if (!this.template.querySelector('.search-container').contains(event.target)) {
            this.closeSearch();
        }
    }

    handleSearch(event) {
        const query = event ? event.target.value.toLowerCase() : '';

        const data = this.selectedCategory === 'all'
            ? Object.values(allData).flat()
            : allData[this.selectedCategory] || [];

        this.searchResults = query
            ? data.filter(item => item.toLowerCase().includes(query))
            : [];
    }

    // Navigate when user clicks a search item
    navigateToPage(event) {
        const selectedItem = event.currentTarget.dataset.name;
        for (const [key, value] of Object.entries(allData)) {
            if(value.includes(selectedItem)){
                publish(this.messageContext, dashboardLMS, {
                    section: this.menuItems[key]
                });
                break;
            }
        }
        this.closeSearch();
    }
}
