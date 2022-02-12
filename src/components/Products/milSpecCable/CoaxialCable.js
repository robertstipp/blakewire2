import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const CoaxialCable = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "MIL-DTL-17" } }) {
        nodes {
          data {
            Name
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
      <h1>Coaxial Cable</h1>
      {products.map(item => {
        const { id } = item
        const { Name } = item.data
        return (
          <div key={id}>
            <h3>{Name}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default CoaxialCable
