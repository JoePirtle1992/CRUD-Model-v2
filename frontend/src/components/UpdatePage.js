import React, { Component } from "react";
import { Redirect } from "react-router-dom";
  //So you HAVE to only bring the Redirect and that one only...
import axios from "axios";

class UpdatePage extends Component {
  constructor(props, { match }) {
    super();
    this.state = {
      name: "",
      country: "",
      description: "",
      mahId: "",
      changedIt: false
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:4000/v1/radiohead/${this.props.match.params.id}`)
      .then(res => {
        this.setState({
          name: res.data.data.name,
          country: res.data.data.country,
          description: res.data.data.description,
          mahId: res.data.data._id
        });
        this.setState({ changedIt: false });
      })
      .catch(err => {
        //So...just dont log something that doesnt even exist?
        console.log("There may be oil");
        this.setState({ changedIt: true });
      });
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

  willUpdate = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/v1/radiohead/${this.props.match.params.id}`, {
        name: this.state.name,
        country: this.state.country,
        description: this.state.description
      })
      .then(() => {
        console.log("GOOOD JOB!!!");
        this.setState({ changedIt: false });
      })
      .catch(err => {
        console.log(err)
      });
  };

  render() {
    if (this.state.changedIt === false) {
      return (
        <div>
          <h1>Update Page</h1>
          <form onSubmit={this.willUpdate}>
            <h1>Name: </h1>
            <input
              type="text"
              name="name"
              id=""
              value={this.state.name}
              onChange={this.changeName}
            ></input>
            <h1>country: </h1>
            <input
              type="text"
              name="country"
              id=""
              value={this.state.country}
              onChange={this.changeCountry}
            ></input>
            <h1>Description: </h1>
            <textarea
              value={this.state.description}
              name="description"
              id=""
              cols="30"
              rows="10"
              onChange={this.changeDescription}
            ></textarea>
            <button>Send Me</button>
          </form>
        </div>
      );
    }
    if (this.state.changedIt === true) {
      return (
        <Redirect to="/deepurple/error" />
      )
    }
  }
}
export default UpdatePage;
