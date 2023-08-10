import React from 'react'
import {Box,Button,Paper, Stack} from '@mui/material'
import './MODALS.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const MODALS = () => {
  const [value,setValue] = useState(1)
  const [total,setTotal] = useState(10)
  const navigate = useNavigate()

  const Pcalls =()=>{
    setValue(value+1)
    setTotal(total+10)
  }
  const Ncalls =()=>{
    setValue(value-1)
    setTotal(total-10)
  }
  return (
    <div>
      <Box className='move'>
      <Paper elevation={12} sx={{width: '35%', height:'50vh'}} style={{padding:'25px'}}>

      <Stack direction={'row'} justifyContent={'space-evenly'}>
      <img style={{width:'50%',height:'40vh'}}
      src='https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'/>
      <Stack direction={'column'}>
      <Button variant='contained' onClick={Pcalls}  color='success'>Amount +</Button>
      <h3>{value}</h3>
      <Button variant='contained' onClick={Ncalls} color='success'>Amount -</Button><br/>
      <span>Total Price: {total}</span><br/> 
      <Button variant='contained' color='success' onClick={navigate(-1)}>Order Now</Button> 
      </Stack>    
      </Stack>
      </Paper> 
      </Box>
    </div>
  )
}

export default MODALS
