import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Zippy_loginQuestionnare extends NavigationMixin(LightningElement) {
    @track currentIndex = 0;
    @track isTransitioning = false;

    questions = [
        {
            id: 1,
            question: 'I am ...',
            options: [
                { id: 'a1', label: 'Student', className: 'card' },
                { id: 'a2', label: 'Teacher', className: 'card' },
                { id: 'a3', label: 'Working Professional', className: 'card' },
                { id: 'a4', label: 'Retired', className: 'card' }
            ]
        },
        {
            id: 2,
            question: 'I want to...',
            options: [
                { id: 'b1', label: 'Learn Something New', className: 'card' },
                { id: 'b2', label: 'Improve My Skills', className: 'card' },
                { id: 'b3', label: 'Prepare for Exam', className: 'card' },
                { id: 'b4', label: 'Teach Others', className: 'card' }
            ]
        },
        {
            id: 3,
            question: 'I prefer to learn through...',
            options: [
                { id: 'c1', label: 'Text Articles', className: 'card' },
                { id: 'c2', label: 'Infographics', className: 'card' },
                { id: 'c3', label: 'Quizzes', className: 'card' },
                { id: 'c4', label: 'Videos', className: 'card' }
            ]
        }
    ];

    get currentQuestion() {
        return this.questions[this.currentIndex];
    }

    handleAnswer(event) {
        if(event.detail[0]!=='c'){
            this.isTransitioning = true;
            setTimeout(() => {
                if (this.currentIndex < this.questions.length - 1) {
                    this.currentIndex++;
                }
                this.isTransitioning = false;
            }, 500);
        } else{
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
}