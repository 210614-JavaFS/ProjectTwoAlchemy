import axios from "axios";

const UserRemote=axios.create({
  baseURL:'http://18.222.23.181:8080/scrabbleapi/',
  headers:{
    'Content-Type':'application/json',
  }
})
export default UserRemote;