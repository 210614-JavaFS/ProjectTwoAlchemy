import React from "react";
import { User } from "../models/user";
import { apiAddUser } from "../models/UserApi";
import { fullUser } from '../utils/types';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';



const Register =() => {

const sendInfo = async () => {
  let first=(document.getElementById("first_name")as HTMLInputElement).value;
  let last=(document.getElementById("last_name")as HTMLInputElement).value;
  let username=(document.getElementById("username")as HTMLInputElement).value;
  let password=(document.getElementById("password")as HTMLInputElement).value;

  const newUser:fullUser = {username,password, first, last};

  console.log("Before inserting into db : "  + newUser.username);
  let newUsers:User[] = await apiAddUser(newUser);
  console.log("after inserting into db : "  + newUser.username);

  
}
function back(){
  console.log("I'm back")
}
    return(
      <form>
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

      <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={() => { sendInfo() }}>Register</button>
      <p className="forgot-password text-right">
          Already registered <a href="http://localhost:3000/">log in?</a>
      </p>
  </form>
  
    );
}

export default Register;