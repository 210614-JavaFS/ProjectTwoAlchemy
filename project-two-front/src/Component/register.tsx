import React from "react";
import { User } from "../models/user";
import { apiAddUser } from "../models/UserApi";
import { fullUser } from '../utils/types';


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
      <div className="container pt-5" >
        <div className="row">
         <form className="col s6" >
             <div className="input-field col s6">
                 <input  id="first_name" type="text" placeholder="First Name" className="validate"/>
             </div>
            <div className="input-field col s6">
               <input id="last_name" type="text" placeholder="Last Name" className="validate"/>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="username" type="text" placeholder="Username" className="validate"/>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s6">
                <input id="password" type="password" placeholder="Password" className="validate"/>
              </div>
            </div>
            <button onClick={() => { sendInfo() }} className="btn" type="button">Submit</button>
            <button  className="btn" type="submit" >cancel</button>
        </form>
        </div>
        </div>
    )
}

export default Register;