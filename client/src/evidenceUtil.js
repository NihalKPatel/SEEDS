import React from "react"

const evidenceAttributes = {
  journal: (
    <div className="d-inline-flex">
      <label htmlFor="journalAttr" className="align-self-center mr-3 m-0">
        Journal
      </label>
      <input
        type="text"
        className="form-control"
        id="journalAttr"
        placeholder="Journal URL"
      />
    </div>
  ),
  year: (
    <div className="d-inline-flex">
      <label htmlFor="yearAttr" className="align-self-center mr-3 m-0">
        Year
      </label>
      <input
        type="text"
        className="form-control"
        id="yearAttr"
        placeholder="Year published"
      />
    </div>
  ),
  month: (
    <div className="d-inline-flex">
      <label htmlFor="monthAttr" className="align-self-center mr-3 m-0">
        Month
      </label>
      <input
        type="text"
        className="form-control"
        id="monthAttr"
        placeholder="Month published"
      />
    </div>
  ),
  volume: (
    <div className="d-inline-flex">
      <label htmlFor="volumeAttr" className="align-self-center mr-3 m-0">
        Volume
      </label>
      <input
        type="text"
        className="form-control"
        id="volumeAttr"
        placeholder="Journal volume"
      />
    </div>
  ),
  number: (
    <div className="d-inline-flex">
      <label htmlFor="numberAttr" className="align-self-center mr-3 m-0">
        Number
      </label>
      <input
        type="text"
        className="form-control"
        id="numberAttr"
        placeholder="Number"
      />
    </div>
  ),
  pages: (
    <div className="d-inline-flex">
      <label htmlFor="pagesAttr" className="align-self-center mr-3 m-0">
        Pages
      </label>
      <input
        type="text"
        className="form-control"
        id="pagesAttr"
        placeholder="Relevant pages"
      />
    </div>
  ),
  eprint: (
    <div className="d-inline-flex">
      <label htmlFor="eprintAttr" className="align-self-center mr-3 m-0">
        First name
      </label>
      <input
        type="text"
        className="form-control"
        id="eprintAttr"
        placeholder=""
      />
    </div>
  ),
  eprinttype: (
    <div className="d-inline-flex">
      <label htmlFor="eprinttypeAttr" className="align-self-center mr-3 m-0">
        Eprint type
      </label>
      <input
        type="text"
        className="form-control"
        id="eprinttypeAttr"
        placeholder="Eprint type"
      />
    </div>
  ),
  eprintclass: (
    <div className="d-inline-flex">
      <label htmlFor="eprintclassAttr" className="align-self-center mr-3 m-0">
        Eprint class
      </label>
      <input
        type="text"
        className="form-control"
        id="eprintclassAttr"
        placeholder="Eprint class"
      />
    </div>
  ),
  annote: (
    <div className="d-inline-flex">
      <label htmlFor="annoteAttr" className="align-self-center mr-3 m-0">
        Annote
      </label>
      <input
        type="text"
        className="form-control"
        id="annoteAttr"
        placeholder="Annote"
      />
    </div>
  ),
}

export { evidenceAttributes as default }
