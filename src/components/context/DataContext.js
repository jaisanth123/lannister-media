//note   use context hook 
import { createContext , useState , useEffect  } from "react";
import useWindowSize from "../hooks/useWindowSize.js";    //! we importing the fucntion from the file 

import useAxiosFetch from "../hooks/useAxiosFetch.js";
import { useNavigate } from 'react-router-dom';
import api from "../api/posts.js";

const DataContext = createContext({});

export const DataProvider  = ({children}) => {


    //bug: complete this page 
    //bug: use dataprovider in the app.js
    //bug: send the corresponding value to the component 
    //bug: remove the pro sending in the routing in app.js
    //bug: remove the pro receving  in the routing in the compenent
    //bug: im the appropriate component import the correct prop 





const [posts,setposts] = useState([])
  const [search, setsearch] = useState("");
  const [searchresult, setsearchresult] = useState([]) //note  after search results match will shown in this array so we declare it as array 
  const[postTitle,setpostTitle]=useState("")
  const[postBody,setpostBody]=useState("")
  const[postAuthor,setpostAuthor]=useState("")
  const navigate = useNavigate()
  const [editTitle,setEditTitle] = useState("")
  const [editBody,setEditBody] = useState("")
  const {width} = useWindowSize();  //note   since width is a ohject in the hook we using it as a object
  const {data,fetchError,isLoading} = useAxiosFetch("http://localhost:3500/posts"); //note   these are the objects in the useAxiso fetch 


const handleSubmit = async(e) =>{
  e.preventDefault();
  const id = posts.length?posts[posts.length -1 ].id+1:1
  const newPost = {id,title:postTitle,content:postBody,author:postAuthor}
try{ //note   we using inside a try block because we using api for better modularity
  //note   since we using axios we use api.post in await . since we using await we made this funciton async
  const response = await api.post("/posts",newPost)

  // allposts =[...posts, newPost] //note   we are going update it with the response data which we get from axios
  const allposts =[...posts,response.data]
  setposts(allposts)
    setpostTitle("")
  setpostBody("")
navigate("/")
}

  catch(err){
    if(err.response){
      //note   if error has response like not in the 200 response range
      console.log(err.response.data)
      console.log(err.response.status)
      console.log(err.response.headers)
    }
    else{
      console.log(err.message)
    }

  }
}


//todo handle delete with axios

const handleDelete = async(id) => {
  try{
  await api.delete(`/posts/${id}`) 
  const postList = posts.filter(post => post.id !== id);
  setposts(postList);
  //setposts(res);
  navigate(`/`)
  
}
catch(err){
  console.log(err.message)}
  //const remaining = posts.filter((post) => post.id note  == id);
  //setposts(res);
};


const handleEdit =async(id) =>{
        const ubdatedPost = { id, title: editTitle, content:editBody,author:postAuthor}  //note our post frame 

        try{
          const response = await api.put(`/posts/${id}`,ubdatedPost); //note since we have created a entire object with the edited content in ubdated post we use put
          setposts(posts.map( post => post.id === id ?{...response.data}:post)) //notewe just ubdating the content if the post is is equals to the id in the 
          //note   function else for other id remain the post unchanged 
          setEditTitle("");
          setEditBody();
          navigate("/")
        }
        catch(err){
          console.log(err.message)
        }

  }

useEffect(() => {
  setposts(data);
},[data]);


useEffect(()=>{
  const results = posts.filter((e)=>e.title.toLowerCase().includes(search.toLowerCase())|| 
  e.author.toLowerCase().includes(search.toLowerCase())||
  e.content.toLowerCase().includes(search.toLowerCase()))
  setsearchresult(results);
},[posts,search])



    return (

        <DataContext.Provider value={{  //!   it should have double {{}}
             //! values are the values that we are going to send 
             width, //!header
             search,setsearch, //!nav
             searchresult , fetchError , isLoading, //!home
             handleSubmit,postTitle,setpostTitle,postBody,setpostBody,postAuthor,setpostAuthor, //! newpost
              handleDelete, //! postpage
             posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle  //! edit page 


        }}>
                   {children}  {/* //hack childerns are the components inside the dataprovider in the app.js component in the return statements  */}

        </DataContext.Provider>

        )
    
    }
export default DataContext