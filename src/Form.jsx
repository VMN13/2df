import React, {useState, useEffect, useRef} from "react";

const formatTime = (time) => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time - minutes * 60);

  if (minutes <= 10) minutes = '0' + minutes;
  if (seconds <=10) seconds = '0' + seconds;
  return minutes + ':' + seconds
}

export default function Form({seconds}) {
  const [countdown, setCountdown] = useState(seconds);
  const timerId = useRef()

   useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown(prev => prev - 1)
    }, 1000)
    return () => clearInterval(timerId.current);
   }, [])

   useEffect(() => {
    if(countdown <= 0) {
      clearInterval(timerId.current);
     
    }
   }, [countdown])

  return (
    <div className="mt-10">
    <h1 className="">AKTION LÄUFT AB IN</h1>
    <h2 className="text-red-800 text-2xl">{formatTime(countdown)}</h2>
    </div>
  )
}



