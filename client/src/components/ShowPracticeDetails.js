import React, { Component } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import baseURL from "../config"
import "../App.css"
import ClaimModal from "./ClaimModal"
import ClaimCard from "./ClaimCard"

class showPracticeDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      practice: {},
      claims: [],
      isOpen: false,
      modelType: "",
      modalClaim: {},
    }
    this.toggleClaimModal = this.toggleClaimModal.bind(this)
    this.ref = React.createRef()
  }

  componentDidMount() {
    axios
      .get(`${baseURL}/practice/${this.props.match.params.id}`)
      .then((res) => {
        console.log(res.data)
        this.setState(res.data)
      })
      .catch((err) => {
        console.log(`Error from ShowPracticeDetails`)
      })
  }

  onDeleteClick(id) {
    axios
      .delete(`${baseURL}/practice/${id}`)
      .then((res) => {
        this.props.history.push("/")
      })
      .catch((err) => {
        console.log("Error form ShowBookDetails_deleteClick")
      })
  }

  toggleClaimModal(modalType, modalClaim) {
    console.log(modalClaim)
    this.setState((state) => ({
      isOpen: !state.isOpen,
      modalType: typeof modalType !== "undefined" ? modalType : "",
      modalClaim: typeof modalClaim !== "undefined" ? modalClaim : {},
    }))
  }

  render() {
    const { practice, claims } = this.state
    let claimsList

    if (!claims) {
      claimsList = "There are no claims"
    } else {
      claimsList = claims.map((claim, k) => (
        <ClaimCard claim={claim} key={k} toggleModal={this.toggleClaimModal} />
      ))
    }

    return (
      <div className="MainBackground min-vh-100 min-vw-100 h-100 w-100">
        <ClaimModal
          claim={this.state.modalClaim}
          toggleModal={this.toggleClaimModal}
          isOpen={this.state.isOpen}
          modalType={this.state.modalType}
          practice={this.state.practice}
        />

        <main className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img
                src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
            <div className="align-self-lg-start text-center col-lg-6 h-100">
              <h1 className="display-5 fw-bold lh-1 mb-3">
                <u>{practice.name}</u>
              </h1>
              <h4 className="align-self-center">
                ({practice.nameAbbreviated})
              </h4>
              <p className="mt-5 lead">{practice.description}</p>
              <div>
                <br />
                <br />
                <hr className="bg-white" />
              </div>
              <h4 className="align-self-center font-italic mb-4">Claims</h4>
              <div
                id="claimContainer"
                className="d-flex flex-column overflow-auto h-75 border border-light pt-2 pl-2 pr-2 mb-3"
              >
                {claimsList}
              </div>
              <div
                className="col-md-6 btn btn-outline-success btn-lg btn-block mx-auto"
                onClick={() => this.toggleClaimModal("add")}
                onKeyDown={() => this.toggleClaimModal("add")}
                tabIndex={0}
                role="button"
              >
                Add Claim
                <br />
              </div>
            </div>
          </div>
        </main>

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
      </div>
    )
  }
}

export default showPracticeDetails
