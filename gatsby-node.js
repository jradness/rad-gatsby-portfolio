const path = require('path')

exports.createPages = ({graphql, boundActionCreators}) => {
  const {createPage} = boundActionCreators
  return new Promise((resolve, reject) => {
    const bookTemplate = path.resolve('src/components/book.js')
    resolve(
      graphql(`
        {
          allContentfulBook (limit: 100) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors)
        }
        result.data.allContentfulBook.edges.forEach((edge) => {
          createPage ({
            path: edge.node.slug,
            component: bookTemplate,
            context: {
              slug: edge.node.slug
            }
          })
        })
        return
      })
    )
  })
}