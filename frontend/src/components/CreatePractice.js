import React, { Component } from "react"
import { Link } from "react-router-dom"
import "../App.css"
import axios from "axios"

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
      .post("http://localhost:8082/api/practices", data)
      .then((res) => {
        this.setState({
          title: "",
          isbn: "",
          author: "",
          description: "",
          published_date: "",
          publisher: "",
        })
        this.props.history.push("/")
      })
      .catch((err) => {
        console.log("Error in CreatePractice!")
      })
  }

  render() {
    return (
      <div className="CreatePractice">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show BooK List
              </Link>
            </div>
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Add Practice</h1>
              <p className="lead text-center">Create new practice</p>

              <form noValidate onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Title of the Book"
                    name="title"
                    className="form-control"
                    value={this.state.name}
                    onChange={this.onChange}
                  />
                </div>
                <br />

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="ISBN"
                    name="isbn"
                    className="form-control"
                    value={this.state.nameAbbreviated}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Author"
                    name="author"
                    className="form-control"
                    value="nothing"
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Describe this book"
                    name="description"
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChange}
                  />
                </div>

                <div className="form-group">
                  <input
                    type="date"
                    placeholder="published_date"
                    name="published_date"
                    className="form-control"
                    value="nothing"
                    onChange={this.onChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Publisher of this Book"
                    name="publisher"
                    className="form-control"
                    value="nothing"
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
