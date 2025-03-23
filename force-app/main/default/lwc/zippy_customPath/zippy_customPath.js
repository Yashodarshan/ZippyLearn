import { LightningElement, track } from 'lwc';

export default class Zippy_customPath extends LightningElement {

    @track isModalOpen = false;
    @track isEditMode = false;
    @track goals = [];
    @track progress = {};

    get labelHeading(){
        return this.isEditMode ? 'Edit Learning Goal' : 'Create a Learning Goal'
    }

    get labelText(){
        return this.isEditMode ? "Update Goal" : "Save Goal"
    }

    newGoal = { title: '', startDate: '', endDate: '', dailyTime: '', progress: 0 };
    editingIndex = null;

    handleOpenModal() {
        this.isModalOpen = true;
        this.isEditMode = false;
        this.newGoal = { title: '', startDate: '', endDate: '', dailyTime: '', progress: 0 };
    }

    handleCloseModal() {
        this.isModalOpen = false;
        this.isEditMode = false;
    }

    handleInputChange(event) {
        const { name, value } = event.target;
        this.newGoal[name] = value;
    }

    handleSaveGoal() {
        if (!this.newGoal.title || !this.newGoal.startDate || !this.newGoal.endDate || !this.newGoal.dailyTime) {
            alert('Please fill in all fields');
            return;
        }

        if (this.isEditMode) {
            this.goals[this.editingIndex] = { ...this.newGoal };
        } else {
            this.goals = [...this.goals, { ...this.newGoal }];
        }

        this.handleCloseModal();
    }

    handleEditGoal(event) {
        const index = event.currentTarget.dataset.index;
        this.editingIndex = index;
        this.newGoal = { ...this.goals[index] };
        this.isEditMode = true;
        this.isModalOpen = true;
    }

    handleDeleteGoal(event) {
        const index = event.currentTarget.dataset.index;
        this.goals.splice(index, 1);
        this.goals = [...this.goals];
    }

    handleProgressChange(event) {
        const index = event.currentTarget.dataset.index;
        const value = event.target.value;
        this.goals[index].progress = value;
        this.goals = [...this.goals];
    }
}
