import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-mdx'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import ReadLink from '../components/ReadLink'

export const query = graphql`
  query($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        date
      }
      code {
        body
      }
    }
  }
`

const PostTemplate = ({ data: { mdx: post } }) => (
  <Layout title={post.frontmatter.title}>
    <h1>{post.frontmatter.title}</h1>
    <p
      css={css`
        font-size: 0.75rem;
      `}
    >
      Posted by {post.frontmatter.author} - {post.frontmatter.date}
    </p>
    <MDXRenderer>{post.code.body}</MDXRenderer>
    <ReadLink to="/">&larr; back to all posts</ReadLink>
  </Layout>
)

export default PostTemplate
