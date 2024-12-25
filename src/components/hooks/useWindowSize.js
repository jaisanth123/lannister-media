import React from 'react'
import {useState , useEffect} from "react"
 const useWindowSize = () => {

    const [windowSize , setWindowSize ] = useState({  //! we declaring a object inside it of height and width
        height : undefined,
        width : undefined,
    })


    useEffect (()=> {

            const handleResize =() => {

                setWindowSize({width: window.innerWidth ,
                    height:window.innerHeight
                });}
        handleResize();
        window.addEventListener("resize",handleResize);
        return () => window.removeEventListener("resize",handleResize);
    },[])




  return windowSize;
}


export default useWindowSize
