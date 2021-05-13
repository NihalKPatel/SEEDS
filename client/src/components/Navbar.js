import React, { Component } from "react"
import { Link } from "react-router-dom"
import { PlusCircle, ViewList } from "react-bootstrap-icons"

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: "",
    }
  }

  handleSearchInputChanged(event) {
    this.setState({
      searchQuery: event.target.value,
    })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mr-2">
                <Link
                  to="/create-practice"
                  className="btn btn-outline-primary d-flex align-items-center"
                >
                  <PlusCircle className="mr-2" />
                  Add New Practice
                </Link>
              </li>
              <li className="nav-item mr-2">
                <Link
                  to="/"
                  className="btn btn-outline-primary d-flex align-items-center"
                >
                  <ViewList className="mr-2" />
                  Practice Repository
                </Link>
              </li>
              <li className="nav-item dropdown">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={this.state.searchQuery}
                onChange={this.handleSearchInputChanged.bind(this)}
              />
              <Link
                to={`/search/${this.state.searchQuery}`}
                className="btn btn-outline-success"
                onClick={() => this.setState({ searchQuery: "" })}
              >
                Search
              </Link>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
