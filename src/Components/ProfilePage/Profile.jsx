import './Profile.css'

function Profile() {
  return (
    <>
        <div className="container">
            <div className="profileContainer">
                <div className="settingContainer">
                    <h2 className='settingHeader'>Account Setting</h2>
                </div>
                <div className="profileImg"></div>
                <div className="profileEdit"></div>
                <div className="nameContainer">Marry Doe</div>
                <div className="mailContainer">Marry@Gmail.Com</div>
                <div className="about"><p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p></div>
                <br />
            </div>
        </div>
    </>
  )
}

export default Profile