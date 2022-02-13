import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components"

const WireTemplate = ({}) => {
  return <h2>Wire</h2>
}

export const query = graphql`
  query WireQuery {
    allAirtable(filter: { table: { eq: "Product Table" } }) {
      nodes {
        id
      }
    }
  }
`
export default WireTemplate
