import React from 'react';
import {User} from '../../models/user';
import UserProfile from './userProfile';

type Props = {
    users:User[],
    checkUserLoggedIn:any
}

 export const Profile:React.FC<Props> = (props) =>{
     props.checkUserLoggedIn();
    return(
       <div className="container-fluid">    
            <React.Fragment>
             <div className="page-header">
                 <h1>Profile Viewer</h1>
             </div>
             {props.users.map(user =>{
                 return(
                     <div className="m-4 border border-dark p-2">
                         <UserProfile user={user} />  
                     </div>    
                )
                 
             })}   
            </React.Fragment>
       </div> 
    )
}

export default Profile;