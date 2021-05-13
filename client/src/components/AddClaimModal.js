import React, { Component } from "react"
import mongoose from "mongoose"
import ReactDOM from "react-dom"
import ReactDOMServer from "react-dom/server"
import axios from "axios"
import { Modal, Button } from "react-bootstrap"
import { PlusCircle, Trash } from "react-bootstrap-icons"
import evidenceAttributeInputs from "../evidenceUtil"
import "../App.css"
import baseURL from "../config"

class AddClaimModal extends Component {
  static addEvidenceAttribute() {
    const attr = document.getElementById("attrSelector").value
    const evidenceForm = document.getElementById("evidenceForm")
    const wrapper = document.createElement("div")
    wrapper.innerHTML = ReactDOMServer.renderToString(
      evidenceAttributeInputs[attr]
    )
    evidenceForm.appendChild(wrapper.firstChild)
  }

  constructor(props) {
    super(props)
    this.state = {
      claim: {},
      newEvidence: {},
      evidence: [],
    }
    this.addEvidence = this.addEvidence.bind(this)
    this.removeEvidence = this.removeEvidence.bind(this)
    this.addToEvidenceContainer = this.addToEvidenceContainer.bind(this)
    this.saveClaim = this.saveClaim.bind(this)
  }

  removeEvidence(evidenceTitle) {
    document.getElementById(evidenceTitle).remove()
    delete this.state.newEvidence[evidenceTitle]
    let modifiedArray = []

    for (let i = 0; i < this.state.evidence.length; i += 1) {
      if (this.state.evidence[i].key === evidenceTitle) {
        modifiedArray = this.state.evidence.splice(i, 1)
      }
    }

    this.setState({
      evidence: modifiedArray,
    })
  }

  addEvidence() {
    const evidenceData = { attributes: {} }
    const evidenceForm = document.getElementById("evidenceForm")
    let title = ""

    Array.from(evidenceForm.getElementsByTagName("input")).forEach((child) => {
      const attr = child.id.split("Attr")[0]
      if (attr === "title") {
        title = child.value
        evidenceData[attr] = child.value
      } else {
        evidenceData.attributes[attr] = child.value
      }
    })

    this.state.newEvidence[title] = evidenceData

    this.addToEvidenceContainer(title)
  }

  addToEvidenceContainer(evidenceTitle) {
    const evidenceContainer = document.getElementById("evidenceContainer")

    const evidenceBlock = (
      <div id={evidenceTitle} key={evidenceTitle}>
        <label>{evidenceTitle}</label>
        <Trash
          className="btn-outline-danger"
          onClick={() => this.removeEvidence(evidenceTitle)}
        />
      </div>
    )

    this.state.evidence.push(evidenceBlock)
    const test = React.createElement("div", {}, this.state.evidence)
    ReactDOM.render(test, evidenceContainer)
  }

  async saveClaim() {
    const claimData = {
      title: document.getElementById("claimTitle").value,
      description: document.getElementById("claimDescription").value,
      forPractice: this.props.practice,
      evidence: Object.values(this.state.newEvidence),
    }

    await axios
      .post(`${baseURL}/claim/save`, claimData)
      .then((res) => {
        this.setState({
          claim: {},
          newEvidence: {},
          evidence: [],
        })
        this.props.practice.claims.push(
          mongoose.Types.ObjectId(res.data.claim._id)
        )
      })
      .catch((err) => {
        console.log(`Error when saving new claim!${err}`)
      })

    await axios
      .put(
        `${baseURL}/practice/${this.props.practice._id}`,
        this.props.practice
      )
      .catch((err) => {
        console.log(`Error when saving new claim!${err}`)
      })

    this.props.toggleModal()
  }

  render() {
    const isEdit = typeof this.props.id !== "undefined"
    const title = isEdit ? "" : "Add New Claim"

    const addBody = (
      <>
        <Modal.Body className="d-flex flex-column">
          <form className="d-inline-flex w-100">
            <div className="d-flex mr-3 flex-column w-25">
              <input
                type="text"
                className="form-control mb-3"
                id="claimTitle"
                placeholder="Title of claim"
              />

              <textarea
                className="form-control"
                style={{ minHeight: "calc(1.5em + .75rem + 2px)" }}
                id="claimDescription"
                placeholder="Description of claim"
              />
            </div>
            <div className="d-flex flex-column w-75">
              <h4 className="text-center">Evidence</h4>
              <div
                id="evidenceContainer"
                className="border border-primary overflow-auto h-75"
              />
            </div>
          </form>
          <div>
            <br />
            <hr className="bg-white" />
          </div>
          <h4 className="text-center">Add evidence for claim</h4>
          <p className="text-center">
            Select an attribute from the dropdown to add the field
          </p>
          <form className="mb-3 d-inline-flex flex-column" id="evidenceForm">
            <div className="d-inline-flex">
              <label htmlFor="tileAttr" className="align-self-center mr-3 mb-0">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="titleAttr"
                placeholder="Evidence Title"
              />
            </div>
          </form>
          <div className="d-inline-flex align-items-center">
            <select className="mr-2" id="attrSelector">
              {Object.keys(evidenceAttributeInputs).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <PlusCircle
              className="btn-outline-primary mr-lg-5"
              onClick={AddClaimModal.addEvidenceAttribute}
            />
            <div
              className="col-md-6 btn btn-outline-success btn-sm"
              tabIndex="0"
              role="button"
              onKeyDown={this.addEvidence}
              onClick={this.addEvidence}
            >
              Add Evidence
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.saveClaim}>
            Add
          </Button>
          <Button variant="secondary" onClick={this.props.toggleModal}>
            Close
          </Button>
        </Modal.Footer>
      </>
    )
    const editBody = (
      <>
        <Modal.Body>This is an edit modal</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.props.toggleModal}>
            apply
          </Button>
          <Button variant="secondary" onClick={this.props.toggleModal}>
            Close
          </Button>
        </Modal.Footer>
      </>
    )
    const bodyToUse = isEdit ? editBody : addBody
    return (
      <Modal show={this.props.isOpen} backdrop="static" size="lg">
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        {bodyToUse}
      </Modal>
    )
  }
}

export default AddClaimModal
