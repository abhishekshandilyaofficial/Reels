import React, {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import './Profile.css'
function Profile() {
  let cUser = useContext(AuthContext);
  //let [loading, serLoading] = useState("");
  return (
    <>
    {cUser == null ? <div>Need to login</div>:
      <>
      <div className="header"></div>
      <div className="main">
             <img src="https://via.placeholder.com/150" alt="" className='pimg' />
              <div className="details">
                <div className="content">Abhishek</div>
                <div className="content">No of Posts :<span className='bold_text'>Posts</span></div>
                <div className="content">Email :<span className='bold_text'>Email.com</span></div>
              </div>
      </div>
      </>
    }
    </>
  )
}

export default Profile