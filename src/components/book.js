import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TheBook extends Component {
  render() {
    const { title, author, publicationDate, image: {file: {url}}} = this.props.data.contentfulBook
    return (
      <div style={{padding: '0 1rem'}}>
        <h1>{title}</h1>
        <div><strong>Author: </strong>{author}</div>
        <div><strong>Published: </strong>{publicationDate}</div>
        <img style={{width: '300px'}} src={url} alt='logo'/>
      </div>
    )
  }
}

TheBook.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TheBook

export const pageQuery = graphql`
  query bookPostQuery($slug: String!){
    contentfulBook(slug: {eq: $slug}) {
      title
      author
      publicationDate(formatString: "MMMM Do, YYYY")
      slug
      image {
        file {
          url
        }
      }
    }
  }
`