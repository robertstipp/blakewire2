import React from "react"
import { Layout } from "../components"
import styled from "styled-components"
import { Link } from "gatsby"

import { GiBoltBomb } from "react-icons/gi"
const Error = () => {
  return (
    <Layout>
      <Wrapper>
        <div>
          <GiBoltBomb size={70} />
          <h1>oops.</h1>
          <h3>The page you are looking for doesn't exist.</h3>
          <Link to="/" className="btn">
            home
          </Link>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  margin-top: -5rem;
  background: var(--clr-white);
  min-height: calc(100vh - 5rem);
  display: grid;
  place-items: center;
  padding: 0 1rem;
  div {
    text-align: center;
    color: var(--clr-black);
  }
  h1 {
    font-size: 5rem;
  }
  h3 {
    text-transform: none;
    margin-top: 1.5rem;
    margin-bottom: 1.75rem;
  }
`

export default Error
