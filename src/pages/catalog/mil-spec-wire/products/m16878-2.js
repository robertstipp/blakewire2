import React from "react"
import styled from "styled-components"
import { Layout } from "../../../../components"
import { useStaticQuery, graphql } from "gatsby"
import Title from "../../../../components/Title"

const M16878_2 = () => {
  const data = useStaticQuery(graphql`
    {
      allAirtable(
        filter: { table: { eq: "Test" }, data: { Type: { eq: "C" } } }
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
        }
      }
    }
  `)

  const {
    allAirtable: { nodes: products },
  } = data

  return (
    <Layout>
      <Wrapper>
        <h1>success</h1>
        <Title title="MIL-DTL-16878/2 TYPE C" />
        <table>
          <tr>
            <th>Blake Part Number</th>
            <th>AWG</th>
            <th>Stranding</th>
            <th>Nom. O.D in.</th>
            <th>Nom. Insulation Thick</th>
            <th>LBS/Mft</th>
          </tr>
          {products.map(item => {
            const { id } = item
            const {
              Blake_Part_Number,
              AWG,
              Stranding,
              OD,
              Thickness,
              LBS_MFT,
            } = item.data
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

export default M16878_2
