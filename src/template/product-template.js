import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components"

const ProductTemplate = ({ data }) => {
  return <Layout>{data.airtable.data.Name}</Layout>
}

export const query = graphql`
  query GetProduct($Name: String!) {
    airtable(data: { Name: { eq: $Name } }) {
      data {
        Name
        Description
      }
      id
    }
  }
`

export default ProductTemplate
