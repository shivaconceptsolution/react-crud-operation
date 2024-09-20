import React, { useState }   from 'react';
import axios from 'axios'
import { useLocation } from "react-router";
import { RestApiExampe } from './RestApiExample';
function EditProduct()
{
let data = useLocation();
const baseURL = "http://127.0.0.1:5000/products/"+data.state;
const [name,setName]= useState(undefined)
const [price,setPrice]= useState(undefined)
const [description,setDescription]= useState(undefined)
const[res,setRes] = useState(undefined)
const [post, setPost] = useState("");
React.useEffect(() => {
    axios.get(baseURL).then((response) => {
   
         setPost(response.data);
         //console.log("Data is ",response.data[0].name);
         //console.log("Post data is ",post);
   
       });
   
     }, []);
   
const changeSubmit =(e)=>{
    if(name===undefined)
        {
         setName(post.name)
        }
        if(price===undefined)
        {
         setPrice(post.price)
        }
        if(description===undefined)
        {
        setDescription(post.description)
        }
  axios.put(baseURL, {
      name: name,
      price:price,
      description:description}).then((response) => {
       console.log(response);
       if(response.statusText==="OK"){
        window.location.href="/product"
       }
       else{
        setRes("Data Not Updated Sucessfully")
       }
         
    });
    e.preventDefault();   
}
return(
<div id="middle">
            <form onSubmit={changeSubmit}>
              <table>
              <tr>Product Name <td></td><td>  <input type="text"  id='name' defaultValue={post.name} onChange={(e)=>setName(e.target.value)}   />   </td></tr>
              <tr>Price <td></td> <input type="text"  id='mobileno' defaultValue={post.price} onChange={(e)=>setPrice(e.target.value)}       /> <td></td></tr>
              <tr>Description<td></td><td>  <input type="text"  id='email'  defaultValue={post.description}  onChange={(e)=>setDescription(e.target.value)} /></td></tr>
              <tr><td colSpan={2} align={'left'}><button type="submit" value="Submit">Submit</button></td></tr>
              </table>
              </form>
            
              {res}
              </div> );
}

export default EditProduct;