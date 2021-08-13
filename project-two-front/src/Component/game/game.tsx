import React, {useState} from 'react';
import {User} from '../../models/user';
import GameInput from './gameInput';
import {ScoreCard} from './scoreCard';

type userCard = {
    position:number,
    username:string,
    score:number
}
type Props = {
    users:User[],
    checkUserLoggedIn:any
}

export const Game:React.FC<Props> = (props)=>{
    props.checkUserLoggedIn();
    const [scoreCard, setScoreCard] = useState<userCard[]>(()=>{
        let cards:userCard[] = [];
        console.log(props.users);
        let count:number =0;
        for(let user of props.users){
            let current:userCard = {"position":count++,"username":user.username,"score":0};
            cards.push(current);
        }
        console.log(cards);
        return cards;
    });
    const [turn, setTurn] = useState<number>(0);
    const [userInput, setUserInput] = useState('');

    const nextTurn = ()=>{
        if(turn === scoreCard.length-1){
            setTurn(0);
        }else{
            setTurn(turn+1);
        }
    }

    return(
        <div className="container-fluid p-3  min-vh-100">
            <div className="row d-flex justify-content-center">
                {scoreCard.map(user=>{
                    return(
                        <div className="col-md-3">
                          <ScoreCard turn={turn} position={user.position} username={user.username} score={user.score} />   
                        </div>
                       
                    )
                })}
            </div>
            <div className="row flex-fill mt-5">
                <div className="col-12">
                   <GameInput turns={{"turn":turn,"setTurn":nextTurn}} scoreCard={scoreCard} setScoreCard={setScoreCard} userInput={userInput} setUserInput={setUserInput} /> 
                </div>
                
            </div>
        </div>
    )
}

export default Game;