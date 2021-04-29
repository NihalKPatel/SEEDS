import React from "react"
import { Link } from "react-router-dom"
import "../App.css"

const PracticeCard = (props) => {
  const { practice } = props

  return (
    <div className="card-container">
      <img
        src="https://commapress.co.uk/books/the-book-of-cairo/cairo-provisional-v3/image%2Fspan3"
        alt=""
      />
      <div className="desc">
        <h2>
          <Link to={`/show-practice/${practice._id}`}>{practice.name}</Link>
        </h2>
        <h3>{practice.nameAbbreviated}</h3>
        <p>{practice.description}</p>
      </div>
    </div>
  )
}

export default PracticeCard
