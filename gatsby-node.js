const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise(async resolve => {
    const result1 = await graphql(`
      {
        allAirtable(
          filter: {
            table: { eq: "Product Table" }
            data: { Product: { eq: "Rope" } }
          }
        ) {
          nodes {
            id
            data {
              Chart
            }
          }
        }
      }
    `)

    const result2 = await graphql(`
      {
        allAirtable(
          filter: {
            table: { eq: "Product Table" }
            data: { Product: { eq: "Wire" } }
          }
        ) {
          nodes {
            id
            data {
              Chart
            }
          }
        }
      }
    `)

    const result3 = await graphql(`
      {
        allAirtable(
          filter: {
            table: { eq: "Product Table" }
            data: { Product: { eq: "Cable" } }
          }
        ) {
          nodes {
            id
            data {
              Chart
            }
          }
        }
      }
    `)
    const result4 = await graphql(`
      {
        allAirtable(
          filter: {
            table: { eq: "Product Table" }
            data: { Product: { eq: "TemplateD" } }
          }
        ) {
          nodes {
            id
            data {
              Chart
            }
          }
        }
      }
    `)

    const wireTemplate = path.resolve(`./src/template/wireTemplate.js`)
    const ropeTemplate = path.resolve(`./src/template/ropeTemplate.js`)
    const cableTemplate = path.resolve(`./src/template/cableTemplate.js`)
    const tableTemplateD = path.resolve(`./src/template/tableTemplateD.js`)

    result1.data.allAirtable.nodes.forEach(node => {
      createPage({
        path: `/rope/${node.id}`,
        component: ropeTemplate,
        context: {
          id: node.id,
          ID: node.id,
          Chart: node.data.Chart,
        },
      })
    })

    result2.data.allAirtable.nodes.forEach(node => {
      createPage({
        path: `/wire/${node.id}`,
        component: wireTemplate,
        context: {
          id: node.id,
          ID: node.id,
          Chart: node.data.Chart,
        },
      })
    })

    result3.data.allAirtable.nodes.forEach(node => {
      createPage({
        path: `/cable/${node.id}`,
        component: cableTemplate,
        context: {
          id: node.id,
          ID: node.id,
          Chart: node.data.Chart,
        },
      })
    })

    result4.data.allAirtable.nodes.forEach(node => {
      createPage({
        path: `/d/${node.id}`,
        component: tableTemplateD,
        context: {
          id: node.id,
          ID: node.id,
          Chart: node.data.Chart,
        },
      })
    })

    resolve()
  })
}

// const path = require(`path`)
// const slugify = require("slugify")
// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions
//   return new Promise(async resolve => {
//     const result = await graphql(`
//       {
//         allAirtable(filter: { table: { eq: "Test" } }) {
//           distinct(field: data___Type)
//         }
//       }
//     `)

//     result.data.allAirtable.distinct.forEach(node => {
//       createPage({
//         path: `/${node}`,
//         component: path.resolve(`./src/template/product-template.js`),
//         context: {
//           Type: node,
//         },
//       })
//     })
//     resolve()
//   })
// }

//     const result = await graphql(`
//       {
//         allAirtable {
//           edges {
//             node {
//               id
//               table
//               data {
//                 Name
//               }
//             }
//           }
//         }
//       }
//     `)
//     // For each path, create page and choose a template.
//     // values in context Object are available in that page's query
//     result.data.allAirtable.edges.forEach(({ node }) => {
//       const nameSlug = slugify(node.data.Name, { lower: true })
//       createPage({
//         path: `/${nameSlug}`,
//         component: path.resolve(`./src/template/product-template.js`),
//         context: {
//           Name: node.data.Name,
//         },
//       })
//     })
//     resolve()
//   })
// }
