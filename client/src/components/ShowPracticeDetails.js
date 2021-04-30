import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import baseURL from "../config"
import "../App.css"

class showPracticeDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      book: {},
    }
  }

  componentDidMount() {
    axios
      .get(`${baseURL}/api/books/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({
          book: res.data,
        })
      })
      .catch((err) => {
        console.log("Error from ShowPracticeDetails")
      })
  }

  onDeleteClick(id) {
    axios
      .delete(`${baseURL}/api/books/${id}`)
      .then((res) => {
        this.props.history.push("/")
      })
      .catch((err) => {
        console.log("Error form ShowBookDetails_deleteClick")
      })
  }

  render() {
    const { practice } = this.state
    const PracticeItem = (
      <div>
        <table className="table table-hover table-dark">
          {/* <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead> */}
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Name</td>
              <td>{practice.name}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Short Name</td>
              <td>{practice.nameAbbreviated}</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Published Date</td>
              <td>{practice.publishedDate}</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Description</td>
              <td>{practice.description}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )

    return (
      <div className="ShowPracticeDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-10 m-auto">
              <br /> <br />
              <Link to="/" className="btn btn-outline-warning float-left">
                Show Book List
              </Link>
            </div>
            <br />
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Practice Record</h1>
              <p className="lead text-center">View Practice Info</p>
              <hr /> <br />
            </div>
          </div>
          <div>{PracticeItem}</div>

          <div className="row">
            <div className="col-md-6">
              <button
                type="button"
                className="btn btn-outline-danger btn-lg btn-block"
                onClick={this.onDeleteClick.bind(this, practice._id)}
              >
                Delete Book
              </button>
              <br />
            </div>

            <div className="col-md-6">
              <Link
                to={`/edit-book/${practice._id}`}
                className="btn btn-outline-info btn-lg btn-block"
              >
                Edit Book
              </Link>
              <br />
            </div>
          </div>
          {/* <br />
            <button type="button" class="btn btn-outline-info btn-lg btn-block">Edit Book</button>
            <button type="button" class="btn btn-outline-danger btn-lg btn-block">Delete Book</button> */}
        </div>
      </div>
    )
  }
}

export default showPracticeDetails
