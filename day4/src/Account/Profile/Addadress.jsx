import React from 'react'
import Navbar from '../../Navbar/navbar';
import Accountsidebar from '../../Accountsidebar/Accountsidebar';
import "../Profile/Addadress.css"
const Addadress = () => {
  return (
    <div>
      <Navbar/>
      <div className='addmain'>
        <Accountsidebar />
        <div className='addcont'>
            <div className='addcontmain'>
            <div className='addhead'><h2>Shopping Address</h2>
            <p>The following address will be used for shipping</p>
            </div>
            <div>
                <form>
                    <div className='addfcont1'>
                    <div className='addfcont11'>
                        <label for='fname'>Firstname*</label>
                        <input type='text' placeholder='fisrtname' id='fname'/>
                    </div>
                    <div className='addfcont11'>
                        <label for='lname'>lastname*</label>
                        <input type='text' placeholder='lasttname' id='lname' />
                    </div>
                    </div>
                </form>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Addadress;
