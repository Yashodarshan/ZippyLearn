import { LightningElement, track } from 'lwc';

export default class Zippy_lockedContentTile extends LightningElement {

    @track userPoints = 27900;
    @track isLocked = true;
    @track showRedeemModal = false;

    requiredPoints = 2500;

    // Show Redeem Modal
    openRedeemModal() {
        this.showRedeemModal = true;
    }

    // Close Modal
    closeModal(event) {
        if (event.target.classList.contains('modal-overlay') || event.target.classList.contains('close-btn')) {
            this.showRedeemModal = false;
        }
    }

    // Redeem Points & Unlock Content
    redeemCourse() {
        if (this.userPoints >= this.requiredPoints) {
            this.userPoints -= this.requiredPoints;
            this.isLocked = false;
            this.showRedeemModal = false;
        }
    }

}