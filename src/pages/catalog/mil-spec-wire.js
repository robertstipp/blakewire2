import React from "react"
import { graphql } from "gatsby"
import M16878 from "../../components/Products/M16878"
import { Layout } from "../../components"

const MilSpecWire = ({ data }) => {
  const {
    allAirtable: { nodes: products },
  } = data
  return (
    <Layout>
      <M16878 products={products} />
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(filter: { table: { eq: "M16878" } }) {
      nodes {
        id
        data {
          Name
          Insulation
          Voltage
          Temperature
          AWG_Gauge
          Type
        }
      }
    }
  }
`

export default MilSpecWire
