const airtableQuery = `
{
    allAirtable(filter: {table: {eq: "Catalog"}}) {
      nodes {
        id
        data {
          Name
        }
      }
    }
  }
`
function pageToAlgoliaRecord({ id, data: { Name } }) {
  return {
    objectID: id,
    Name,
  }
}

const queries = [
  {
    query: airtableQuery,
    transformer: ({ data }) => data.allAirtable.nodes.map(pageToAlgoliaRecord),
  },
]

module.exports = queries
