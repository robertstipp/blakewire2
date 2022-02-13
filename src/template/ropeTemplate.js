import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components"

const RopeTemplate = ({}) => {
  return <h2>Rope</h2>
}

export const query = graphql`
  query RopeQuery {
    allAirtable(filter: { table: { eq: "Product Table" } }) {
      nodes {
        id
      }
    }
  }
`
export default RopeTemplate
