import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"
import about from "../contstants/about"

const About = () => {
  return (
    <Layout>
      <Wrapper>
        {about.map(item => {
          const { id, label, content } = item
          return (
            <article key={id}>
              <h3 className="label">{label}</h3>
              <p className="content">{content}</p>
            </article>
          )
        })}
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  width: 90vw;
  padding: 2rem 0;
  margin: 0 auto;
  .label {
    padding-bottom: 0.2rem;
    color: var(--clr-primary-2);
    border-bottom: solid black 1px;
  }
  .content {
    color: var(--clr-black);
  }
`
export default About
