import { LightningElement } from 'lwc';

export default class Zippy_unlockAccess extends LightningElement {
    get showUnlockBanner(){
        return !(sessionStorage.getItem('showUserData') === 'true');
    }
}