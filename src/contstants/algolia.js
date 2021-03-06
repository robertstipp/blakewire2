const airtableQuery = `
{
    allAirtable(filter: {table: {in: ["M22759", "M16878","M81044","M81822","MIL-DTL-17", "Databus Cables","Un-insulated Buss Wire","Braiding", "Tubing","MIL-DTL-16878/1 TYPE B"]}})  {
      nodes {
        id
        data {
          Name
          Description
        }
        table
      }
    }
  }
`
function pageToAlgoliaRecord({ id, table, data: { Name, Description } }) {
  return {
    objectID: id,
    Name,
    Description,
    table,
  }
}

const queries = [
  {
    query: airtableQuery,
    transformer: ({ data }) => data.allAirtable.nodes.map(pageToAlgoliaRecord),
  },
]

module.exports = queries
