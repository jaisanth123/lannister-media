import React, { useContext } from 'react'
import Feed from "./Feed"
import DataContext from './context/DataContext'
const Home = () => {
  const {searchresult , fetchError , isLoading} = useContext(DataContext)
  return (
      <main className='Home '>
        {isLoading && <h1 className='statusMsg'>Loading posts...</h1>}
        {!isLoading && fetchError && <p className='errorMsg'>{fetchError}</p>}
        {!isLoading && !fetchError && (searchresult.length ? <Feed posts = {searchresult}/>: <p className='statusMsg'>No posts to dispaly.</p>)}

      </main>


  )
}

export default Home