import UserRemote from "../remote/UserRemote";
import { User } from "./user";

  export const apiGetUsers =async ():Promise<User[]> =>{
      const response=await UserRemote.get<User[]>('/login');

      if(response.status===200){
          return response.data;
      }

      return [];
  }
  export const apiGetUser=async (uId:number):Promise<User|null> =>{
      const response =await UserRemote.get<User>('/login'+uId);
      if(response.status===200){
          return response.data;
      }
      return null;
  }
  export const apiAddUser = async (trainer:User):Promise<User[]> => {
    const response = await UserRemote.post<User[]>('/login/', trainer);
  
    if(response.status===200){
      return response.data;
    }
  
    return [];
  }
