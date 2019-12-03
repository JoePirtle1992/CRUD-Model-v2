import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

class AddPage extends Component {
  constructor(props) {
    super();
    this.state = {
      name: "",
      country: "",
      description: "",
      itsGoneJim: false
    };
  }

  changeName = e => {
    this.setState({ name: e.target.value }, () => {
      console.log(this.state.name);
    });
  };
  changeCountry = e => {
    this.setState({ country: e.target.value }, () => {
      console.log(this.state.country);
    });
  };
  changeDescription = e => {
    this.setState({ description: e.target.value }, () => {
      console.log(this.state.description);
    });
  };

  sendIt = e => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/v1/radiohead`, {
        name: this.state.name,
        country: this.state.country,
        description: this.state.description
      })
      .then(res => {
        this.setState({ itsGoneJim: true });
      })
      .catch(err => {
        console.log("Something went wrong!!! :(");
      });
  };

  render() {
    if (this.state.itsGoneJim === false) {
      return (
        <div>
          <form onSubmit={this.sendIt}>
            <h1>Name: </h1>
            <input
              type="text"
              name="name"
              id=""
              onChange={this.changeName}
            ></input>
            <h1>Country: </h1>
            <input
              type="text"
              name="country"
              id=""
              onChange={this.changeCountry}
            ></input>
            <h1>Description: </h1>
            <textarea
              onChange={this.changeDescription}
              name="description"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button>Send Me</button>
          </form>
        </div>
      );
    }
    if (this.state.itsGoneJim) {
      return <Redirect to="/" />;
    }
  }
}
export default AddPage;
