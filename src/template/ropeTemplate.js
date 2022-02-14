import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components"
import styled from "styled-components"
import Title from "../components/Title"

const RopeTemplate = ({ data }) => {
  const {
    allAirtable: { nodes: products },
  } = data
  const title = data.allAirtable.distinct[0]
  return (
    <Layout>
      <Wrapper>
        <h1>success</h1>
        <Title title={title} />
        <table>
          <tr>
            <th>Blake Part Number</th>
            <th>AWG</th>
            <th>Stranding</th>
            <th>Min OD</th>
            <th>Max OD</th>
            <th>Nom. OD</th>
          </tr>
          {products.map(item => {
            const { id } = item
            const { Blake_Part_Number, AWG, Stranding, MaxOD, MinOD, NomOD } =
              item.data
            return (
              <tr key={id}>
                <td>{Blake_Part_Number}</td>
                <td>{AWG}</td>
                <td>{Stranding}</td>
                <td>{MinOD}</td>
                <td>{MaxOD}</td>
                <td>{NomOD}</td>
              </tr>
            )
          })}
        </table>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query ChartRopeQuery($Chart: String) {
    allAirtable(filter: { table: { eq: $Chart } }) {
      nodes {
        id
        data {
          Blake_Part_Number
          AWG
          Stranding
          MaxOD
          MinOD
          NomOD
        }
        table
      }
      distinct(field: table)
    }
  }
`

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

export default RopeTemplate
