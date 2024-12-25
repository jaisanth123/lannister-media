import React from 'react'
import { useContext } from 'react'
import { FaMobileAlt, FaTabletAlt , FaLaptop} from 'react-icons/fa'
import DataContext from './context/DataContext';

//const Header = ({tittle,width}) => { //! we removed width because we are going to import it 
const Header = ({tittle}) => {
  const {width} = useContext(DataContext);

  return (
  
    <header className='Header'><h1>{tittle}</h1>
    {width < 768 ? <FaMobileAlt/> : width < 992 ? <FaTabletAlt/> : <FaLaptop />}</header>
    )
}
    
    
   

export default Header