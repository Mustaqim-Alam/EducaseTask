import "./SignupPage.css";

function SignupPage() {
  return (
    <>
      <div className="main-container">
        <div id="container">
          <h2 className="heading">Create your PopX account</h2>
          <label htmlFor="inputName" className="nameLabel required">Full Name</label>
          <input type="text" className="inputName" />
          <div className="phoneLabel required">Phone Number</div>
          <input type="tel" className="inputPhone" />
          <div className="emailLabel required">Email Address</div>
          <input type="text" className="inputEmail" />
          <div className="passwordLabel required">Password</div>
          <input type="text" className="inputPassword" />
          <div className="companyLabel">Company</div>
          <input type="text" className="inputCompany" />
          <p className="agencyType required">Are you an Agency?</p>
          <button type="radio" className="radioBtn1">
            Yes
          </button>
          <button type="checkbox" className="radioBtn2">
            No
          </button>
        </div>
      </div>
    </>
  );
}

export default SignupPage;
