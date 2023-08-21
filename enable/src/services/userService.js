import { myAxios } from "./helper";

export const register=(user)=>{

return myAxios
    .post('http://localhost:8088/register',user)
    .then((response) => response.data);
};

export const submitIncident=(user)=>{
    return myAxios
        .post('http://localhost:8088/incident',user)
        .then((response) => response.data);
};