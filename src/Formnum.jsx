import React, {useState} from "react";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Berry from "./Berry.png";
import OnePng from './1.png';
import TwoPng from './2.png';
import ThreePng from './3.png';
import FourPng from './4.png';
import FivePng from './5.png';
import SixPng from './6.png';
import SevenPng from './7.jpg';

export default function FormNum() {
  // `value` will be the parsed phone number in E.164 format.
  // Example: "+12133734253".
  const [oldPrice, setOldPrice] = useState(22);
  const [oldCurrency, setOldCurrency] = ['euro'];
  const [Price, setPrice] = useState(15);
  const [Currency, setCurrency] = ['euro'];
  const [name, setName] = useState();
  const [value, setValue] = useState();

return (
  <div className="
  text-bold
  mx-10
  text-red-800 
  text-2xl">

  <div className="
     flex
     justify-evenly">
       <p className="line-through">{oldPrice}
       </p>
        <p>{oldCurrency}
        </p>
    </div>
      <img className="rounded-full " 
            src={Berry}>
      </img>

<form className="w-80">
  <label>
    <input
      type="text" 
      name="name" 
      placeholder="Ihr Name" />
  </label>

<input className="
  w-80
  rounded 
  border-solid
  border-2 
  border-red-800" 
    type="submit" 
    value="WEIGHT BERRY BERRY BESTELLEN" />
</form>

<PhoneInput
  placeholder="Ihre Telefonnummer"
  value={value}
  onChange={setValue}/>

<div className="flex justify-evenly">
  <p className="font-bold text-red-700">{Price}
  </p>
  <p>{Currency}
  </p>
</div>

  <div className="">
    <p className="font-bold text-red-700">
      Mit Unterstützung:
    </p>
  </div>

  <div className="
  mx-10
  grid 
  grid-cols-2 
  grid-rows-4
  gap-7">

    <img src={OnePng}>
     </img>
     <img src={TwoPng}>
     </img>
     <img src={ThreePng}>
     </img>
     <img src={FourPng}>
     </img>
     <img src={FivePng}>
     </img>
     <img src={SixPng}>
     </img>
     <img src={SevenPng}>
     </img>
</div>
</div>
  );
};
