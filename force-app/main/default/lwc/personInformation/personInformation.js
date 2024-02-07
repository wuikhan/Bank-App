import { LightningElement } from "lwc";
import getCreditScores from "@salesforce/apex/SalesforceConnect.getCreditScores";

export default class PersonInformation extends LightningElement {
  students = [];
  connectedCallback() {
    getCreditScores()
      .then((data) => {
        this.students = JSON.parse(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}