import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/layout'
import usePosts from '../hooks/usePosts'
import PostPreview from '../components/PostPreview'

const IndexPage = () => {
  const posts = usePosts()
  const recentPosts = posts.slice(0,5)
  return (
    <Layout title="Home">
      <h1>Check out the latest posts!</h1>
      {recentPosts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}

export default IndexPage
