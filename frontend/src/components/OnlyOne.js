import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

class OnlyOne extends Component {
  constructor(props, { match }) {
    super();
    this.state = {
      name: "",
      country: "",
      description: "",
      _id: "",
      itDontExist: false
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:4000/v1/radiohead/${this.props.match.params.id}`)
      .then(res => {
        this.setState({ name: res.data.data.name, country: res.data.data.country, description: res.data.data.description, _id: res.data.data._id });
        this.setState({ itDontExist: false });
      })
      .catch(err => {
        // console.log("DANGER BRO " + err.response.data.missing);
  console.log(err)
        this.setState({itDontExist: true});
        console.log(this.state);
      });
  }

  render() {
    //OLD SCHOOL WAY
    if (this.state.itDontExist === false) {
      return (
        <div>
          <h1>{this.state.name}</h1>
          <h1>{this.state.country}</h1>
          <h1>{this.state.description}</h1>
          <h1>{this.state._id}</h1>
          <Link to={`/v1/update/${this.state._id}`}>Update Page</Link>
        </div>
      )
      } else if (this.state.itDontExist === true) {
      return <h1>Paradise</h1>;
    } else if (this.state.soloOne == null){
      return <h1>Spirit</h1>
    }
  }

  //   return this.state.itExists ? (
  //     <div>
  //       <div>
  //         <h1>Only One</h1>
  //         <h1>{this.state.soloOne.name}</h1>
  //         <h1>{this.state.soloOne.country}</h1>
  //         <h1>{this.state.soloOne.description}</h1>
  //         <Link to={`/v1/update/${this.state.soloOne._id}`}>Update Page</Link>
  //       </div>
  //     </div>
  //   ) : (
  //     <Redirect to="/deepurple/error" />
  //   );
  // }
}

export default OnlyOne;
