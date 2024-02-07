import { LightningElement, track } from 'lwc';

export default class CourseFee extends LightningElement {
    courseName = '';
    courseFee = '';
    numberOfStudents = '';
    @track totalCourseFee = '';


    calculateTotal() {
        this.totalCourseFee = parseFloat(this.courseFee) * parseFloat(this.numberOfStudents);
        console.log(this.totalCourseFee);
    }

    changeCourseName(event) {
        this.courseName = event.target.value;
    }

    changeCourseFee(event) {
        this.courseFee = event.target.value;

    }
    changeNumberOfStudents(event) {
        this.numberOfStudents = event.target.value;

    }

}