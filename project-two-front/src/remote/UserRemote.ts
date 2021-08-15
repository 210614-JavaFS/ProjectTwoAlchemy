import axios from "axios";

const UserRemote=axios.create({
  baseURL:'http://localhost:8080/project-two-back',
  headers:{
    'Content-Type':'application/json',
  }
})
export default UserRemote;