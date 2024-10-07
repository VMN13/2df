import React, {useState, useEffect} from "react";

export const DateTime = () => {
const [timer, setTime] = useState(new Date());

useEffect(() => {
  var timer = setInterval(() => setTime(new Date()), 1000 )
  return function cleanup() {
clearInterval(timer)
  }
});

const year = timer.getFullYear();
const day = timer.getDay();
const month = timer.getMonth();
const timeString = `0${month}.0${day}.${year}`;

return (
  <div>
    <p>{timeString}</p>
  </div>
);
};
 
export default DateTime;
