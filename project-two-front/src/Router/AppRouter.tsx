import React from "react";
import { Route, Switch } from "react-router";
import Login from "../Component/login";
import Register from "../Component/register";

const AppRoutes: React.FC<unknown>=(props)=>{
    return(
        <Switch>
            <Route exact path='/' render={()=>{return(
                <div className='container-fluid'>
                    <div className='row'>
                        
                    </div>
                </div>
            )}}/>
            <Route path='/login'>
                <Login/>
            </Route>
            <Route path='/register' component={Register}/>
        </Switch>
    )
}
export default AppRoutes;