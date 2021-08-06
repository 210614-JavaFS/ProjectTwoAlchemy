import React from "react";


const Register:React.FC<unknown> = (props) => {

    return(
        <div className="row">
         <form className="col s12">
            <div className="row">
             <div className="input-field col s6">
                 <input  id="first_name" type="text" className="validate"/>
                 <label className="active" placeholder="first_name">First Name</label>            
             </div>
             </div>
            <div className="input-field col s6">
               <input id="last_name" type="text" className="validate"/>
               <label placeholder="last_name">Last Name</label>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate"/>
                <label placeholder="email">Email</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate"/>
                <label placeholder="password">Password</label>
              </div>
            </div>
        </form>
        </div>
    )
}

export default Register;