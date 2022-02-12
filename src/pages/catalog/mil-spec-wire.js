import React from "react"
import { graphql } from "gatsby"
import M16878 from "../../components/Products/milSpecWire/M16878"
import M22759 from "../../components/Products/milSpecWire/M22759"
import M81044 from "../../components/Products/milSpecWire/M81044"
import M81822 from "../../components/Products/milSpecWire/M81822"
import { Layout } from "../../components"

const MilSpecWire = ({ data }) => {
  const {
    allAirtable: { nodes: products },
  } = data
  return (
    <Layout>
      <M16878 products={products} />
      <M22759 />
      <M81044 />
      <M81822 />
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
