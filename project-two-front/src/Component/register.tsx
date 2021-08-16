import React from "react";
import { Link } from "react-router-dom";
import { User } from "../models/user";
import { apiAddUser } from "../models/UserApi";
import { fullUser } from '../utils/types';


type Props = {
  loginUser:any
}

const Register:React.FC<Props> = (props) =>{

const sendInfo = async () => {
  let first=(document.getElementById("first_name")as HTMLInputElement).value;
  let last=(document.getElementById("last_name")as HTMLInputElement).value;
  let username=(document.getElementById("username")as HTMLInputElement).value;
  let password=(document.getElementById("password")as HTMLInputElement).value;

  const newUser:fullUser = {username,password, first, last};

  console.log("Before inserting into db : "  + newUser.username);
  let newUsers:User | undefined = await apiAddUser(newUser);
  props.loginUser(newUsers);

  
}
function back(){
  console.log("I'm back")
}

    return(
      <div className="container pt-5" >
        <div className="row justify-content-center">
        <form className="col-lg-6">
          <h3>Register</h3>
          <div className="form-group">
              <label>First name</label>
              <input type="text" className="form-control" placeholder="First name" id="first_name" />
          </div>

          <div className="form-group">
              <label>Last name</label>
              <input type="text" className="form-control" placeholder="Last name" id="last_name"/>
          </div>

          <div className="form-group">
              <label>Email</label>
              <input type="text" className="form-control" placeholder="Enter username" id="username"/>
          </div>

          <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Enter password" id="password"/>
          </div>

          <button type="button" className="btn btn-dark btn-lg btn-block mt-1" onClick={() => { sendInfo() }}>Register</button>
          <p className="forgot-password text-right">
              Already registered? <Link to="/">Log In</Link>
          </p>
      </form>
        </div>
        </div>
    )
}

export default Register;