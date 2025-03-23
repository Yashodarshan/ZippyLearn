import { LightningElement, wire, track } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import dashboardLMS from '@salesforce/messageChannel/zippy_dashboardselect__c';

export default class Zippy_dashboard extends LightningElement {
    showSpinner = true;

    @wire(CurrentPageReference)
    getStateParameters(currentPageReference) {
       if (currentPageReference) {
          if(currentPageReference.state?.c__personal === 'true'){
            setTimeout(() => {
                this.showSpinner = false;
            }, 1500);
          } else{
            this.showSpinner = false;
          }
        }
    }

    subscription = null;

    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        this.subscription = subscribe(
            this.messageContext,
            dashboardLMS,
            (message) => {
                this.handleMessage(message);
            }
        );
    }

    handleMessage(message) {
        this.selectedContent = message.section;
    }

    disconnectedCallback() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    @track menuItems = [
        { id: '1', title: 'My Learning', subItems: [
            { id: '1-1', label: 'Recorded Videos' },
            { id: '1-2', label: 'Live Lectures' },
            { id: '1-3', label: 'Quizzes' }
        ]},
        { id: '2', title: 'Community', subItems: [
            { id: '2-1', label: 'Leaderboard' },
            { id: '2-2', label: 'Friends' },
            { id: '2-3', label: 'Feed' },
            { id: '2-4', label: 'Clans' },
            { id: '2-5', label: 'Hackathons' }
        ]}
    ];
    
    @track selectedContent = '0';

    get showVideos(){return this.selectedContent === '1-1';}
    get showLectures(){return this.selectedContent === '1-2';}
    get showQuizzes(){return this.selectedContent === '1-3';}
    get showLeaderboard(){return this.selectedContent === '2-1';}
    get showFriends(){return this.selectedContent === '2-2';}
    get showFeed(){return this.selectedContent === '2-3';}
    get showClans(){return this.selectedContent === '2-4';}
    get showHackathons(){return this.selectedContent === '2-5';}

    get hideUnlockBanner(){
        return (sessionStorage.getItem('showUserData') === 'true');
    }

    /*renderedCallback(){
        let elements = this.template.querySelectorAll('template');

        elements.forEach((el, index) => {
            let rect = el.getBoundingClientRect();
            console.log(`${el.classList[0]}: X=${rect.x}, Y=${rect.y}`);
        });
    }*/

    toggleAccordion(event) {
        const itemId = event.target.dataset.id;
        const content = this.template.querySelector(`.accordion-content[data-id="${itemId}"]`);
        const arrow = this.template.querySelector(`.arrow[data-id="${itemId}"]`);

        if(content){
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                arrow.classList.remove("rotate");
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                arrow.classList.add("rotate");
            }
        }
    }

    showContent(event) {
        this.selectedContent = event.target.dataset.id;
    }
}