import React from 'react'
import Link from 'gatsby-link'

const Section = {
  color: 'red',
  textDecoration: 'none',
}

const Thing = {
  border: '1px solid black',
  padding: '1rem',
  margin: '1rem'
}

const Img = {
  width: '100%',
  maxWidth: '250px'
}

const Box = {
  display: 'flex',
  // justifyContent: 'space-between',
  flexWrap: 'wrap',
}

const BookPost = ({node}) => {
  return (
    <div style={Thing}>
      <Link style={Section} to={node.slug}>
        <h3>{node.title}</h3>
        <img style={Img} src={node.image.file.url} alt='logo'/>
      </Link>
    </div>
  )
}
const IndexPage = ({data}) => (
  <div style={Box}>
    {data.allContentfulBook.edges.map((edge) => <BookPost node={edge.node} />)}
  </div>
)

export default IndexPage

export const pageQuery = graphql`
   query pageQuery {
    allContentfulBook (
    sort:{ fields: [title], order: ASC }
    ) {
        edges {
          node {
            title
            image {
              file {
                url
              }
            }
            slug
          }
        }
      }
   }
`