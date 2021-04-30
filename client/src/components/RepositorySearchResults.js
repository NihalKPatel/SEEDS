import React, { Component } from "react"
import "../App.css"
import axios from "axios"
import baseURL from "../config"
import PracticeCard from "./PracticeCard"

class RepositorySearchResults extends Component {
  constructor(props) {
    super(props)
    this.state = {
      results: [],
    }
  }

  componentDidMount() {
    this.handleGetData()
  }

  handleGetData() {
    axios
      .get(
        `${baseURL}/api/practices/repository-search/${this.props.match.params.query}`
      )
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
      <div className="ShowPracticeList">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h2 className="display-4 text-center">
                Search Results for {this.props.match.params.query}
              </h2>
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

export default RepositorySearchResults
