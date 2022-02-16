import React from "react"
import { Layout, Hero, Services, Algolia } from "../components"
import ChartA from "../components/Charts/ChartA"

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <Algolia />
      <ChartA />
    </Layout>
  )
}

export default HomePage
