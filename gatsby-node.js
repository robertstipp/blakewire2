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
    const result5 = await graphql(`
      {
        allAirtable(
          filter: {
            table: { eq: "Product Table" }
            data: { Product: { eq: "TemplateE" } }
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
    const result6 = await graphql(`
      {
        allAirtable(
          filter: {
            table: { eq: "Product Table" }
            data: { Product: { eq: "TemplateF" } }
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

    const result7 = await graphql(`
      {
        allAirtable(
          filter: {
            table: { eq: "Product Table" }
            data: { Product: { eq: "TemplateG" } }
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
    const result8 = await graphql(`
      {
        allAirtable(
          filter: {
            table: { eq: "Product Table" }
            data: { Product: { eq: "TemplateH" } }
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
    const result9 = await graphql(`
      {
        allAirtable(
          filter: {
            table: { eq: "Product Table" }
            data: { Product: { eq: "TemplateI" } }
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
    const result10 = await graphql(`
      {
        allAirtable(
          filter: {
            table: { eq: "Product Table" }
            data: { Product: { eq: "TemplateJ" } }
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
    const tableTemplateE = path.resolve(`./src/template/tableTemplateE.js`)
    const tableTemplateF = path.resolve(`./src/template/tableTemplateF.js`)
    const tableTemplateG = path.resolve(`./src/template/tableTemplateG.js`)
    const tableTemplateH = path.resolve(`./src/template/tableTemplateH.js`)
    const tableTemplateI = path.resolve(`./src/template/tableTemplateI.js`)
    const tableTemplateJ = path.resolve(`./src/template/tableTemplateJ.js`)

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
    result5.data.allAirtable.nodes.forEach(node => {
      createPage({
        path: `/E/${node.id}`,
        component: tableTemplateE,
        context: {
          id: node.id,
          ID: node.id,
          Chart: node.data.Chart,
        },
      })
    })
    result6.data.allAirtable.nodes.forEach(node => {
      createPage({
        path: `/F/${node.id}`,
        component: tableTemplateF,
        context: {
          id: node.id,
          ID: node.id,
          Chart: node.data.Chart,
        },
      })
    })
    result7.data.allAirtable.nodes.forEach(node => {
      createPage({
        path: `/G/${node.id}`,
        component: tableTemplateG,
        context: {
          id: node.id,
          ID: node.id,
          Chart: node.data.Chart,
        },
      })
    })
    result8.data.allAirtable.nodes.forEach(node => {
      createPage({
        path: `/H/${node.id}`,
        component: tableTemplateH,
        context: {
          id: node.id,
          ID: node.id,
          Chart: node.data.Chart,
        },
      })
    })
    result9.data.allAirtable.nodes.forEach(node => {
      createPage({
        path: `/I/${node.id}`,
        component: tableTemplateI,
        context: {
          id: node.id,
          ID: node.id,
          Chart: node.data.Chart,
        },
      })
    })
    result10.data.allAirtable.nodes.forEach(node => {
      createPage({
        path: `/I/${node.id}`,
        component: tableTemplateJ,
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
