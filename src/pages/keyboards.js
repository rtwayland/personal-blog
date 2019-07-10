import React from 'react'
import Layout from '../components/layout'
import usePosts from '../hooks/usePosts'
import PostPreview from '../components/PostPreview'

const Keyboards = () => {
  const posts = usePosts()
  const keyboardPosts = posts.filter(post => post.category === 'keyboards')
  return (
    <Layout title="Keyboards">
      <h1>Keyboard Posts</h1>
      {keyboardPosts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  )
}

export default Keyboards
