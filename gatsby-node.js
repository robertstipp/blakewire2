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
          }
        }
      }
    `)
    const wireTemplate = path.resolve(`./src/template/wireTemplate.js`)
    const ropeTemplate = path.resolve(`./src/template/ropeTemplate.js`)

    result1.data.allAirtable.nodes.forEach(node => {
      createPage({
        path: `/rope/${node.id}`,
        component: ropeTemplate,
        context: {
          id: node.id,
        },
      })
    })

    result2.data.allAirtable.nodes.forEach(node => {
      createPage({
        path: `/wire/${node.id}`,
        component: wireTemplate,
        context: {
          id: node.id,
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
