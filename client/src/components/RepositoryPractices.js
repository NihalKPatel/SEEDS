import React, { Component } from "react"
import "../App.css"
import axios from "axios"
import baseURL from "../config"
import PracticeCard from "./PracticeCard"

class RepositoryPractices extends Component {
  constructor(props) {
    super(props)
    this.state = {
      practices: [],
    }
  }

  componentDidMount() {
    this.handleGetData(this.props.location)
  }

  handleGetData(params) {
    axios
      .get(`${baseURL}/repository-practices`)
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
    let practiceList

    if (!practices) {
      practiceList = "there is no book record!"
    } else {
      practiceList = practices.map((practice, k) => (
        <PracticeCard practice={practice} key={k} />
      ))
    }

    return (
      <div className="MainBackground min-vw-100 min-vh-100 w-100 h-100">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">Practice List</h2>
            </div>

            <div className="col-md-11">
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

export default RepositoryPractices
