import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const Newpost = () => {
  const {handleSubmit,postTitle,setpostTitle,postBody,setpostBody,postAuthor,setpostAuthor} = useContext(DataContext);
  return (

    <main  className='NewPost'>
          <h2>New Post:</h2>
          <form className="newPostForm" onSubmit={handleSubmit}>
            
          <label htmlFor='postTitle'>Title</label>
            <input type="text" value={postTitle} required id = "postTitle" onChange={(e)=>setpostTitle(e.target.value)}></input>
            <label htmlFor='postTitleAuthor'>Author</label>
            <input type="text" value={postAuthor} required id = "postAuthor" onChange={(e)=>setpostAuthor(e.target.value)}></input>
            <label htmlFor="postBody">Body</label>
            <textarea id = "postBody" value ={postBody} required onChange={(e)=>setpostBody(e.target.value)}></textarea>
            <button type="submit">Create Post</button>
          </form>
          

    </main>

  )
}

export default Newpost