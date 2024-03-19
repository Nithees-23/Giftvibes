import React from 'react'
import Navbar from '../../Navbar/navbar';
import Accountsidebar from '../../Accountsidebar/Accountsidebar';
import Profile from "../../assets/pexels-italo-melo-2379005.jpg"
import "./MyProfile.css"
import { Button } from '@mui/material';
const MyProfile = () => {
  return (
    <div>
        <Navbar />
        <div className='profilemain'>
        <Accountsidebar /> 
        <div className='profilecont'>
            <div className='profilecont1'>
              <div className='pracc'>Account datails</div>
              <div className="profilepic">
                <img src={Profile} width={70} height={70}/>  
                <div className='cfile'><input type='file' className='cfile1'/></div>          
              </div>
            </div>
            <div className='profilecont2'>
            <div className='profilecont21'>
              <div className='lb1'><label for="fname">First Name*</label>
              <input type='text' placeholder='Enter your Firstname'/>
              </div>
              <div className='lb2'>
                <label for="fname">Last Name*</label>
                <input type='text' placeholder='Enter your lastname'/></div>
              </div>
            </div>
            <div className='profilecont22'>
              <label for="dname">Display Name*</label>
              <input type='text' placeholder='Enter your name to display'/>
            </div>
            <div className='profilecont22'>
              <label for="demail">Email*</label>
              <input type='text' placeholder='Enter your Email id'/>
            </div>
            <div className='profilecont22'>
              <label for="demail">Birthday*</label>
              <input type='date' placeholder='Enter your Date of Birth'/>
            </div>
            <div className='profilecont23'>
              <button>Save changes</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default MyProfile;
