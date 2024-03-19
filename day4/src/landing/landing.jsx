import React, { useState } from "react";
import Navbar from "../Navbar/navbar";
import "./landing.css";

import Him from "../assets/Him.webp";
import Her from "../assets/her.webp";
import Kid from "../assets/Kid.webp";
import Photo1 from "../assets/personalised-birthday-special-led-speaker_1.webp";
import StarIcon from "@mui/icons-material/Star";
import Photo2 from "../assets/photoframe1.webp";
import Bottle from "../assets/bottle.webp";
import Cube from "../assets/cube.webp";
import Personalised from "../assets/Personalised.webp";
import Photocake from "../assets/Photo-Cakes.webp";
import Explosionbox from "../assets/Explosion-box.webp";
import Chocolate from "../assets/Chocolates.webp";
import Greeting from "../assets/Greeting-Cards.webp";
import Photoframe from "../assets/Photoframes.webp";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import img1 from '../assets/Anniversary.webp'
import img2 from '../assets/Birthday.webp'
import img3 from '../assets/Love-n-Romance.webp'
import img4 from '../assets/Wedding.webp'
import img5 from '../assets/personalised-bluetooth-led-speaker_1.webp'
import img6 from '../assets/personalised-couple-table-frame_1.webp'
import img7 from '../assets/personalised-quirky-couple-mug-set_1.webp'
import img8 from '../assets/personalised-stylish-mason-jar_1.webp'
const Landing = () => {
  const [prImage, setprImage] = useState([
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    }
  ]);
  const[mrImage,setmrImage]=useState([
    {img:img5,cont:'personalised-bluetooth-led-speaker_1.',price:'Price : $20' ,star:5,},
    {img:img6,cont:'personalised-bluetooth-led-speaker_1.',price:'Price : $20',star:5},
    {img:img7,cont:'personalised-bluetooth-led-speaker_1.',price:'Price : $20',star:5},
    {img:img8,cont:'personalised-bluetooth-led-speaker_1.',price:'Price : $20',star:5},
  ])
  return (
    <div className="lanmain">
      <Navbar />
      <div className="lanmain1">
        <div className="lancont">
          <p>
            <span className="lanin1">Awesome gift for your loved once</span>
            <br />
            <div className="lanin2">
              some gits are big.Others are small.
              <br />
              But the ones that come from the heart are <br />
              the best gifts of all.
            </div>
          </p>
        </div>
        <div className="disproduct">
          <div className="discont">
            <h1>Make celebrations with special</h1>
          </div>
          <div className="disprli">
            <div>
              <img src={Explosionbox} width={280} height={300} />
            </div>
            <div>
              <img src={Photocake} width={280} height={300} />
            </div>
            <div>
              <img src={Personalised} width={280} height={300} />
            </div>
            <div>
              <img src={Photoframe} width={280} height={300} />
            </div>
            <div>
              <img src={Greeting} width={280} height={300} />
            </div>
            <div>
              <img src={Chocolate} width={280} height={300} />
            </div>
          </div>
        </div>
        <div className="landcont1">
          <div>
            <img src={Him} />
          </div>
          <div>
            <img src={Her} />
          </div>
          <div>
            <img src={Kid} />
          </div>
        </div>
        <div className="mrcat">
          {mrImage.map((img) => {
            console.log(img);
            return (
              <div className="mrcatcont">
                <div className="mrcatcont1"><img src={img.img} width={300} height={300} /></div>
                <div className="mrcatcont2">{img.cont}</div>
                <div className="mrcatcont3"><div>{img.price}</div><div className="mrstar"><div>{img.star}</div><StarIcon/></div></div>
              </div>
            );
          })}
        </div>
        <div className="prcat">
          {prImage.map((img) => {
            console.log(img);
            return (
              <div className="prcatcont">
                <img src={img.img} width={714} height={280} />
              </div>
            );
          })}
        </div>
      
        <div className="mainrev">Reviews</div>
        <div className="reviewmain">
          <div className="revcont1">
            <div className="revimg1">
              <img src={Photo1} width={300} height={300} />
            </div>
            <div className="revstar">
              <div>5.0</div>
              <div className="revstaric">
                <StarIcon />
              </div>
            </div>
            <div className="revcont2">
              <p>
                The packaging was good and Flowers were fresh, It made my
                sister's day when She saw Surprise. Thank you GiftVibes
              </p>
            </div>
          </div>
          <div className="revcont1">
            <div className="revimg1">
              <img src={Photo2} width={300} height={300} />
            </div>
            <div className="revstar">
              <div>4.9</div>
              <div className="revstaric">
                <StarIcon />
              </div>
            </div>
            <div className="revcont2">
              <p>
                Thank u GiftVibes .your service is just awesome. Your concern
                for your customer and behavior towards your customer is too good
                .
              </p>
            </div>
          </div>
          <div className="revcont1">
            <div className="revimg1">
              <img src={Bottle} width={300} height={300} />
            </div>
            <div className="revstar">
              <div>5.0</div>
              <div className="revstaric">
                <StarIcon />
              </div>
            </div>
            <div className="revcont2">
              <p>
                Wonderful product with wonderful staff support and cooperation
                !! Had and great experience. Thanks so much GiftVibes
              </p>
            </div>
          </div>
          <div className="revcont1">
            <div className="revimg1">
              <img src={Cube} width={300} height={300} />
            </div>
            <div className="revstar">
              <div>5.0</div>
              <div className="revstaric">
                <StarIcon />
              </div>
            </div>
            <div className="revcont2">
              <p>
                Thank you, for delivery on time on my parents anniversary. They
                felt very happy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
