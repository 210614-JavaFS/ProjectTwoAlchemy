import React,{useEffect, useState} from 'react';
import { User } from '../models/user';
import { apiGetUser, apiGetUsers, apiLogin } from '../models/UserApi';
import "./login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';

type Props = {
  loginUser:any
}

const UserLogin:React.FC<Props> = (props) =>{
  const [user, setUser]=useState<User[]>([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  function validateForm() {
    return username.length > 0 && password.length > 0;
  }
  
  const loginUser = async ()=>{
      let username=(document.getElementById("username")as HTMLInputElement).value;
      let password=(document.getElementById("password")as HTMLInputElement).value;
      console.log("Before Login");
      let getUser:User= await apiLogin(username,password);

      props.loginUser(getUser);
  }
   return (
    <div className="Login">
    <h3>Login</h3>
     <Form onSubmit={loginUser}>
       <Form.Group  controlId="username">
         <Form.Label>Username</Form.Label>
         <Form.Control
           autoFocus
           type="text"
           value={username}
           onChange={(e) => setUsername(e.target.value)}
         />
       </Form.Group>
       <Form.Group  controlId="password">
         <Form.Label>Password</Form.Label>
         <Form.Control
           type="password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
         />
       </Form.Group>
       <Button  type="button" onClick={()=>{loginUser()}} disabled={!validateForm()}>
         Login
       </Button>
       <p className="forgot-password text-right">
              Don't have an account yet?<Link to="/register"> Register</Link>
          </p>
     </Form>
   </div>
    );
  }

export default UserLogin;

