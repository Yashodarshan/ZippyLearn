import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { NavigationMixin } from 'lightning/navigation';

export default class Zippy_header extends NavigationMixin(LightningElement) {
    isOverlayVisible = false;
    showUserData = false;
    menuOpen = false; 
    isSearchOpen = false;
    showSearchIcon = false;

    @wire(CurrentPageReference)
    getStateParameters(currentPageReference) {
        if (currentPageReference) {
            if(currentPageReference.state?.c__personal){
                this.showSearchIcon = true;
            } else{
                this.showSearchIcon = false;
            }
        }
    }

    connectedCallback(){
        this.showUserData = sessionStorage.getItem('showUserData') === 'true';
    }

    openSearch(){
        this.isSearchOpen = true;
    }

    closeSearch(){
        this.isSearchOpen = false;
    }

    gohome(){
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Home'
            }
        });
    }

    toggleOverlay() {
        this.isOverlayVisible = !this.isOverlayVisible;
    }

    autoFill() {
        this.showUserData = true;
        sessionStorage.setItem('showUserData','true');
        this.closeLogin();
        window.location.reload();
    }
    
    closeLogin() {
        this.isOverlayVisible = false;
    }

    toggleMenu() {
        this.menuOpen = !this.menuOpen;
    }

    logout(){
        sessionStorage.clear();
        window.location.reload();
    }

    viewProfile(){
        this.closeMenu();
    }

    // Close menu when clicking outside
    closeMenu() {
        this.menuOpen = false;
    }

    // Prevent closing when clicking inside the menu
    stopPropagation(event) {
        event.stopPropagation();
    }
}