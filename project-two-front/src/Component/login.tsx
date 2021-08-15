import React,{useEffect, useState} from 'react';
import { User } from '../models/user';
import { apiGetUser, apiGetUsers, apiLogin } from '../models/UserApi';


const UserLogin = () => {
  const [user, setUser]=useState<User[]>([]);
  const [error,setError]=useState("");
  
  const Logout=()=>{
   console.log('logout');
  }
    const loginUser = async ()=>{
      let username=(document.getElementById("username")as HTMLInputElement).value;
      let password=(document.getElementById("password")as HTMLInputElement).value;
      console.log("Before Login");
      let getUser:User= await apiLogin(username,password);
      console.log(getUser);
    }
   return (
          <div className="nav-wrapper container pt-5">
            <form className="col s12">
             <div className="row">
                <div className="input-field col s12">
                  <input id="username" type="text" className="validate" placeholder="Username"  />
                </div>
              </div>
              <div className="row">
                <div className="input-field col s12">
                  <input id="password" type="password" className="validate" placeholder="Password"/>
                </div>
              </div>
            </form>
            <button type="button" className="btn" id="login" onClick={()=>{loginUser()}}>Login</button>
          </div>
    );
  }

export default UserLogin;

