import { LightningElement } from 'lwc';

export default class MyFirstComponent extends LightningElement {
    firstInput;
    secondInput;
 finalValue;
    showTotal=false;

    firstInputChange(event) {
        this.firstInput = event.target.value;

    }

    secondInputChange(event) {
        this.secondInput = event.target.value;

    }

    add(event){
        this.finalValue = Number(this.firstInput) + Number(this.secondInput);
this.showTotal=true;
    }

    subtract(event){
        this.finalValue = Number(this.firstInput) - Number(this.secondInput);   
        this.showTotal=true;
    }

    multiply(event){
        this.finalValue = Number(this.firstInput) * Number(this.secondInput);   
        this.showTotal=true;
    }

    division(event){
        this.finalValue = Number(this.firstInput) / Number(this.secondInput);   
        this.showTotal=true;
    }

}