import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const TubingProducts = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "Tubing" } }) {
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
      <h1>Tubing</h1>
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

export default TubingProducts
