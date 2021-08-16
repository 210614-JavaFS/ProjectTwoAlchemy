import React, { useState } from 'react';
import { Route, Switch, useHistory, withRouter } from 'react-router-dom';
import {User} from './models/user';
import './App.css';
import NavBar from './Component/NavBar';
import Login from './Component/login';
import Register from './Component/register';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';
import Profile from './Component/profile/profile';
import Game from './Component/game/game';


function App() {
  const [users, setUsers] = useState<User[]>(data);
  const history = useHistory();
  const logout = () =>{
    setUsers([]);
    console.log(users);
  }
  const checkUserLoggedIn = () => {
    if(users.length === 0){
      history.replace("/");
    }
  }
  const loginUser = (user:User) => {
    setUsers(users.concat([user]));
    console.log(users);
    history.replace("/profile");
  }

  return (
    <React.Fragment>
      <div className="App">
      <NavBar users={users} logout={logout}/>
        <Switch>
              <Route exact path="/">
                <Login loginUser={loginUser} />
              </Route>
              <Route exact path="/register">
                <Register loginUser={loginUser}/>
              </Route>
              <Route exact path="/rules" component={()=>{
                console.log('in rules now');
                window.open('https://scrabble.hasbro.com/en-us/rules');
                return null;
              }} />
              <Route exact path="/profile" >
                <Profile users={users} checkUserLoggedIn={checkUserLoggedIn}/>
              </Route>  
              <Route exact path="/game" >
                <Game users={users} setUsers={setUsers} checkUserLoggedIn={checkUserLoggedIn}/>
              </Route>       
      </Switch>
     </div>
    </React.Fragment>
    
    
        
      
    
  );
}

export default withRouter(App);
