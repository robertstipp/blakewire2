import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components"
import BraidingProducts from "../../components/Products/braiding/BraidingProducts"

const Braiding = () => {
  return (
    <Layout>
      <BraidingProducts />
    </Layout>
  )
}
export default Braiding
