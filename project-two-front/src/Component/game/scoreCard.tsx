import React from 'react';

type userCard = {
    turn:number,
    position:number,
    username:string,
    score:number
}

export const ScoreCard:React.FC<userCard> = (props)=>{

    return(
        <div className="card">
            <div className={props.turn==props.position ?"card-header bg-primary text-light":"card-header bg-dark text-light"}>
                <b>{props.username}</b> 
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                <p>{props.score}</p>
                </blockquote>
            </div>
        </div>
    )
}

export default ScoreCard;