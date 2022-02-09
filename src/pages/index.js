import React from "react"
import { Layout, Hero, Services, Algolia } from "../components"

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Algolia />
    </Layout>
  )
}

export default HomePage
