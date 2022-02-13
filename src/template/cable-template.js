import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components"
import style from "styled"

const CableTemplate = ({}) => {
  return <h2>Rope</h2>
}

export const query = graphql`
  query MyQuery {
    allAirtable(filter: { table: { eq: "Product Table" } }) {
      nodes {
        id
      }
    }
  }
`
export default CableTemplate
