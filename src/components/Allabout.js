import React from 'react'
import { useParams } from 'react-router-dom'

const Allabout = () => {
    const {id} = useParams() //! which gets the id i mean :id in the url which now is 1 or 2 or 3
  return (
    <div><h1>All about {id}</h1></div> //!displays the id 
  )
}

export default Allabout