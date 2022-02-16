const path = require(`path`)
const slugify = require("slugify")

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
    const result11 = await graphql(`
      {
        allAirtable(
          filter: {
            table: { eq: "Product Table" }
            data: { Product: { eq: "TemplateK" } }
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
    const result12 = await graphql(`
      {
        allAirtable(
          filter: {
            table: { eq: "Product Table" }
            data: { Product: { eq: "TemplateL" } }
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
    const result13 = await graphql(`
      {
        allAirtable(
          filter: {
            table: { eq: "Product Table" }
            data: { Product: { eq: "TemplateM" } }
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
    const result14 = await graphql(`
      {
        allAirtable(
          filter: {
            table: { eq: "Product Table" }
            data: { Product: { eq: "TemplateN" } }
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
    const result15 = await graphql(`
      {
        allAirtable(
          filter: {
            table: { eq: "Product Table" }
            data: { Product: { eq: "TemplateO" } }
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
    const result16 = await graphql(`
      {
        allAirtable(
          filter: {
            table: { eq: "Product Table" }
            data: { Product: { eq: "TemplateP" } }
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
    const tableTemplateK = path.resolve(`./src/template/tableTemplateK.js`)
    const tableTemplateL = path.resolve(`./src/template/tableTemplateL.js`)
    const tableTemplateM = path.resolve(`./src/template/tableTemplateM.js`)
    const tableTemplateN = path.resolve(`./src/template/tableTemplateN.js`)
    const tableTemplateO = path.resolve(`./src/template/tableTemplateO.js`)
    const tableTemplateP = path.resolve(`./src/template/tableTemplateP.js`)

    result1.data.allAirtable.nodes.forEach(node => {
      const nameSlug = slugify(node.data.Chart, { lower: true })
      createPage({
        path: `/table/${nameSlug}`,
        component: ropeTemplate,
        context: {
          id: node.id,
          ID: node.id,
          Chart: node.data.Chart,
        },
      })
    })

    result2.data.allAirtable.nodes.forEach(node => {
      const nameSlug = slugify(node.data.Chart, { lower: true })
      createPage({
        path: `/table/${nameSlug}`,
        component: wireTemplate,
        context: {
          id: node.id,
          ID: node.id,
          Chart: node.data.Chart,
        },
      })
    })

    result3.data.allAirtable.nodes.forEach(node => {
      const nameSlug = slugify(node.data.Chart, { lower: true })
      createPage({
        path: `/table/${nameSlug}`,
        component: cableTemplate,
        context: {
          id: node.id,
          ID: node.id,
          Chart: node.data.Chart,
        },
      })
    })

    result4.data.allAirtable.nodes.forEach(node => {
      const nameSlug = slugify(node.data.Chart, { lower: true })
      createPage({
        path: `/table/${nameSlug}`,
        component: tableTemplateD,
        context: {
          id: node.id,
          ID: node.id,
          Chart: node.data.Chart,
        },
      })
    })
    result5.data.allAirtable.nodes.forEach(node => {
      const nameSlug = slugify(node.data.Chart, { lower: true })
      createPage({
        path: `/table/${nameSlug}`,
        component: tableTemplateE,
        context: {
          id: node.id,
          ID: node.id,
          Chart: node.data.Chart,
        },
      })
    })
    result6.data.allAirtable.nodes.forEach(node => {
      const nameSlug = slugify(node.data.Chart, { lower: true })
      createPage({
        path: `/table/${nameSlug}`,
        component: tableTemplateF,
        context: {
          id: node.id,
          ID: node.id,
          Chart: node.data.Chart,
        },
      })
    })
    result7.data.allAirtable.nodes.forEach(node => {
      const nameSlug = slugify(node.data.Chart, { lower: true })
      createPage({
        path: `/table/${nameSlug}`,
        component: tableTemplateG,
        context: {
          id: node.id,
          ID: node.id,
          Chart: node.data.Chart,
        },
      })
    })
    result8.data.allAirtable.nodes.forEach(node => {
      const nameSlug = slugify(node.data.Chart, { lower: true })
      createPage({
        path: `/table/${nameSlug}`,
        component: tableTemplateH,
        context: {
          id: node.id,
          ID: node.id,
          Chart: node.data.Chart,
        },
      })
    })
    result9.data.allAirtable.nodes.forEach(node => {
      const nameSlug = slugify(node.data.Chart, { lower: true })
      createPage({
        path: `/table/${nameSlug}`,
        component: tableTemplateI,
        context: {
          id: node.id,
          ID: node.id,
          Chart: node.data.Chart,
        },
      })
    })
    result10.data.allAirtable.nodes.forEach(node => {
      const nameSlug = slugify(node.data.Chart, { lower: true })
      createPage({
        path: `/table/${nameSlug}`,
        component: tableTemplateJ,
        context: {
          id: node.id,
          ID: node.id,
          Chart: node.data.Chart,
        },
      })
    })
    result11.data.allAirtable.nodes.forEach(node => {
      const nameSlug = slugify(node.data.Chart, { lower: true })
      createPage({
        path: `/table/${nameSlug}`,
        component: tableTemplateK,
        context: {
          id: node.id,
          ID: node.id,
          Chart: node.data.Chart,
        },
      })
    })
    result12.data.allAirtable.nodes.forEach(node => {
      const nameSlug = slugify(node.data.Chart, { lower: true })
      createPage({
        path: `/table/${nameSlug}`,
        component: tableTemplateL,
        context: {
          id: node.id,
          ID: node.id,
          Chart: node.data.Chart,
        },
      })
    })
    result13.data.allAirtable.nodes.forEach(node => {
      const nameSlug = slugify(node.data.Chart, { lower: true })
      createPage({
        path: `/table/${nameSlug}`,
        component: tableTemplateM,
        context: {
          id: node.id,
          ID: node.id,
          Chart: node.data.Chart,
        },
      })
    })
    result14.data.allAirtable.nodes.forEach(node => {
      const nameSlug = slugify(node.data.Chart, { lower: true })
      createPage({
        path: `/table/${nameSlug}`,
        component: tableTemplateN,
        context: {
          id: node.id,
          ID: node.id,
          Chart: node.data.Chart,
        },
      })
    })
    result15.data.allAirtable.nodes.forEach(node => {
      const nameSlug = slugify(node.data.Chart, { lower: true })
      createPage({
        path: `/table/${nameSlug}`,
        component: tableTemplateO,
        context: {
          id: node.id,
          ID: node.id,
          Chart: node.data.Chart,
        },
      })
    })
    result16.data.allAirtable.nodes.forEach(node => {
      const nameSlug = slugify(node.data.Chart, { lower: true })
      createPage({
        path: `/table/${nameSlug}`,
        component: tableTemplateP,
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
