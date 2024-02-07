import { LightningElement } from "lwc";

export default class LearningComponent extends LightningElement {
  firstName = "";
  lastName = "";

  handleChange(event) {
    const field = event.target.name;
    if (field === "firstName") {
      this.firstName = event.target.value;
    } else if (field === "lastName") {
      this.lastName = event.target.value;
    }
  }

  get uppercasedFullName() {
    return `${this.firstName} ${this.lastName}`.toUpperCase();
  }

  areDetailsVisible = false;

  handleChange1(event) {
    this.areDetailsVisible = event.target.checked;
  }

  contacts = [
    {
      Id: 1,
      Name: "Amy Taylor",
      Title: "VP of Engineering"
    },
    {
      Id: 2,
      Name: "Michael Jones",
      Title: "VP of Sales"
    },
    {
      Id: 3,
      Name: "Jennifer Wu",
      Title: "CEO"
    }
  ];
}