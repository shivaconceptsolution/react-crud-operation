import React from "react"
import axios from 'axios'
import { Link } from "react-router-dom";
export class RestApiExampe extends React.Component
{
    constructor()
    {
        super()
        this.state={tdata:[]}
    }
    componentDidMount()
    {
        axios.get('http://127.0.0.1:5000/products').then((response) => {

          this.setState({ tdata: response.data })

          console.log(response.data)

        }).catch(console.log)
    }
    render()
    {
        return(<div>
    <p><td><Link to="/product/addproduct">Add Product</Link></td></p>
  <table style={{border:"1px solid red"}}>



    <tr ><th>Product_id</th><th>Name</th><th>Price</th><th>Description</th></tr>
   {this.state.tdata.map((res,i)=>
    <tr key={i} style={{border:"1px solid red"}}>

    <td>{res._id}</td>

    <td>{res.name}</td>

    <td>{res.price}</td>
    <td>{res.description}</td>
    <td><Link to="/product/editproduct" state={res._id} >Edit</Link></td>
    <td><Link to="/product/deleteproduct" state={res._id} >Delete</Link></td>
      </tr>
   )}

    
    </table>
        </div>)
    }
}