import React from "react"
import { Layout, ContactCard } from "../components"
import { contactData } from "../contstants/contact"
import styled from "styled-components"

const Contact = () => {
  return (
    <Layout>
      <Wrapper>
        <section>
          {contactData.map(contact => {
            return <ContactCard contact={contact} />
          })}
        </section>
        <section>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13198.7525179129!2d-118.484915!3d34.205444!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9747ebd2d9c80ad9!2sBlake%20Wire%20%26%20Cable%20Corporation!5e0!3m2!1sen!2sus!4v1642876191364!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </section>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.main`
  @media (min-width: 800px) {
    width: 90vw;
    padding: 2rem 0;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
`

export default Contact
