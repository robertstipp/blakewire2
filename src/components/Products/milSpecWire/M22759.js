import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Title from "../../Title"

const M22759 = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(filter: { table: { eq: "M22759" } }) {
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
    <Wrapper>
      <Title title="M22759" />
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
          const { Name, Type, Insulation, Voltage, Temperature, AWG_Gauge } =
            item.data
          return (
            <tr key={id}>
              <td>{Name}</td>
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

  width: 90vw;
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
export default M22759
