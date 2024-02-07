import { LightningElement } from "lwc";

const api_url = "https://jduque-mock-apis.herokuapp.com";

export default class ApiSample extends LightningElement {
  data = [];
  imageURL;
  connectedCallback() {
    fetch("https://api.thecatapi.com/v1/images/search", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        // console.log("🚀 ~ data", data);
        this.imageURL = data[0].url;
      });
  }

  getNames() {
    fetch(api_url + "/apis/cars")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.data = json;
        // console.log(this.data);
        // console.log(this.data[0].id);
        // console.log(this.data[0].make);
        // console.log(this.data[0].model);
        // console.log(this.data[0].year);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("finally loaded");
      });
  }

  getScore() {
    fetch("https://api.npoint.io/b08b0bfdbbdeac0f70b0")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.data = json;
        // console.log(json);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("finally loaded");
      });
  }
}