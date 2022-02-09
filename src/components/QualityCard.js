import React from "react"
import styled from "styled-components"

const QualityCard = ({ data }) => {
  const { id, pic, label, content } = data
  return (
    <article key={id}>
      <h2>{label}</h2>
      <p>{content}</p>
      <img src={pic} alt="" />
    </article>
  )
}

const Wrapper = styled.article``

export default QualityCard
