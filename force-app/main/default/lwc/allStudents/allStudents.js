import { LightningElement } from 'lwc';

export default class AllStudents extends LightningElement {

    students = [{
        studentName: 'John', age: '30'
    },
    {
        studentName: 'Mike', age: '20'
    },
    {
        studentName: 'Chris', age: '24'
    },
    {
        studentName: 'Peter', age: '23'
    },
    {
        studentName: 'Steve', age: '22'
    }];
}