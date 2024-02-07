import { LightningElement } from "lwc";

export default class Inventory extends LightningElement {
  vehicles = [
    {
      status: "available",
      statusbadge: "slds-theme_success",
      imageUrl:
        "https://sfdc-demo.s3-us-west-1.amazonaws.com/ecars/car_white.jpg",
      title: "Model X",
      packageNo: "123",
      vin: "123456"
    },
    {
      status: "sold",
      statusbadge: "slds-theme_error",
      imageUrl:
        "https://sfdc-demo.s3-us-west-1.amazonaws.com/ecars/car_black.jpg",
      title: "Model Y",
      packageNo: "123",
      vin: "123456"
    },
    {
      status: "sale pending",
      statusbadge: "slds-theme_warning",
      imageUrl:
        "https://sfdc-demo.s3-us-west-1.amazonaws.com/ecars/car_red.jpg",
      title: "Model Z",
      packageNo: "123",
      vin: "123456"
    },
    {
      status: "available",
      statusbadge: "slds-theme_success",
      imageUrl:
        "https://sfdc-demo.s3-us-west-1.amazonaws.com/ecars/car_white.jpg",
      title: "Model X",
      packageNo: "123",
      vin: "123456"
    },
    {
      status: "sold",
      statusbadge: "slds-theme_error",
      imageUrl:
        "https://sfdc-demo.s3-us-west-1.amazonaws.com/ecars/car_black.jpg",
      title: "Model Y",
      packageNo: "123",
      vin: "123456"
    },
    {
      status: "sale pending",
      statusbadge: "slds-theme_warning",
      imageUrl:
        "https://sfdc-demo.s3-us-west-1.amazonaws.com/ecars/car_red.jpg",
      title: "Model Z",
      packageNo: "123",
      vin: "123456"
    }
  ];
}