import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../../Title"
import { Link } from "gatsby"

const M16878 = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "M16878" } }) {
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
            path
          }
        }
      }
    }
  `)

  const {
    allAirtable: { nodes: products },
  } = data
  console.log(products)
  return (
    <Wrapper>
      <Title title="M16878" />
      <table>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Insulation</th>
          <th>Voltage</th>
          <th>Temperature</th>
          <th>AWG Gauge</th>
        </tr>
        {products.map(item => {
          const { id } = item
          const {
            Name,
            Type,
            Insulation,
            Voltage,
            Temperature,
            AWG_Gauge,
            path,
          } = item.data
          return (
            <tr key={id}>
              <td>
                <Link to={path}>{Name}</Link>
              </td>
              <td>{Type}</td>
              <td>{Insulation}</td>
              <td>{Voltage}</td>
              <td>{Temperature}</td>
              <td>{AWG_Gauge}</td>
            </tr>
          )
        })}
      </table>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  margin: auto;
  align-items: center;
  width: 80vw;
  table {
    margin: auto;
    border-collapse: collapse;
    td,
    th {
      border: 2px solid #ddd;
      padding: 0.2rem;
      text-align: center;
    }
    tr:nth-child(even) {
      background-color: var(--clr-grey-10);
    }
    tr:hover {
      background-color: var(--clr-primary-9);
      cursor: pointer;
    }
    th {
      background-color: var(--clr-primary-10);
    }
  }
`

export default M16878
