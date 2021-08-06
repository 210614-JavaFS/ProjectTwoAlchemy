import React from 'react'


const Login:React.FC<unknown> = (props) => {

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
        </div>
  );
}

export default Login;