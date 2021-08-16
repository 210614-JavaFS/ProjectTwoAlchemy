// import axios from 'axios';
// import React,{useEffect, useState} from 'react';
// import { User } from '../models/user';
// import { apiGetUser, apiGetUsers, apiLogin } from '../models/UserApi';
// import Button from 'react-bootstrap/Button';



// const UserLogin = () => {
//   const [user, setUser]=useState<User[]>([]);
//   const [error,setError]=useState("");
  
//   const Logout=()=>{
//    console.log('logout');
//   }
//     const loginUser = async ()=>{
//       let username=(document.getElementById("username")as HTMLInputElement).value;
//       let password=(document.getElementById("password")as HTMLInputElement).value;
//       console.log("Before Login");
//       // let getUser:User= await apiLogin(username,password);
//       const user = { username, password };
//     const response = await axios.post(
//     "http://localhost:8080/project-two-back(one)/user/username",
//      user
//       );
//     setUser(response.data)
//         console.log(response.data)
//         console.log("i'm logined in")
//     }
//    return (
//           <div className="nav-wrapper container pt-5" >
//             <form className="col s12">
//              <div className="row">
//                 <div className="input-field col s12">
//                   <input id="username" type="text" className="validate" placeholder="Username" required />
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="input-field col s12">
//                   <input id="password" type="password" className="validate" placeholder="Password" required/>
//                 </div>
//               </div>
//             </form>
//             <Button type="submit" onClick={()=>{loginUser()}}>Login</Button>
//           </div>
//     );
//   }

// export default UserLogin;

import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./login.css";
import axios from "axios";
import { User } from "../models/user";

 function UserLogin() {

const [user, setUser]=useState<User[]>([]);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const loginUser = async ()=>{
          let username=(document.getElementById("username")as HTMLInputElement).value;
          let password=(document.getElementById("password")as HTMLInputElement).value;
          console.log("Before Login");
          // let getUser:User= await apiLogin(username,password);
          const user = { username, password };
        const response = await axios.post(
        "http://localhost:8080/project-two-back(one)/user/username",
         user
          );
        setUser(response.data)
            console.log(response.data)
            console.log("i'm logined in")
        }
  return (
    <div className="Login">
     <h3>Login</h3>
      <Form onSubmit={loginUser}>
        <Form.Group  controlId="email">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        <Button  type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
export default UserLogin;
