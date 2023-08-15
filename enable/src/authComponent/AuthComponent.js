import { Route, Routes } from "react-router-dom"
import LoginPage from "../LoginPage"
import RegistrationPage from "../RegistrationPage"
import IncidentForm from "../IncidentForm"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AuthComponent = () => {
    
        return(
            <>
                <ToastContainer/>
                <Routes>
                    <Route exact path ="/" element={<LoginPage/>}/>
                    <Route exact path ="/register" element={<RegistrationPage/>}/>
                    <Route exact path="/employee/incident_form" element={<IncidentForm/>}/>
                </Routes>  
            </>    
        )
   
}