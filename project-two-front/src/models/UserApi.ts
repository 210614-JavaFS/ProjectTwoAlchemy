import UserRemote from "../remote/UserRemote";
import { User } from "../models/user";
import { fullUser } from '../utils/types';



  export const apiGetUsers =async (): Promise<User[]> =>{
      const response=await UserRemote.get<User[]>('/user');
      if(response.status===200){
          return response.data;
      }

      return [];
  }
  export const apiLogin=async (username:string ,password:string):Promise<User>=>{
    let body={
      username:username,
      password:password
    }
    const response=await UserRemote.post<User,any>('/user',body);
    if(response.status===200){
      return response.data;
    }
    return response.data;
  }
  export const apiGetUser=async (id:number):Promise<User|null> =>{
      const response =await UserRemote.get<User>('/user'+id);
      if(response.status===200){
          return response.data;
      }
      return null;
  }
  export const apiAddUser = async (user:fullUser):Promise<User | undefined> => {
    const response = await UserRemote.post<User>('/users', user);
  
    if(response.status===201){
      console.log(response.data);
      return response.data;
    }
  }
