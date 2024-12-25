import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Post = ({post}) => {

  return (
    <article className='post'>
      <Link to= {`post/${post.id}`}><h2>{post.title}</h2>
      <p className='postDate'>{post.author}</p></Link>
      <p className='postBody'>{post.content <= 25 ? post.content : `${(post.content).slice(0,30)}...`}</p>
    </article>


  )
}

export default Post