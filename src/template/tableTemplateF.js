import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components"
import styled from "styled-components"
import Title from "../components/Title"

const TableTemplateF = ({ data }) => {
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
            <th>M17Number</th>
            <th>Jacket Material</th>
            <th>Cap</th>
            <th>Shield</th>
            <th>OD</th>
            <th>OperatingTemp Range</th>
            <th>Operating Volts</th>
            <th>Nom. Impedance</th>
          </tr>
          {products.map(item => {
            const { id } = item
            const {
              Blake_Part_Number,
              M17Number,
              JacketMaterial,
              Cap,
              Shield,
              OD,
              OperatingTempRange,
              OperatingVolt,
              NomImp,
            } = item.data
            return (
              <tr key={id}>
                <td>{Blake_Part_Number}</td>
                <td>{M17Number}</td>
                <td>{JacketMaterial}</td>
                <td>{Cap}</td>
                <td>{Shield}</td>
                <td>{OD}</td>
                <td>{OperatingTempRange}</td>
                <td>{OperatingVolt}</td>
                <td>{NomImp}</td>
              </tr>
            )
          })}
        </table>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query ChartQueryF($Chart: String) {
    allAirtable(filter: { table: { eq: $Chart } }) {
      nodes {
        id
        data {
          Blake_Part_Number
          M17Number
          JacketMaterial
          Cap
          Shield
          OD
          OperatingTempRange
          OperatingVolt
          NomImp
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

export default TableTemplateF
