import { Grid, Paper, Stack } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Jsons from '../Jsons'
import { useState } from 'react';
import MODALS from './MODALS'

const CARDS = () => {
  const [ show,setShow] = useState(true)
  const modal = ()=>{
    setShow(false)
  }
  return (
    <>
    <h1>Food Item's</h1>
    {
        Jsons.map((pass,index)=>{
            return(
                <>
                
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{marginTop:"30px"}} paddingX={18}>
        <Grid item xs={10} sm={6} md={6} lg={3} xl={5} onClick={modal}>
                <Paper elevation={10}>
                    
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image='https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'
          alt="green iguana"
        />
        
        <CardContent>
            <Stack direction={'row'}  justifyContent={'space-between'}>
          <Typography gutterBottom variant="body1" component="div">
            {pass.name}
          </Typography>
          <Typography display={'flex'}><StarIcon style={{color:'gold'}}/>Stars</Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            specie
          </Typography>
          <Typography >Rs-{pass.price}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Paper>
        </Grid>

        {
          show ? null : <MODALS/>
        }

        {/* 2nd */}

        <Grid item xs={10} sm={6} md={6} lg={3} xl={5} onClick={modal}>
                <Paper elevation={10}>
                    
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image='https://media.istockphoto.com/id/1398630614/photo/bacon-cheeseburger-on-a-toasted-bun.webp?b=1&s=170667a&w=0&k=20&c=Aq7Dg29n3DDE3gqgT2cWSh9LYxZnr-8SFu0crRQxArA='
          alt="green iguana"
        />
        
        <CardContent>
            <Stack direction={'row'}  justifyContent={'space-between'}>
          <Typography gutterBottom variant="body1" component="div">
            {pass.name}
          </Typography>
          <Typography display={'flex'}><StarIcon style={{color:'gold'}}/>Stars</Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            specie
          </Typography>
          <Typography>Rs-{pass.price}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Paper>
        </Grid>

        {/* 3rd */}

        <Grid item xs={10} sm={6} md={6} lg={3} xl={5} onClick={modal}>
                <Paper elevation={10}>
                    
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image='https://media.istockphoto.com/id/1340104506/photo/closeup-photo-of-home-made-fresh-burger-with-beef-onion-tomato-lettuce-cheese-and-spices.webp?b=1&s=170667a&w=0&k=20&c=YGjZtingkEXbsn_Z2Fe6TRxE2HXOLWKoInO_fs0C-Ts='
          alt="green iguana"
        />
        
        <CardContent>
            <Stack direction={'row'}  justifyContent={'space-between'}>
          <Typography gutterBottom variant="body1" component="div">
            {pass.name}
          </Typography>
          <Typography display={'flex'}><StarIcon style={{color:'gold'}}/>Stars</Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            specie
          </Typography>
          <Typography>Rs-{pass.price}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Paper>
        </Grid>

        {/* 4th */}

        <Grid item xs={10} sm={6} md={6} lg={3} xl={5} onClick={modal}>
                <Paper elevation={10}>
                    
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image='https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60'
          alt="green iguana"
        />
        
        <CardContent>
            <Stack direction={'row'}  justifyContent={'space-between'}>
          <Typography gutterBottom variant="body1" component="div">
            {pass.name}
          </Typography>
          <Typography display={'flex'}><StarIcon style={{color:'gold'}}/>Stars</Typography>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            specie
          </Typography>
          <Typography>Rs-{pass.price}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Paper>
        </Grid>
    </Grid>

    


                
                </>
            )
        })
    }
    
   
    </>
  )
}

export default CARDS
