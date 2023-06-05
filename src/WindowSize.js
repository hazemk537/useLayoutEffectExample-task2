import React, { useState } from 'react'
import { useLayoutEffect } from 'react';
import {useEffect} from  'react'

function WindowSize() {
 
  
    useLayoutEffect(() => {      
      alert("test")
   
    }, []);

    //try it 
    // useEffect(() => {      
    //   alert("test")
   
    // }, []);

    
  return (
    <div>Mounted! </div>
  )
}

export default WindowSize



