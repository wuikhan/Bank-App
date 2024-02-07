import { LightningElement, track } from "lwc";
import getCreditScoreBySSN from "@salesforce/apex/SalesforceConnect.getCreditScoreBySSN";
import { ShowToastEvent } from "lightning/platformShowToastEvent";

export default class SearchBySocial extends LightningElement {
  @track score;

  handleClick() {
    var ssn = this.template.querySelector(".ssn").value;

    getCreditScoreBySSN({ ssn })
      .then((res) => {
        const data = JSON.parse(res);
        if (data) {
          this.score = data.Score__c;
        }
      })
      .catch((error) => {
        this.dispatchEvent(
          new ShowToastEvent({
            title: "Error deleting record",
            message: error.body.message,
            variant: "error"
          })
        );
      });
  }
}