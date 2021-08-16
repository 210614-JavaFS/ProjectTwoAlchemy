import React, {useState} from 'react';
import axios from 'axios';
import {User} from '../../models/user';
import GameInput from './gameInput';
import {ScoreCard} from './scoreCard';
import {wordScorer,wordTiler} from '../../utils/utils';
import { updateUser } from '../../models/UserApi';

type userCard = {
    position:number,
    username:string,
    score:number,
    id:number
}
type Props = {
    users:User[],
    setUsers:any
    checkUserLoggedIn:any,
    history:any
}

let htmlString = "";

export const Game:React.FC<Props> = (props)=>{
    props.checkUserLoggedIn();
    const [scoreCard, setScoreCard] = useState<userCard[]>(()=>{
        let cards:userCard[] = [];
        console.log(props.users);
        let count:number =0;
        for(let user of props.users){
            let current:userCard = {"position":count++,"username":user.username,"score":0, "id":user.id};
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

    const updateTiler = (input:string)=>{
        htmlString = wordTiler(input);
    }

    const endGame = () => {
        let winner:userCard = scoreCard.reduce((a,b)=>a.score>b.score ? a:b);
        let updatedUsers:User[] = props.users.map(user=>{
            if(winner.score>0){
                if( user.id === winner.id){
                    user.gamesWon+=1;
                }
               user.gamesPlayed+=1; 
               console.log(user);
               updateUser(user);
            }
            return user;
        })
        props.setUsers(updatedUsers);
        alert("Winner is "+winner.username);
        props.history.replace("/profile");
    }

    async function handleSubmit(e:any):Promise<any> {
        let finalizeTurn
        await axios.get('https://api.dictionaryapi.dev/api/v2/entries/en/'+(userInput)).then(
            (resp) =>{
                let scoreCards:userCard[] = [...scoreCard];
                scoreCards[turn].score+=wordScorer(userInput);
                //call function to change to next player
                nextTurn();
                setScoreCard(scoreCards);
                htmlString="";
            }, ()=>{
                //props.turns.setTurn();
                alert("Sorry! That is not a word. Try again!");
                //cal function to change turns
                htmlString="";
            });    
        setUserInput("");
    }

    return(
        <React.Fragment>
        <div className="container-fluid p-3  min-vh-90">
            <div className="row d-flex justify-content-center">
                {scoreCard.map(user=>{
                    return(
                        <div className="col-md-3">
                          <ScoreCard turn={turn} position={user.position} username={user.username} score={user.score} />   
                        </div>
                       
                    )
                })}
            </div>
            <div className="mt-5" dangerouslySetInnerHTML= {{__html: htmlString}}></div>
            <div className="row flex-fill mt-5">
                <div className="col-12">
                   <GameInput handleSubmit={handleSubmit}  userInput={userInput} setUserInput={setUserInput} updateTiler={updateTiler} /> 
                </div>
                
            </div>
            <div className="row">
            <div className="col-sm-11"></div>
              <button type="button" className="btn btn-danger mt-2 col-sm-1" onClick={endGame}>END GAME</button>  
        </div>
        </div>
        
        </React.Fragment>
    )
}

export default Game;