import { LightningElement, track, api } from 'lwc';

export default class Zippy_userPreferences extends LightningElement {
    @api question;
    @api options;

    @track selectedOption = '';

    handleSelect(event) {
        const selectedId = event.currentTarget.dataset.id;
        this.selectedOption = selectedId;
        this.dispatchEvent(new CustomEvent('answer', { detail: selectedId }));
    }
}