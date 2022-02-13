import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components"
import styled from "styled-components"

const ProductTemplate = ({ data }) => {
  const products = data.allAirtable.nodes
  console.log(products)
  return (
    <Layout>
      <Wrapper>
        <table>
          <tr>
            <th>Blake Part Number</th>
            <th>AWG</th>
            <th>Stranding</th>
            <th>Nom. O.D in.</th>
            <th>Nom. Insulation Thick</th>
            <th>LBS/Mft</th>
          </tr>
          {products.map(product => {
            const { data, id } = product
            const {
              Blake_Part_Number,
              AWG,
              Stranding,
              OD,
              Thickness,
              LBS_MFT,
            } = data
            return (
              <tr key={id}>
                <td>{Blake_Part_Number}</td>
                <td>{AWG}</td>
                <td>{Stranding}</td>
                <td>{OD}</td>
                <td>{Thickness}</td>
                <td>{LBS_MFT}</td>
              </tr>
            )
          })}
        </table>
      </Wrapper>
    </Layout>
  )
}

export const query = graphql`
  query GetProduct($Type: String) {
    allAirtable(
      filter: { table: { eq: "Test" }, data: { Type: { eq: $Type } } }
    ) {
      nodes {
        data {
          Blake_Part_Number
          AWG
          Stranding
          OD
          Thickness
          LBS_MFT
        }
        id
      }
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
export default ProductTemplate
