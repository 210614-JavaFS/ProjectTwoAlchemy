import React from 'react'
import {Link} from 'react-router-dom';


export const Login:React.FC<unknown> = (props) => {

  return (
        <div className="nav-wrapper container">
          <form className="col s12">
           <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate" placeholder="Email"/>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <input id="password" type="password" className="validate" placeholder="Password"/>
              </div>
            </div>
          </form>
          <button type="button" className="btn btn-dark">Login</button>
          <p>Don't have an Account Click<Link to="/register">Register</Link></p>
        </div>
  );
}

export default Login;