type Friends={
    id:number,
    username:string,
    gamesPlayed:number,
    gamesWon:number
}

export class User{

    constructor(public id:number, public username:string, public gamesPlayed:number, public gamesWon:number, public friends?:Friends[]){

    }
}