import React from 'react'
import Navbar from '../../Navbar/navbar';
import Accountsidebar from '../../Accountsidebar/Accountsidebar';
import '../Profile/Accountinformation.css'

const Accountinformation = () => {
  return (
    <div>
       <Navbar />
       <div className='acmain'>
       <div className='acacside'><Accountsidebar/></div>
        <div className='accont'>
            <div className='accontmain'>
               <div className='acinfo1'>your account deatils</div> 
               <div className='acinfo2'>click here to edit your Infromation</div>
               <div className='acinfo3'>Account details</div> 
               <div className='accontm1'>
                  <div className='acconts1'>
                    <h2>Personal</h2>
                    <p><strong>Email : </strong> robert123k@gamil.com</p>
                    <p><strong>UserName : </strong> robert</p>
                    <p><strong>Display Name : </strong>Roboto</p>
                  </div>
                  <div className='acconts2'>
                    <h2>Customer history</h2>
                    <p>Customer since: Mar 2023</p>
                    <p>Completed Purchase: 3</p>
                    <p>Value of Purchase: $120</p>
                  </div>
               </div>
                <div className='acinfo4'>
                    <h2>Access passes</h2>
                    <p>Congratulation! You are an Access pass holder.You can download multiple extension from one location</p>
                    <button>View your download</button>
                </div>
            </div>
        </div>
       </div> 
    </div>
  )
}

export default Accountinformation;
