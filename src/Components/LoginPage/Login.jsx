import './Login.css'
function Login() {
  return (
    <div className="main-container">
      <div className="login-form">
        <h2>Signin to your PopX account</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          doloremque?
        </p>
        <label htmlFor="email-input" className='emailLabel'>Email Address</label>
        <input type="email" name="" id="email-input" placeholder='Enter email address' />
        <label htmlFor="password" className='passwordLabel' >Password</label>
        <input type="password"  name=""  id="pass-input" placeholder='Enter Password' />
        <button>Login</button>
      </div>
    </div>
  )
}

export default Login