import React from 'react'
import {Link} from "react-router-dom"


const About = () => {
  return (
    <main  className='About'>

      <h1>About</h1>
      <p style={{marginTop:"2rem"}}>this is the about page</p>
        {/* <Link to= "/about/1">about</Link><br></br>
        <Link to= "/about/2">about2</Link><br></br>
        <Link to= "/about/3">about3</Link><br></br> 
        {/* //todo we decaled id so it dispalys all About 3 */}
        {/* <Link to = "/about/newabout"> About Hard </Link> 
        //! hardcode to call all about  it will display all about alone it  wont display the id */} 

    
    </main>
  )
}

export default About