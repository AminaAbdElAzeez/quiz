import React, { useRef } from 'react'

const Start = ({setUsername}) => {
    const inputRef = useRef();
    
    const clickHandler = ()=> {
        inputRef.current.value && setUsername(inputRef.current.value)
    }

  return (
    <div className='start'>
        <input className='start-input' type='text' placeholder='Enter Your Name...' ref={inputRef}/>
        <button className='start-btn' onClick={clickHandler}>Start</button>
    </div>
  )
}

export default Start
