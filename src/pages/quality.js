import React from "react"
import styled from "styled-components"
import { Layout, QualityCard } from "../components"
import data from "../contstants/quality"

const Quality = () => {
  return (
    <Layout>
      <Wrapper>
        {data.map(item => {
          return <QualityCard data={item} />
        })}
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  @media (min-width: 800px) {
    width: 90vw;
    padding: 2rem 0;
    margin: 0 auto;
  }
`

export default Quality
