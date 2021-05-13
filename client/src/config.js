import React from "react"

const baseURL =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:8082"

export { baseURL as default }
