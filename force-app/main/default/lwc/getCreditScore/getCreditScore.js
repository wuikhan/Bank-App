import { LightningElement, track } from "lwc";
import getCreditScores from "@salesforce/apex/SalesforceConnect.getCreditScores";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

const columns = [
  { label: "Id", fieldName: "Id" },
  { label: "Name", fieldName: "Name__c" },
  { label: "Credit Score", fieldName: "Score__c" },
  { label: "Social Security Number", fieldName: "SSN__c" }
];

export default class GetCreditScore extends LightningElement {
  @track columns = columns;
  @track data = [];

  connectedCallback() {
    getCreditScores()
      .then((data) => {
        this.data = JSON.parse(data);
        const toastEvent = new ShowToastEvent({
          title: "SSN Retrieved",
          message: "Data fetch complete",
          variant: "success"
        });
        this.dispatchEvent(toastEvent);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}