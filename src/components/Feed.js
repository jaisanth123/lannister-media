import React from 'react'
import Post from "./Post"

const Feed = ({posts}) => {
  return (
    <>
       { posts.map(posts => (
            <Post key = {posts.id} post={posts} />)) }
    </>     
  )
}

export default Feed