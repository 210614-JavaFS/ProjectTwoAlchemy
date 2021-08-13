import React, {useState} from 'react';
import axios from 'axios';
import {User} from '../../models/user';
import GameInput from './gameInput';
import {ScoreCard} from './scoreCard';
import {wordScorer} from '../../utils/utils';

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

    async function handleSubmit(e:any):Promise<any> {
        await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/'+(userInput)).then(
            (resp) =>{
                let scoreCards:userCard[] = [...scoreCard];
                scoreCards[turn].score+=wordScorer(userInput);
                //call function to change to next player
                nextTurn();
                setScoreCard(scoreCards);
            }, ()=>{
                //props.turns.setTurn();
                alert("Sorry! That is not a word. Try again!");
                //cal function to change turns
            });    
        setUserInput("");
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
                   <GameInput handleSubmit={handleSubmit}  userInput={userInput} setUserInput={setUserInput} /> 
                </div>
                
            </div>
        </div>
    )
}

export default Game;