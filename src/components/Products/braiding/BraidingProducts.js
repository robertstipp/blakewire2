import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const BraidingProducts = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "Braiding" } }) {
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
      <h1>Braiding</h1>
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

export default BraidingProducts
