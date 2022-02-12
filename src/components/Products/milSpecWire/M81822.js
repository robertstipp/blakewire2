import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const M81822 = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "M81822" } }) {
        nodes {
          data {
            Voltage
            Type
            Temperature
            Name
            Insulation
            Description
            Conductor
            AWG_Gauge
          }
        }
      }
    }
  `)

  const {
    allAirtable: { nodes: products },
  } = data

  return (
    <div>
      <h1>M81822</h1>
      {products.map(item => {
        const { id } = item
        const { Name, Type, Insulation, Voltage, Temperature, AWG_Gauge } =
          item.data
        return (
          <div key={id}>
            <h3>
              {Name} {Type} {Insulation} {Voltage} {Temperature} {AWG_Gauge}
            </h3>
          </div>
        )
      })}
    </div>
  )
}

export default M81822
