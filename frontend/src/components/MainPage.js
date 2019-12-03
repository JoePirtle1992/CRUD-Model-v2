import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      everyOne: []
    };
  }
  componentDidMount() {
    axios
      .get(`http://localhost:4000/v1/radiohead`)
      .then(res => {
        this.setState({ everyOne: res.data.data });
        console.log(this.state.everyOne);
      })
      .catch(err => {
        console.log("Theres an " + err);
      });
  }
  render() {
    return (
      <div>
        <h1>Main Page</h1>
        <Link to="/v1/add">
          Add Something
        </Link>
        <div className="whole">
          {this.state.everyOne.map(folks => (
            <div className="individual">
              <h1>{folks.name}</h1>
              <p>{folks.country}</p>
              <p>{folks.description}</p>
              <Link to={`/v1/radiohead/${folks._id}`}>
                <h1>{folks._id}</h1>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default MainPage;
