import { graphql, useStaticQuery } from 'gatsby'

const usePosts = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            author
            slug
            category
            date
          }
          excerpt
        }
      }
    }
  `)

  return data.allMdx.nodes
    .map(post => ({
      title: post.frontmatter.title,
      author: post.frontmatter.author,
      slug: post.frontmatter.slug,
      category: post.frontmatter.category,
      date: post.frontmatter.date,
      excerpt: post.excerpt,
    }))
    .sort((cur, next) => new Date(next.date) - new Date(cur.date))
}

export default usePosts
