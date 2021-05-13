import React from "react"
import "../App.css"

const ClaimCard = (props) => {
  const { claim } = props

  return (
    <div className="col mb-2">
      <div className="border rounded border-light shadow-sm">
        <div className="p-sm-2 d-flex justify-content-between">
          <small className="text-center m-0 font-weight-bold">
            {claim.title}
          </small>
          <small className="text-white">
            Submitted:{" "}
            {new Date(claim.submittedDate).toLocaleDateString("en-NZ")}
          </small>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-light"
                onClick={() => props.toggleModal("view", claim)}
              >
                View
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-light"
                onClick={() => props.toggleModal("edit", claim)}
              >
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ClaimCard as default }
