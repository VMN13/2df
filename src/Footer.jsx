import React from "react";
import logoFooter from "./logo_footer1.svg";
import logoFootertwo from "./logo_footer2.svg";
import logoFooterthree from "./logo_footer3.svg";
import logoFooterfour from "./logo_footer4.svg";
import logoFooterfive from "./logo_footer5.svg";

import FooterSix from "./logo_footer6.svg";
import FooterSeven from "./logo_footer7.svg";
import FooterEight from "./logo_footer8.svg";
import FooterNine from "./logo_footer9.svg";
import FooterTen from "./logo_footer10.svg";
import FooterEleven from "./logo_footer11.svg";
import FooterTwelve from "./logo_footer12.svg";

function Footer() {
  return (
    <div className="indent-8 flex flex-nowrap">
 <footer class="bg-white dark:bg-gray-300">
    <div class="mx-auto w-full max-w-screen-xl">
    <div className="grid grid-cols-5 grid-rows-1 gap-4 gray-300">
      <div><img src={logoFooter}></img></div>
      <div><img src={logoFootertwo}></img></div>
      <div><img src={logoFooterthree}></img></div>
      <div><img src={logoFooterfour}></img></div>
      <div><img src={logoFooterfive}></img></div>
    </div>
      <div class="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Mehr ZDF</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class=" hover:underline">ZDFapps</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Smart TV</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">ZDFtext
</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Livestreams</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Sendungen A-Z
</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">TV-Programm
</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">ZDF woanders</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">ZDF YouTube</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">ZDF Facebook</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">ZDF Twitter</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">ZDF Instagram</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">ZDF Tiktok</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">ZDF Mastodon</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Service</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">Tickets</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Zuschauerservice</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">ZDFmitreden&amp; </a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Kontakt zum ZDF </a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Sitemap </a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Hilfe</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Das ZDF</h2>
            <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                    <a href="#" class="hover:underline">ZDF Unternehmen</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Karriere</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Presseportal</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Werbefernsehen</a>
                </li>
                <li class="mb-4">
                    <a href="#" class="hover:underline">Mainzelmännchen</a>
                </li>
            </ul>
        </div>
    </div>
    <div className="grid grid-cols-5 grid-rows-1 gap-4">
      <div><p className="text-white">Partner</p></div>
      <div><img src={FooterSix}></img></div>
      <div><img src={FooterSeven}></img></div>
      <div><img src={FooterEight}></img></div>
    
    </div>
    <div className="grid grid-cols-5 grid-rows-1 gap-4">
      <div><img src={FooterNine}></img></div>
      <div><img src={FooterTen}></img></div>
      <div><img src={FooterEleven}></img></div>
      <div><img src={FooterTwelve}></img></div>
    </div>
    
<div className="grid grid-cols-4 grid-rows-1 gap-4 bg-gray-300">
    <div><p className="text-white">Nutzungsbedingungen</p></div>
    <div><p className="text-white">Datenschutz</p></div>
    <div><p className="text-white">Datenschutzeinstellungen</p></div>
    <div><p className="text-white">Impressum</p></div>
</div>
    </div>
</footer>
</div>
  )
}




export default Footer;