import React,{useEffect, useState} from 'react'
import { User } from '../model/user'
import { apiGetUser, apiGetUsers } from '../model/UserApi'


const Login = () => {

type logUser={
    username:string,
    password:string
}
  const [user ,setUser]=useState<logUser>({"username":"admin","password":"admin"});

  function loginUser(){
    let username=(document.getElementById("username")as HTMLInputElement).value;
    let password=(document.getElementById("password")as HTMLInputElement).value;
    
}
  return (
        <div className="nav-wrapper container">
          <form className="col s12">
           <div className="row">
              <div className="input-field col s12">
                <input id="username" type="text" className="validate" placeholder="Username"/>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate" placeholder="Password"/>
              </div>
            </div>
          </form>
          <button type="button" className="btn" id="login" onClick={loginUser}>Login</button>
        </div>
  );
}

export default Login;

