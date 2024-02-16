import "./landingPage.css";
import {  useNavigate } from "react-router-dom";

function LandingScreen() {
  
  const navigate = useNavigate();
  const handleLoginClick = ()=>{
    navigate("/Login")
  }

  return (
    <div className="container">
    <div className="main-container">
      <div className="form-container">
        <h2>Wealcome to PopX</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          doloremque?
        </p>
        <button id="btn1">Create Account</button>
        <button id="btn2" onClick={handleLoginClick}>
          Already Registered? Login
        </button>
      </div>
    </div>
    </div>
  );
}

export default LandingScreen;
