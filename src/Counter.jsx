import { Button, Stack } from '@mui/material'
import React, { useState } from 'react'

function Counter() {
    const [counter,setCounter] = useState(0)

    const handleIncrement= ()=>{
setCounter(counter+1)
    }
    const handleDecrement=()=>{
        if(counter>0){
            setCounter(counter-1)

        }
            }
  return (
   <>
   <Stack direction='row' justifyContent='center' sx={{marginTop:'90px',fontSize:'45px'}}>{counter}</Stack>
    <Stack direction='row' spacing={2} justifyContent='center' sx={{marginTop:'80px'}}>
    <Button onClick={handleIncrement} variant='contained'>Increment</Button>
    <Button onClick={handleDecrement} variant='contained'>Decrement</Button>
    </Stack>
   

   </> 
  )
}

export default Counter

