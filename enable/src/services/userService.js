import { myAxios } from "./helper";

export const register=(user)=>{

return myAxios
    .post('http://localhost:8008/register',user)
    .then((response) => response.data);
};

export const submitIncident=(user)=>{
    return myAxios
        .post('http://localhost:8008/incident',user)
        .then((response) => response.data);
};
export const login = (user) => {
    return myAxios
        .post('http://localhost:8008/', user)
        .then((response) => response.data);
};
export const getIncidentList = (email) => {
  return myAxios
    .get(`http://localhost:8008/incidents/${email}`)
    .then((response) => response.data);
};
