import { Route, Routes } from "react-router-dom"
import LoginPage from "../LoginPage"
import RegistrationPage from "../RegistrationPage"
import IncidentForm from "../IncidentForm"
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from "../dashboard";
import IncidentList from "../incidentlist";
import Settings from "../settings";

export const AuthComponent = () => {
    
        return(
            <>
                <ToastContainer/>
                <Routes>
                    <Route exact path ="/" element={<LoginPage/>}/>
                    <Route exact path ="/register" element={<RegistrationPage/>}/>
                    <Route exact path="/employee/incident_form" element={<IncidentForm/>}/>
                    <Route exact path="/employee/dashboard" element={<Dashboard/>}/>
                    <Route exact path="/employee/settings" element={<Settings/>}/>
                    <Route exact path="/employee/incident_list" element={<IncidentList/>}/>
                </Routes>  
            </>    
        )
   
}