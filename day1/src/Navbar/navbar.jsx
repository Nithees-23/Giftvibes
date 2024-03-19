import React from "react";
import QuizIcon from "@mui/icons-material/Quiz";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import Gift from "../assets/giftvibes-high-resolution-logo-black.png";
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SearchIcon from '@mui/icons-material/Search';
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="navcont1">
        <div className="navimg">
          <img src={Gift} height={130} width={200} />
        </div>
        <ul>
          <li className="navhome">
            <div className="navsearch"><div><input type="text" placeholder="tap to search" /></div><SearchIcon className="navsric"/></div>
          </li>
          <li className="navhome">
            <HomeIcon />
            home
          </li>
          <li className="navcontact">
            <PermPhoneMsgIcon />
            contact
          </li>
          <li className="navgift">
            <CardGiftcardIcon />
            gifts
          </li>
          <li className="navcart">
            <LocalGroceryStoreIcon />
            cart
          </li>
          <li className="navlog" onClick={() => navigate("/")}>
            <AccountCircleIcon />
            Account
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
