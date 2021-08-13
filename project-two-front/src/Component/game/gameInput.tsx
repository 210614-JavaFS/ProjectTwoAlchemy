import axios from 'axios';
import { stat } from 'fs';
import React from 'react';

type Props = {
    userInput:string,
    setUserInput:any,
    handleSubmit:any
}

export const GameInput:React.FC<Props> = (props)=>{
    const handleChange = (e:any) =>{
        props.setUserInput(e.currentTarget.value);
    }

    async function handleSubmit(e:any):Promise<any> {
        e.preventDefault();
        await props.handleSubmit();   
        props.setUserInput("");
    }
    return(
        <form onSubmit={handleSubmit}>
            <div className="d-inline">
               <input value={props.userInput} className="form-control form-control-lg" type="text" onChange={handleChange} placeholder="Enter Word..."/>
               <button className="btn btn-primary btn-lg mt-1 ml-1">Submit Word</button>
            </div>
        </form>
    )
}

export default GameInput;