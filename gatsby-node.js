// const path = require("path")
// const slugify = require("slugify")
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions

//   const result = await graphql(`
//     query GetTables {
//       allAirtable {
//         distinct(field: table)
//       }
//     }
//   `)

//   result.data.allContentfulWorkout.nodes.forEach(workout => {
//     workout.content.tags.forEach(tag => {
//       const tagSlug = slugify(tag, { lower: true })
//       createPage({
//         path: `/tags/${tagSlug}`,
//         component: path.resolve(`src/templates/tag-template.js`),
//         context: {
//           tag: tag,
//         },
//       })
//     })
//   })
// }

//  result.data.allAirtable.forEach((node) => {
//     createPage({
//       path: NODE_SLUG,
//       component: templatePath,
//       context: {
//         slug: NODE_SLUG,
//       },
//     })
//   })
// }
