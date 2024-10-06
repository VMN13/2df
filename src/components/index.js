import React from "react";


export default function Input({
  labelName, 
  placeholder,
  action,
  name,
  value,
  className,
  labelStyle
}) {
  return (
    <div>
      <label className={labelStyle}>{labelName}</label>
   <input className={className}
   placeholder={placeholder} 
   name={name}
   onChange={action}
   value={value}
   />
    </div>
  )
}