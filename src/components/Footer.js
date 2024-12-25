import React from 'react'
const today = new Date()
const Footer = () => {
  return (
    <footer className='Footer'><h1>Copyright &copy;{today.getFullYear()} </h1></footer>
  )
}

export default Footer