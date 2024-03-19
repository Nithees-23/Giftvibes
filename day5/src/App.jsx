import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./login/login";
import Signup from "./signup/signup";
import Navbar from "./Navbar/navbar";
import Landing from "./landing/landing";
import Contact from "./pages/contact";
import MyProfile from "./Account/Profile/MyProfile";
import Accountsidebar from "./Accountsidebar/Accountsidebar";
import Accountinformation from "./Account/Profile/Accountinformation";
import Addadress from "./Account/Profile/Addadress";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/land" element={<Landing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aside" element={<Accountsidebar />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/accountinfo" element={<Accountinformation />} />
            <Route path="/addadress" element={<Addadress />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
