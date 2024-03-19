import React from 'react'
import Navbar from '../Navbar/navbar'
import "./Accountsidebar.css"
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from 'react-router-dom';
const Accountsidebar = () => {
  const navigate=useNavigate();
  return (
    <div>
        <Navbar />
      <div className='asidemain'>
        <div className='asidecont1'><div ><AccountCircleIcon className='asicon' style={{fontSize:"40px"}}/></div><div>Hi Nithees k</div></div>
        <div className='asidecont'>
        <div className='asidecont2' onClick={()=>navigate('/profile')}>MyProfile</div>
        <hr />
        <div className='asidecont3' onClick={()=>navigate('/accountinfo')}>Profile Infromation</div>
        <hr />
        <div className='asidecont4' onClick={()=>navigate('/addadress')}>Add Address</div>
        <hr />
        <div className='asidecont5'>My Orders</div>
        <hr />
        <div className='asidecont5'>change password</div>
        <hr />
        </div>
      </div>
    </div>
  )
}

export default Accountsidebar
