import React from "react";
import axios from "axios";
function Login()
{
 const baseURL = "http://127.0.0.1:5000/login";
  const [username, setUsername] = React.useState("");
 const [password, setPassword] = React.useState("");
 const [res, setRes] = React.useState("");
 const handelInput =(e)=>{
    switch (e.target.id) {
      case "username":
        setUsername(e.target.value)
        break;
        case "password":
          setPassword(e.target.value)
          break;
       
        default:
          break;
    }
}
const changeSubmit =(e)=>{
    e.preventDefault()   
    axios
    .post(baseURL, {
      username: username,
      password: password,
     
    })
    .then((response) => {
        console.log(response.data);
        if(response.data.msg === "1")
        {
           window.location='/user/userdashboard';
        }
        else
        {
            setRes("Invalid userid and password")
            //window.location = '/user';
        }
    });
    }
    return(
       <>       
          <form onSubmit={changeSubmit}>
           
           username <input type="text"  id='username'   onChange={handelInput} />
            <br />
             password <input type="password"  id='password'  onChange={handelInput}/>
            <br />
           
            <button type="submit" value="Submit">Submit</button>
        </form>
        {res}
          
       </>
   );
}

export default Login;