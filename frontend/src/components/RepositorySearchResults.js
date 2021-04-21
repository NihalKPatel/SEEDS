import React, { Component } from "react"
import "../App.css"
import axios from "axios"
import { Link } from "react-router-dom"
import PracticeCard from "./PracticeCard"

class ShowPracticeList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      practices: [],
    }
  }

  componentDidMount() {
    axios
      .get("http://localhost:8082/api/practices")
      .then((res) => {
        this.setState({
          practices: res.data,
        })
      })
      .catch((err) => {
        console.log("Error from ShowPracticeList")
      })
  }

  render() {
    const { practices } = this.state
    console.log(`PrintBook: ${practices}`)
    let practiceList

    if (!practices) {
      practiceList = "there is no book record!"
    } else {
      practiceList = practices.map((book, k) => (
        <PracticeCard book={book} key={k} />
      ))
    }

    return (
      <div className="ShowPracticeList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Practice List</h2>
            </div>

            <div className="col-md-11">
              <Link
                to="/create-practice"
                className="btn btn-outline-warning float-right"
              >
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>

          <div className="list">{practiceList}</div>
        </div>
      </div>
    )
  }
}

export default ShowPracticeList
