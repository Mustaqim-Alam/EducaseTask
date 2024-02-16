import "./Header.css";
import EducaseImg from "../img/educase-2.webp";
import SignupPage from "../SignupPage/SignupPage";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const handleClick = () => {
    window.open("http://linkedin.com/in/md-mustaqim-alam", "_blank");
  };
  const handleSignup = () => {
    window.open(SignupPage);
  };

  return (
    <>
      <header>
        <nav>
          <div className="header">
            <div className="leftHeader">
              <Link to="/">
                {""}
                <img src={EducaseImg} alt="logo" />
              </Link>
            </div>
            <div className="allPages">
            <ul>
              <li>
                <NavLink to="/">
                      Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/Login">
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/SignupPage">
                  Signup
                </NavLink>
              </li>
              <li>
                <NavLink to="/ProfilePage">
                  Profile
                </NavLink>
              </li>

            </ul>
          </div>
            <div className="rightHeader">
              <button onClick={handleClick}>Hire me Please!</button>
            </div>
         

          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
