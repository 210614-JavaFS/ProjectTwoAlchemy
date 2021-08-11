import { type } from "os"

type Friend={
    uId:number,
    score?:number,
    username:string,
    firstname:string,
    lastname:string


}
export class User{
    constructor(public uId:number,score:number,public username:string,firstname:string,lastname:string,public friends:Friend[]){
        
    }
}