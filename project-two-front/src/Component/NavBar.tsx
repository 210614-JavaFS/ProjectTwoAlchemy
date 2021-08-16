import React from 'react';
import { Link } from 'react-router-dom';
import {User} from '../models/user';
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
  users:User[],
  logout:any
};

const NavBar:React.FC<Props> = (props) => {

  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              
                {props.users.length
                ? <React.Fragment>
                  <li className="nav-item">
                    <span onClick={props.logout} className="nav-link" id="logoutButton">Logout</span>  
                  </li>
                    
                </React.Fragment>                
                :<React.Fragment>
                  <li className="nav-item">
                    <Link className="nav-link" to='/'>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to='/register'>Register</Link>
                  </li>
                </React.Fragment>
                
                }   
              {props.users.length
              ? <React.Fragment>
                <li className="nav-item">
                  <Link className="nav-link" to='/'>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/game'>Play</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to='/profile'>Profile</Link>
                </li>
                
              </React.Fragment>
              : ""
              }
              <li className="nav-item">
                  <Link className="nav-link" to='/rules'>Scrabble Rules</Link>
              </li>
            </ul>  
          </div>  
        </div>            
      </nav>
    
  );
}

export default NavBar;