import React from 'react'
import Layout from '../components/layout'
import usePosts from '../hooks/usePosts'
import PostPreview from '../components/PostPreview'

const Dev = () => {
  const posts = usePosts()
  const devPosts = posts.filter(post => post.category === 'dev')
  return (
    <Layout title="Dev">
      <h1>Dev Posts</h1>
      {devPosts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}

export default Dev
