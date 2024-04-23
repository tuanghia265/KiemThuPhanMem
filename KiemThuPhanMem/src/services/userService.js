import axios from "axios"

const handleLogin=(email,pwd)=>{
    return axios.post('/api/login',{email,pwd});
}
export {handleLogin};