import React from "react";
import Image from "./xhero-1.jpg.pagespeed.ic.8CEgg791H7.jpg";
import Img from "./xhero-2.png.pagespeed.ic.EeChoTA12r.jpg";
import Virgule from "./88877cd (1).svg";



export default function Main() {
  return (
    <div className="">

 <div className="mx-5 mt-2.5 text-left">   
<h1 className="text-2xl font-bold  text-red-700">
  Hape Kerkeling:
</h1>

<h2 className="mt-2.5 text-2xl font-bold text-black-900">
'ICH VERBRENNTE 30 KG <br/> FETT IN ZWEI MONATEN. ICH HABE VOR DEM SCHLAFENGEHEN EIN NATURPRODUKT EINGENOMMEN...
</h2>
</div>  


<div className="w-96">
  <img className="mx-1" src={Image} alt="img"></img>
<h3 className="font-semibold text-black-800">
Der berühmte Komiker und TV-Moderator hat zum ersten Mal ganz Deutschland erzählt, wie Persönlichkeiten aus dem Showbiz abnehmen!
</h3>
<hr/>
</div>

<div className="">
Hape Kerkeling hat in letzter Zeit viel Gewicht verloren, was seine Fans und Kollegen überrascht hat. In kurzer Zeit hat der Komiker 32 kg abgenommen! <br/><br/>
<div className="flex justify-center mt-5 mb-5">
  <img src={Virgule}>

  </img>
</div>

Handelt es sich um eine gefährliche Krankheit, eine gewöhnliche Diät oder ein Geheimrezept, das nur den Stars des Showbusiness zur Verfügung steht? <br/><br/>

In dieser Ausgabe von "Maybrit Illner" erzählt Hape Kerkeling zum ersten Mal von seiner Abnehm-Methode und Stars sind seinem Beispiel bereits gefolgt.

</div>


<div className="w-96">
  <hr />
 <img src={Img} alt="img"></img>
  <hr/>
</div>

<div className="">
  <p className="">
  Illner: Guten Morgen, liebe Zuschauerinnen und Zuschauer von 'Maybrit Illner'! Heute bin ich hier bei Ihnen, Maybrit Illner!

Die Geschichte unseres Gastes wurde schon oft im Internet und in den Medien aufgegriffen: Der Komiker erzählt in unserer Sendung zum ersten Mal die ganze Wahrheit über seinen Gewichtsverlust. Wir begrüßen einen der führenden Deutsche Komiker, Hape Kerkeling !
  </p>
</div>




</div>

  )
}