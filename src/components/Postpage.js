
import { useParams,Link } from 'react-router-dom'
import DataContext from './context/DataContext'
import { useContext } from 'react'



const Postpage = () => {
  const {posts , handleDelete} = useContext(DataContext)
  const { id } = useParams()
  const post = posts.find(post => (post.id).toString() === id)

  
  return (
    <main className ="Postpage">
    <article className='post'>

      {post &&
      <>      <h2>{post.title}</h2>
      <p className='postDate'>{post.author}</p>
      <p className='postBody'>{post.content }</p>
      <Link to ={`/edit/${post.id}`}>
      <button className='editButton'  >Edit Post</button></Link>
      <button className='deleteButton' onClick={()=> handleDelete(post.id)}>Delete Post</button>
  

      </>}
      {
        !post &&
        <>
            <h2>Successfully deleted</h2>
            <Link to='/'>Back to Home</Link>
         
        </>
      }
    
     
    </article>
    </main>
  )
}

export default Postpage

