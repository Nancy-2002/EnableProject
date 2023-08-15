import Navbar from './Navbar';
import RegistrationForm from './RegistrationForm';
import './App.css';

function RegistrationPage(){
    return(
            <div className="app-container">
              <Navbar />
              <div className="content-container">
                <RegistrationForm />
              </div>
            </div>
    );
}

export default RegistrationPage;