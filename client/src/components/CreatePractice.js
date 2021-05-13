import React, { Component } from "react"
import axios from "axios"
import baseURL from "../config"
import "../App.css"

class CreatePractice extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      nameAbbreviated: "",
      description: "",
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()

    const data = {
      name: this.state.name,
      nameAbbreviated: this.state.nameAbbreviated,
      description: this.state.description,
    }

    axios
      .post(`${baseURL}/practice/create`, data)
      .then((res) => {
        this.setState({
          name: "",
          nameAbbreviated: "",
          description: "",
        })
        this.props.history.push("/")
      })
      .catch((err) => {
        console.log("Error in CreatePractice!")
      })
  }

  render() {
    return (
      <div className="MainBackground vh-100">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Practice</h1>
              <p className="lead text-center">Create new practice</p>
              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name of practice"
                    name="name"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Abbreviated name (Optional)"
                    name="nameAbbreviated"
                    className="form-control"
                    value={this.state.nameAbbreviated}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Describe this practice"
                    name="description"
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <input
                  type="submit"
                  className="btn btn-outline-warning btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreatePractice
