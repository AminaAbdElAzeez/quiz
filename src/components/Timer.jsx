import { useEffect, useState } from 'react'

const Timer = ({setStop,questionNumber}) => {
    const [time,setTime]=useState(30);

    useEffect(()=>{
        if(time === 0) return setStop(true)
        const interval = setInterval(()=>{
            setTime((prev)=> prev - 1)
        },1000)
        return () => clearInterval(interval)
    },[time,setStop])

    useEffect(()=>{
        if(questionNumber < 15){
            setTime(30)
        } else {
            setStop(true)
        }
    },[questionNumber,setStop])

  return time;
}

export default Timer
