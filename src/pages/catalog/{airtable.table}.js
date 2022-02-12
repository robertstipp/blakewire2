import React from "react"
import { graphql, Link } from "gatsby"
import { Layout, Algolia } from "../../components"

const ProductTemplate = ({ data }) => {
  const { table } = data.airtable

  return <Layout>{table}</Layout>
}
export const query = graphql`
  query getSingleTable($table: String) {
    airtable(table: { eq: $table }) {
      table
    }
  }
`

export default ProductTemplate
