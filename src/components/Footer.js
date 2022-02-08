import React from "react"
import styled from "styled-components"
const Footer = () => {
  return (
    <Wrapper>
      <p>
        &copy; {new Date().getFullYear()} <span>just bobby</span>. Built with{" "}
        <a className="accent" href="https://www.gatsbyjs.com">
          Gatsby
        </a>
      </p>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  height: 5rem;
  display: grid;
  place-items: center;
  background: var(--clr-black);
  text-align: center;
  padding: 1rem;
  p {
    color: var(--clr-white);
    margin-bottom: 0;
    @media (max-width: 576px) {
      font-size: 0.75rem;
    }
  }
  .accent {
    color: lightblue;
  }
`

export default Footer
