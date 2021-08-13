import axios from 'axios';
import { stat } from 'fs';
import React from 'react';

type Props = {
    userInput:string,
    setUserInput:any,
    turns:turns,
    scoreCard:userCard[],
    setScoreCard:any
}
type turns = {
    turn:number,
    setTurn:any
}
type userCard = {
    position:number,
    username:string,
    score:number
}

export const GameInput:React.FC<Props> = (props)=>{
    const handleChange = (e:any) =>{
        props.setUserInput(e.currentTarget.value);
    }

    async function handleSubmit(e:any):Promise<any> {
        e.preventDefault();
        await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/'+(props.userInput || "ybhsba")).then(
            (resp) =>{
                let scoreCards:userCard[] = [...props.scoreCard];
                scoreCards[props.turns.turn].score+=10;
                //call function to change to next player
                props.turns.setTurn();
                props.setScoreCard(scoreCards);
            }, ()=>{
                props.turns.setTurn();
                alert("Sorry that is not a word. Try again in your next turn.");
                //cal function to change turns
            });    
        props.setUserInput("");
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="d-inline" onSubmit={handleSubmit}>
               <input value={props.userInput} className="form-control form-control-lg" type="text" onChange={handleChange} placeholder="Enter Word..."/>
               <button className="btn btn-primary btn-lg mt-1 ml-1">Submit Word</button>
            </div>
        </form>
    )
}

export default GameInput;