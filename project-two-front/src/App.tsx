import React from 'react';
import './App.css';
import NavBar from './Component/NavBar';
import Login from './Component/login';
import Register from './Component/register';


class App extends React.Component <{}, {isLoginActive: boolean;}>{
  constructor(props:any){
    super(props);
    this.state={
      isLoginActive:true
    }
  }
  render(){
    const { isLoginActive }=this.state;
    const current = isLoginActive ? "Register" : "Login";
    const currentActive = isLoginActive ? "login" : "register";
    return(

      <div className="App">
        <div className="login">
            <NavBar/>
            {isLoginActive && ( <Login/> )}
            {!isLoginActive && <Register/> }
          </div>
        </div>
    )
  }
}

 function bottom(props:any){
    <div className="bottom" ref={props.containerRef} onClick={props.onClick}>
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
 }


export default App;




