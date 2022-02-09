import React from "react"
import styled from "styled-components"

const ContactCard = ({ contact }) => {
  const { id, label, location, strAddr, cityStZip, officeNum, faxNum, email } =
    contact
  return (
    <Wrapper key={id}>
      <h2 className="label">{label}</h2>
      <h4 className="location">{location}</h4>
      <h5>{strAddr}</h5>
      <h5>{cityStZip}</h5>
      <h5>Office: {officeNum}</h5>
      <h5>Fax: {faxNum}</h5>
      <h5>{email}</h5>
    </Wrapper>
  )
}

const Wrapper = styled.article`
  background-color: var(--clr-grey-10);
  color: var(--clr-black);
  border: 1px solid black;
  padding: 1rem;
  margin: 1rem;
  border-radius: 0.25rem;
  .label {
    color: var(--clr-primary-2);
  }
`

export default ContactCard
