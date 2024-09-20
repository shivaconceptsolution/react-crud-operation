import React, { useState }   from 'react';
import axios from 'axios'
import { RestApiExampe } from './RestApiExample';
function AddProduct()
{
const baseURL = "http://127.0.0.1:5000/products";
const [name,setName]= useState(undefined)
const [price,setPrice]= useState(undefined)
const [description,setDescription]= useState(undefined)
const[res,setRes] = useState(undefined)

const changeSubmit =(e)=>{
  axios.post(baseURL, {
      name: name,
      price:price,
      description:description}).then((response) => {
       console.log(response);
       if(response.statusText==="OK"){
        window.location.href="/product"
       // setRes("Data Submitted Sucessfully")
       }
       else{
        setRes("Data Not Submitted Sucessfully")
       }
         
    });
    e.preventDefault();   
}
return(
<div id="middle">
            <form onSubmit={changeSubmit}>
              <table>
              <tr>Product Name <td></td><td>  <input type="text"  id='name'  onChange={(e)=>setName(e.target.value)}   />   </td></tr>
              <tr>Price <td></td> <input type="text"  id='mobileno' onChange={(e)=>setPrice(e.target.value)}       /> <td></td></tr>
              <tr>Description<td></td><td>  <input type="text"  id='email'   onChange={(e)=>setDescription(e.target.value)} /></td></tr>
              <tr><td colSpan={2} align={'left'}><button type="submit" value="Submit">Submit</button></td></tr>
              </table>
              </form>
             
              {res}
              </div> );
}

export default AddProduct;