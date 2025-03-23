import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Zippy_aiAssistant extends NavigationMixin(LightningElement) {
    openDashboard(){
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Personalized_Dashboard__c'
            },
            state: {
                c__personal: 'true'
            }
        });
    }
}