import { gql } from '@apollo/client'

export const GET_ARTICLES = gql`
  query GetArticles {
    articleList {
      items {
        title
        body {
          html
        }
        image {
          _path
        }
      }
    }
  }
`
