import React from "react"

const M16878 = ({ products }) => {
  return (
    <div>
      <h1>M16878</h1>
      {products.map(item => {
        const { id } = item
        const { Name, Type, Insulation, Voltage, Temperature, AWG_Gauge } =
          item.data
        return (
          <div key={id}>
            <h3>
              {Name} {Type} {Insulation} {Voltage} {Temperature} {AWG_Gauge}
            </h3>
          </div>
        )
      })}
    </div>
  )
}

export default M16878
