const airtableQuery = `
{
    allAirtable(filter: {table: {eq: "ProductCatalog"}}) {
      nodes {
        table
        data {
          Name
          Type
          AWG_Range
          Insulation
          Temperature
          Voltage
        }
        id
      }
    }
  }
`
function pageToAlgoliaRecord({
  id,
  data: { Name, Type, AWG_Range, Insulation, Temperature, Voltage },
}) {
  return {
    objectID: id,
    Name,
    Type,
    AWG_Range,
    Insulation,
    Temperature,
    Voltage,
  }
}

const queries = [
  {
    query: airtableQuery,
    transformer: ({ data }) => data.allAirtable.nodes.map(pageToAlgoliaRecord),
  },
]

module.exports = queries
