import { LightningElement } from "lwc";

import { ShowToastEvent } from "lightning/platformShowToastEvent";
import APPLICATION__OBJECT from "@salesforce/schema/Application__c";
import NAME_FIELD from "@salesforce/schema/Application__c.First_Name__c";
import ANNUAL_INCOME_FIELD from "@salesforce/schema/Application__c.Annual_Income__c";
import ADDRESS_FIELD from "@salesforce/schema/Application__c.Address__c";
import APPLICATION_NAME_FIELD from "@salesforce/schema/Application__c.Name";
import COSIGNER_FIELD from "@salesforce/schema/Application__c.Co_Signer__c";
import DOB_FIELD from "@salesforce/schema/Application__c.Date_of_birth__c";
import EMAIL_FIELD from "@salesforce/schema/Application__c.Email__c";
import EMPLOYMENT_CATEGORY_FIELD from "@salesforce/schema/Application__c.Employment_Category__c";
import EMPLOYEMENT_STATUS_FIELD from "@salesforce/schema/Application__c.Employment_Status__c";
import SOCIAL_SECURITY_FIELD from "@salesforce/schema/Application__c.Social_Security_Number__c";

export default class CreateSampleUsingRecordForm extends LightningElement {
  objectApiName = APPLICATION__OBJECT;

  fields = [
    NAME_FIELD,
    ANNUAL_INCOME_FIELD,
    ADDRESS_FIELD,
    APPLICATION_NAME_FIELD,
    COSIGNER_FIELD,
    DOB_FIELD,
    EMAIL_FIELD,
    EMPLOYEMENT_STATUS_FIELD,
    EMPLOYMENT_CATEGORY_FIELD,
    SOCIAL_SECURITY_FIELD
  ];
  handleSuccess(event) {
    const toastEvent = new ShowToastEvent({
      title: "Account created",
      message: "Record ID: " + event.detail.id,
      variant: "success"
    });
    this.dispatchEvent(toastEvent);
  }
}