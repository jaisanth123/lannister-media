
//! it is not a component it is just a function so we named it in a small case 
import axios from "axios";

export default axios.create({
    baseURL:"http://localhost:3500"
})
