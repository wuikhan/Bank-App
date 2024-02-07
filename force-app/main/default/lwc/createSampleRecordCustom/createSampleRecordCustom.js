import { LightningElement, track, wire } from "lwc";
import { createRecord, getRecord } from "lightning/uiRecordApi";

const fieldArray = ["Sample__c.Name", "Sample__c.FirstName11__c"];

export default class CreateSampleRecordCustom extends LightningElement {
  @track sampleName;
  @track firstName;

  @track recordId;

  @wire(getRecord, {
    recordId: "$recordId",
    fields: fieldArray
  })
  sampleRecord;

  sampleNameChangeHandler(event) {
    this.sampleName = event.target.value;
  }
  firstNameChangeHandler(event) {
    this.firstName = event.target.value;
  }
  createSample() {
    const fields = {
      Name: this.sampleName,
      FirstName11__c: this.firstName
    };

    const recordInput = { apiName: "Sample__c", fields };

    createRecord(recordInput)
      .then((response) => {
        console.log("sample created", response.id);
        console.log(response);
        console.log(response.systemModstamp);
        this.recordId = response.id;
      })
      .catch((error) => {
        console.log("error ", error.body.message);
      });
  }

  get retrievedSampleText() {
    if (this.sampleRecord.data) {
      return this.sampleRecord.data.fields.Name.value;
    }
    return undefined;
  }

  get retrievedNameText() {
    if (this.sampleRecord.data) {
      return this.sampleRecord.data.fields.FirstName11__c.value;
    }
    return undefined;
  }
}