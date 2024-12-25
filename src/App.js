import './App.css';
import './index.css';
import About from "./components/About.js"
import Footer from "./components/Footer.js"
import Header from "./components/Header.js"
import Home from "./components/Home.js"
import Missing from "./components/Missing.js"
import Nav from "./components/Nav.js"
import Newpost from "./components/Newpost.js"
import Postpage from "./components/Postpage.js"
import Post from "./components/Post.js"
import { useEffect, useState } from "react"
import { Routes, Route, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import api from "./components/api/posts.js";
import EditPost from "./components/EditPost.js";
import useWindowSize from "./components/hooks/useWindowSize.js";    //! we importing the fucntion in datacontext file  
import useAxiosFetch from './components/hooks/useAxiosFetch.js';
import { DataProvider } from './components/context/DataContext.js';
function App() {


  // ! < =========================== WE USE IT VIA DATA PROVIDER SO WE COMMETING HERE =========================>
  //! array of post objects
  //! commenting because we are goint to fetch the data from data - db.json file
  //todo we launching the data in a dummy server with ----   npx json-server -p 3500 -w data/db.json
  //bug after launching it gives a url which cointains the data   http://localhost:3500/posts
  //note : downloading axios npm i axios
  //hack :  we connect the via api in component/api/posts.js fil



  return (
      


    <div className="App">
      <DataProvider>
         {/*<Header tittle="Lannisters" width = {width}/>//we passing the width as a prop*/ }
        <Header tittle="Lannisters"/> {/*//! we removed width because we will import there */ }
        <Nav />  


        <Routes>
          <Route path="/" element={<Home  />}></Route>
          <Route path="/post" >
    <Route index element={
        <Newpost  />
    } />
    <Route path=":id" element={<Postpage  />} />
</Route>  
          <Route path="/edit/:id" element ={<EditPost/>} />

          <Route path="/about" element={<About />}></Route>
          <Route path="/*" element={<Missing />}></Route>

{/*               
        <Postpage/>
        <About />
        <Missing/>
        */}

        </Routes>
        <Footer />
        </DataProvider>
    </div>
  );
}

export default App;
