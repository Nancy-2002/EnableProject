import { myAxios } from "./helper";

export const register=(user)=>{

return myAxios
    .post('http://localhost:8085/register',user)
    .then((response) => response.data);
};