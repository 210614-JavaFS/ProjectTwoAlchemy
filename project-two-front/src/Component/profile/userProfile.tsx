import React from 'react';
import {User} from '../../models/user';

type Props = {
    user: User
}

 export const UserProfile:React.FC<Props> = (props) =>{
    return(
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-header">
                        User {props.user.id} Information
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Username: {props.user.username}</li>
                        <li className="list-group-item">Games Played: {props.user.gamesPlayed}</li>
                        <li className="list-group-item">Games Won: {props.user.gamesWon}</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-5">
                <h6>Friends</h6>
                <table className="table table-sm table-borderless">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Username</th>
                        <th scope="col">Games Played</th>
                        <th scope="col">Games Won</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.user.friends && props.user.friends.map(friend => {
                            return(
                            <React.Fragment>
                                <tr>
                                <th className="text-center" scope="row">{friend.id}</th>
                                <td className="text-center">{friend.username}</td>
                                <td className="text-center"><span className= {props.user.gamesPlayed<friend.gamesPlayed ? "fw-bold text-success":"fw-bold text-warning"}>{friend.gamesPlayed}</span></td>
                                <td className="text-center"><span className= {props.user.gamesWon<friend.gamesWon ? "fw-bold text-success":"fw-bold text-warning"}>{friend.gamesWon}</span></td>
                                <td className="text-center">@mdo</td>
                                </tr>
                            </React.Fragment> 
                            )
                                
                        })}
                        
                    </tbody>
                </table>
            </div>
            <div className="col-3">
                <form>
                    <label className="d-block" htmlFor="addFriendInput"><b>Add Friend:</b></label>
                    <div className="d-inline">
                        <input type="text" id="addFriendInput" placeholder="Enter username" />&nbsp;  
                        <button className="btn btn-primary btn-sm mb-1">Add Friend</button>
                    </div>
                    
                </form>
                
            </div>
        </div>
    )
}

export default UserProfile;