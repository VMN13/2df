import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function BtnScrollUp() {
	const handlerScrollUp = () => {
		if (document.body.scrollTop > 0 ||
			 document.documentElement.scrollTop > 0) {
			window.scrollBy(0, -1010);
			setTimeout(handlerScrollUp, 10);
		};
	};
	
	return (
		<button className="">
		  <div className={'btn-scroll-up'} 
		    type="submit" 
		    onClick={handlerScrollUp}>
			
<button className="
">

<p className="font-bold">
  BESTELLUNG
  <br/>

<FaArrowUpLong 
	className="w-full" /> 
		WEIGHTBERRY
</p>
<br/>
</button>
</div>
</button>
	);
};

export default BtnScrollUp;
