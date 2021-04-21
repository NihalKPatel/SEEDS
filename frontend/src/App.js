import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import RepositorySearchResults from "./components/RepositorySearchResults"
import CreatePractice from "./components/CreatePractice"
import ShowPracticeDetails from "./components/ShowPracticeDetails"
import "./App.css"

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <div>
          <Route exact path="/" component={RepositorySearchResults} />
          <Route path="/create-practice" component={CreatePractice} />
          <Route path="/show-practice/:id" component={ShowPracticeDetails} />
        </div>
      </Router>
    )
  }
}

export default App
