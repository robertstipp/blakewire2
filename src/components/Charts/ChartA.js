import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { Link } from "gatsby"

const ChartA = () => {
  return (
    <Wrapper>
      <div className="container">
        <Link to="/catalog/mil-spec-wire/">
          <h5 className="info">Wire Cable</h5>
          <StaticImage src="../../images/graphicA.jpg" className="card" />
        </Link>
      </div>
      <div className="container">
        <Link to="/catalog/braiding/">
          <h5 className="info">Braided Sleeve</h5>
          <StaticImage src="../../images/graphicB.jpg" className="card" />
        </Link>
      </div>
      <div className="container">
        <Link to="/catalog/mil-spec-cable/">
          <h5 className="info">Red Cable</h5>
          <StaticImage src="../../images/graphicC.jpg" className="card" />
        </Link>
      </div>
      <div className="container">
        <h5 className="info">Fast Cable</h5>
        <StaticImage src="../../images/graphicD.jpg" className="card" />
      </div>
      <div className="container">
        <Link to="/table/m22759183">
          <h5 className="info">Super Fast Cable</h5>
          <StaticImage src="../../images/graphicE.jpg" className="card" />
        </Link>
      </div>
      <div className="container">
        <h5 className="info">Wire Cable</h5>
        <StaticImage src="../../images/graphicF.jpg" className="card" />
      </div>
      <div className="container">
        <h5 className="info">Wire Cable</h5>
        <StaticImage src="../../images/graphicG.jpg" className="card" />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin: auto;
  width: 90vw;
  display: grid;
  grid-gap: 1rem;
  padding: 2rem;
  grid-template-columns: 1fr;
  .info {
    position: absolute;
    font-size: 1rem;
    visibility: visible;
  }

  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
    .container {
      .card {
        border: solid #bdbdbd 1px;
        border-radius: 0.2rem;
        box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.5);
        transition: all 0.2s cubic-bezier(0.79, 0.33, 0.14, 0.53);
      }
      .info {
        display: flex;
        justify-content: center;
        position: absolute;
        visibility: visible;
        font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
        font-size: 3rem;
        letter-spacing: 3px;
        color: black;
        transition: all 0.2s cubic-bezier(0.79, 0.33, 0.14, 0.53);
      }
      :hover {
        .card {
          opacity: 0.2;
        }
        .info {
          visibility: visible;
          font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
          text-align: center;
          align-items: center;
          background-color: white;
        }
      }
    }
  }
`

export default ChartA
