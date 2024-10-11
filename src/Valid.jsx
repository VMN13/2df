import React from "react";
import inputHOCvalidator from "./components/inputHOCvalidator";
import "./css/Valid.css";
import Input from "./components/index.js";
let InputHOC = inputHOCvalidator(Input);
let error = [];

class Valid extends React.Component {
  state = {
  login: "",
  password: ""
  };
  
  changeState = e => {
    this.setState({ [e.target.name]: e.target.value })
  };

  errorCheker = e => {
    error = e;
  };

  save = () => {
    if (error.length > 0) {
      console.log("errors!");
      alert("в массиве есть ошибки");
  }
  
   if (error.length === 0) {
      console.log("save");
      alert("отправка формы");
    }
   };

render() {
  return (
    <div className="
      mx-10
      border-solid 
      border-2 
      px-5 
      py-5 
      my-5">
  <div className="grid-block">
    <Input className="material-connector" 
       placeholder="Ihr Name"
      />

  <InputHOC
    labelName=""
    placeholder={this.state.login}
    action={this.changeState}
    name="login"
    className="material-connector"
    errorStyle="material-connector-error"
    errorCheker={this.errorCheker}
    validate={["noEmpty"]}
  />

<button
  className="button-green" 
  onClick={this.save}>
    Absenden
</button>
</div>
</div>
  );
  };
};

export default Valid;
