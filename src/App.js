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



//   //! array of post objects
//   //! commenting because we are goint to fetch the data from data - db.json file
//   //todo we launching the data in a dummy server with ----   npx json-server -p 3500 -w data/db.json
//   //bug after launching it gives a url which cointains the data   http://localhost:3500/posts
//   //note : downloading axios npm i axios
//   //hack :  we connect the via api in component/api/posts.js filez


// //   const[posts,setposts] = useState([{
// //     id:1,
// //     title: "First Post",
// //     content: "This is the content of the first post",
// //     author: "John Doe"
// //   },
// //   {
// //     id:2,
// //     title: "Second Post",
// //     content: "This is the content of the second post",
// //     author: "Jane Doe"
// //   },
// //   {
// //     id:3,
// //     title: "Third Post",
// //     content: "This is the content of the third post",
// //     author: "Mark Doe"
// //   },
// //   {
// //     id:4,
// //     title: "Fourth Post",
// //     content: "This is the content of the fourth post",
// //     author: "Arya Stark"
// //   },

// //   {
// //     id:5,
// //     title: "Fifth Post",
// //     content: "This is the content of the fifth post",
// //     author: "Tyrion Lannister"
// //   },
// //   {
// //     id:6,
// //     title: "Sixth Post",
// //     content: "This is the content of the sixth post",
// //     author: "Cersei Lannister"
// //   },
// //   {
// //     id:7,
// //     title: "Seventh Post",
// //     content: "This is the content of the seventh post",
// //     author: "Jon Snow"
// //   }

// // ])

// const [posts,setposts] = useState([])
//   const [search, setsearch] = useState("");
//   const [searchresult, setsearchresult] = useState([]) //note after search results match will shown in this array so we declare it as array 
//   const[postTitle,setpostTitle]=useState("")
//   const[postBody,setpostBody]=useState("")
//   const[postAuthor,setpostAuthor]=useState("")
//   const navigate = useNavigate()
//   const [editTitle,setEditTitle] = useState("")
//   const [editBody,setEditBody] = useState("")
//   const {width} = useWindowSize();  //note since width is a ohject in the hook we using it as a object
//   const {data,fetchError,isLoading} = useAxiosFetch("http://localhost:3500/posts"); //npte these are the objects in the useAxiso fetch 


// const handleSubmit = async(e) =>{
//   e.preventDefault();
//   const id = posts.length?posts[posts.length -1 ].id+1:1
//   const newPost = {id,title:postTitle,content:postBody,author:postAuthor}
// try{ //note we using inside a try block because we using api for better modularity
//   //note since we using axios we use api.post in await . since we using await we made this funciton async
//   const response = await api.post("/posts",newPost)

//   // allposts =[...posts, newPost] //! we are going update it with the response data which we get from axios
//   const allposts =[...posts,response.data]
//   setposts(allposts)
//     setpostTitle("")
//   setpostBody("")
// navigate("/")
// }

//   catch(err){
//     if(err.response){
//       //note if error has response like not in the 200 response range
//       console.log(err.response.data)
//       console.log(err.response.status)
//       console.log(err.response.headers)
//     }
//     else{
//       console.log(err.message)
//     }

//   }
// }

// //note handle delete without axios

// //   const handleDelete = (id) => {
// //     const remaining = posts.filter((post) => post.id !== id);
// //     setposts(remaining);
// //     navigate(`/`)
// // };

// //note handle delete with axios

// const handleDelete = async(id) => {
//   try{
//   await api.delete(`/posts/${id}`) 
//   const postList = posts.filter(post => post.id !== id);
//   setposts(postList);
//   //setposts(res);
//   navigate(`/`)
  
// }
// catch(err){
//   console.log(err.message)}
//   //const remaining = posts.filter((post) => post.id !== id);
//   //setposts(res);
// };


// const handleEdit =async(id) =>{
//         const ubdatedPost = { id, title: editTitle, content:editBody,author:postAuthor}  //note our post frame 

//         try{
//           const response = await api.put(`/posts/${id}`,ubdatedPost); //note since we have created a entire object with the edited content in ubdated post we use put
//           setposts(posts.map( post => post.id === id ?{...response.data}:post)) //note we just ubdating the content if the post is is equals to the id in the 
//           //note function else for other id remain the post unchanged 
//           setEditTitle("");
//           setEditBody();
//           navigate("/")
//         }
//         catch(err){
//           console.log(err.message)
//         }

//   }


  

// //note <----------------------------------------  WE COMMENTING IT TO REUSE WITH UseAxiosFetch hook ---------------------------------------->
// // useEffect(() => {
// //   const fetchPosts = async() =>{
// //     try{
  
// //       const response = await api.get("/posts")
// //       setposts(response.data);
// //     }
// //     catch(err){
// //       if(err.response){
// //         //hack if error has response like not in the 200 response range
// //         console.log(err.response.data)
// //         console.log(err.response.status)
// //         console.log(err.response.headers)
// //       }
// //       else{
// //         console.log(err.message)
// //       }
// //     }
// //   }
// //   fetchPosts();
// // },[]);

// //note<----------------------------------------  REPLACEMENT FOR GET  ---------------------------------------->

// useEffect(() => {
//   setposts(data);
// },[data]);


// useEffect(()=>{
//   const results = posts.filter((e)=>e.title.toLowerCase().includes(search.toLowerCase())|| 
//   e.author.toLowerCase().includes(search.toLowerCase())||
//   e.content.toLowerCase().includes(search.toLowerCase()))
//   setsearchresult(results);
// },[posts,search])


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
