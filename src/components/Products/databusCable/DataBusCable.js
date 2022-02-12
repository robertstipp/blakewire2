import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const DataBusCable = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "Databus Cables" } }) {
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
      <h1>Databus Cable</h1>
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

export default DataBusCable
