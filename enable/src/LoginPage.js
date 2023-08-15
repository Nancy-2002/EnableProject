import Navbar from './Navbar';
import Carousel from './Carousel';
import LoginForm from './LoginForm';
import './App.css';

function LoginPage(){
    return(
            <div className="app-container">
              <Navbar />
              <div className="content-container">
                <Carousel />
                <LoginForm />
              </div>
            </div>
    );
}

export default LoginPage;