import React, {useState} from "react";
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Berry from "./Photo/Berry.png";
import OnePng from './Photo/1.png';
import TwoPng from './Photo/2.png';
import ThreePng from './Photo/3.png';
import FourPng from './Photo/4.png';
import FivePng from './Photo/5.png';
import SixPng from './Photo/6.png';
import SevenPng from './Photo/7.jpg';

export default function FormNum() {
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

  <div className="flex justify-evenly my-3.5   mx-28
     
     ">
       <p className="line-through   p-[-20px]">{oldPrice}
       </p>
        <p>{oldCurrency}
        </p>
    </div>
      <img className="rounded-full " 
            src={Berry}>
      </img>
<form className="w-80">
  <label>
    <input className="border-dashed
     w-1/10
    "
      type="text" 
      name="name" 
      placeholder="Ihr Name" />
  </label>
<input className="my-3.5
  w-80
  rounded 
  w-[17.5rem]
  border-solid
  border-2 
  border-red-800
  focus:bg-red-100
  " 
    type="submit" 
    value="WEIGHT BERRY " />
</form>

<PhoneInput
className="w-[18.4rem] pl-3"
  placeholder="Ihre Telefonnummer"
  value={value}
  onChange={setValue}/>
<div className="flex justify-evenly my-3.5  mx-28

">
  <p className="font-bold p-[-20px] text-red-700">{Price}
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
  my-3.5
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
