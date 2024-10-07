import React, {useState} from "react";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaUserCircle } from "react-icons/fa";
import { GrSearch } from "react-icons/gr";
import LogoHeader from "./logo_header.svg";
import { Dayjs } from "dayjs";
import MyComponent from "./Daysjs";
import { MdOutlineNightsStay } from "react-icons/md";
import Theme from './theme';

const navigation = [
  {name: 'Rubriken', href: '#', current: true},
  {name: 'Barrierefrei', href: '#', current: false},
  {name: 'Live-TV', href: '#', current: false},
  {name: 'Sendung verpasst', href: '#', current: false},
  {name: 'Suche', href: '#', current: false},
  {name: 'Mein ZDF', href: '#', current: false},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
};

export default function Example() {
  return (
    <Disclosure
      as="nav" 
      className="bg-white-800">
<div className="
  mx-auto
  max-w-7xl 
  px-2 
  sm:px-6 
  lg:px-8">

<div className="
  relative 
  flex
  h-16 
  items-center
  justify-between">

<div className="
  absolute
  inset-y-0 
  left-0
  flex
  items-center 
  sm:hidden">

  <DisclosureButton
     className="
       group 
       relative
       inline-flex 
       items-center
       justify-center
       rounded-md 
       p-2 
       text-gray-400
       hover:bg-gray-700
       hover:text-white 
       focus:outline-none 
       focus:ring-2 
       focus:ring-inset 
       focus:ring-white">

 <img
    alt=""
    src={LogoHeader}
    className="h-8 w-auto"
     />

    <span className="absolute -inset-0.5" />
      <span className="sr-only">
        Open main menu
      </span>

<Bars3Icon aria-hidden="true" 
           className="
             block 
             h-6 
             w-6 
             group-data-[open]:hidden"
              />
 <XMarkIcon
   aria-hidden="true"
   className="
     hidden 
     h-6
     w-6 
     group-data-[open]:block" 
     />
</DisclosureButton>
  <p className="text-black-700 ">
     <MyComponent />
  </p>
 </div>

<div className="
  flex
  flex-1 
  items-center 
  justify-center 
  sm:items-stretch 
  sm:justify-start">
  <div className="
   flex 
   flex-shrink-0 
   items-center">
  </div>

<div className="hidden sm:ml-6 sm:block">
   <div className="flex space-x-4">
     {navigation.map((item) => (
     <a
       key={item.name}
       href={item.href}
       aria-current={item.current ? 'page' : undefined}
       className={classNames(
         item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
          'rounded-md px-3 py-2 text-sm font-medium',)}>
           {item.name}
            </a>
           ))}
</div>
 </div>
 </div>

<div className="
  absolute
  inset-y-0
  right-0 
  flex 
  items-center
  pr-2 
  sm:static
  sm:inset-auto 
  sm:ml-6 
  sm:pr-0">
   <GrSearch />
  <button className="mr-4">
    <p className="font-bold">
       Suche
    </p> 
 </button>
   <FaUserCircle />
     <button className="">
        Mein ZDF
     </button>
 </div>
</div>
</div>

  <Theme/>
   <DisclosurePanel
     className="sm:hidden">
<div className="space-y-1 px-2 pb-3 pt-2">
    {navigation.map((item) => (
  <DisclosureButton
    key={item.name}
    as="a"
    href={item.href}
    aria-current={item.current ? 'page' : undefined}
    className={classNames(
      item.current ? 
        'bg-gray-900 text-white' : 
        'text-gray-300 hover:bg-gray-700 hover:text-white',
        'block rounded-md px-3 py-2 text-base font-medium',
       )} >
        {item.name}
  </DisclosureButton>
   ))}
 </div>
 </DisclosurePanel>
  </Disclosure>
  );
};