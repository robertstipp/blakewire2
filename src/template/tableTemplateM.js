import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components"
import styled from "styled-components"
import Title from "../components/Title"

const TableTemplateM = ({ data }) => {
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
            <th>Expanded ID</th>
            <th>Recovered ID</th>
            <th>Recovered Wall Thickness</th>
          </tr>
          {products.map(item => {
            const { id } = item
            const {
              Blake_Part_Number,
              ExpandedID,
              RecoveredID,
              RecoveredWallThickness,
            } = item.data
            return (
              <tr key={id}>
                <td>{Blake_Part_Number}</td>
                <td>{ExpandedID}</td>
                <td>{RecoveredID}</td>
                <td>{RecoveredWallThickness}</td>
              </tr>
            )
          })}
        </table>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query ChartQueryM($Chart: String) {
    allAirtable(filter: { table: { eq: $Chart } }) {
      nodes {
        id
        data {
          Blake_Part_Number
          ExpandedID
          RecoveredID
          RecoveredWallThickness
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
    margin-bottom: 2rem;
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

export default TableTemplateM
