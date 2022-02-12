import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components"
import TubingProducts from "../../components/Products/tubing/TubingProducts"

const Tubing = () => {
  return (
    <Layout>
      <TubingProducts />
    </Layout>
  )
}
export default Tubing
