import React, {useState, useEffect} from "react";


export const DateTime = () => {
const [date, setDate] = useState(new Date());

useEffect(() => {
  var timer = setInterval(() => setDate(new Date()), 1000 )
  return function cleanup() {
clearInterval(timer)
  }
});


return (
  <div>

    <p> {date.toLocaleString()}</p>
  </div>
)



}
 


export default DateTime;
