import React, { useState } from 'react'
import { useLayoutEffect } from 'react';
import {useEffect} from  'react'

function WindowSize() {
  const [width,setWidth]=useState(100)
   function handleResize() {
      setWidth(window.innerWidth);
    }
  
    useLayoutEffect(() => {
      console.log('useLayoutEffect');
      window.addEventListener('resize', handleResize);

      document.body.style.backgroundColor = width > 600 ? 'green' : 'red';
      return () => window.removeEventListener('resize', handleResize);

    }, [width]);
  
   
    useEffect(() => {
    }, []);
  

    
  return (

    <div>windowSize is ${width}</div>
  )
}

export default WindowSize



