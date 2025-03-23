import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Zippy_welcomeScreen extends NavigationMixin(LightningElement) {

    showQuestionnare =false;
    aiAssist = false;

    startPersonalization(){
        this.showQuestionnare = true;
    }

    skipPersonalization(){
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Personalized_Dashboard__c'
            },
            state: {
                c__personal: 'false'
            }
        });
    }

    showAI(){
        this.aiAssist = true;
    }
}