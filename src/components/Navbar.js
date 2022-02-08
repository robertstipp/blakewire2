import React, { useContext } from "react"
import styled from "styled-components"
import logo from "../images/logo.png"
import { Link } from "gatsby"
import { GoThreeBars } from "react-icons/go"

import { GatsbyContext } from "../context/context"

const Navbar = () => {
  const { isSidebarOpen, showSidebar, links } = useContext(GatsbyContext)
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="blakewire" />
          </Link>
          {!isSidebarOpen && (
            <button className="toggle-btn" onClick={showSidebar}>
              <GoThreeBars />
            </button>
          )}
        </div>
        <ul className="nav-links">
          {links.map(link => {
            const { label, url } = link
            return (
              <Link to={url}>
                <li>{label}</li>
              </Link>
            )
          })}
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: relative;
  background: transparent;
  z-index: 1;
  height: 5rem;
  display: flex;
  align-items: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    color: var(--clr-white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: auto;
    }
    .toggle-btn {
      width: 3.5rem;
      height: 2.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.75rem;
      border-radius: 0.2rem;
      border: transparent;
      color: var(--clr-white);
      background: var(--clr-primary-2);
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        background: var(--clr-primary-4);
      }
    }
  }
  .nav-links {
    display: none;
  }
  @media (min-width: 800px) {
    .nav-header {
      .toggle-btn {
        display: none;
      }
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 0 2rem;
      grid-gap: 0 4rem;
      align-items: center;
    }
    .nav-links {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 0 3rem;
      max-width: 800px;
    }
    li {
      color: var(--clr-grey-4);
      text-align: center;
      border: 1px solid transparent;
      text-transform: uppercase;
      padding: 0.25rem;
      position: relative;
      font-family: sans-serif;
      font-weight: bold;
      transition: var(--transition);
      &:hover {
        border-bottom: 1px solid black;
      }
    }
  }
`

export default Navbar
