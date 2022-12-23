import React from 'react'
import {Box, Grid, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';

const classes = {
  plantCard:'plantCard',
  menuButton:`menuButton`,
  typography:`typography`
}

const Root=styled('div')(({theme})=>({
    [`& .${classes.plantCard}`]:{
      backgroundColor:'blue',
      border:'2px solid white',
      borderRadius:'15px',
      padding:'5px',
      margin:'8px'
    }
}))

const Plant = ({
    id,
    name,
}) => {
  return (
    <Root>
      <Grid container className={classes.superHeroeCard}>
        <Grid item xs={8}>
          <h2>Id: {id}</h2>
          <h3>Name: {name}</h3>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <img src={`https://robohash.org/user${id+1}`}/>
          </Box>
        </Grid>
      </Grid>
    </Root>    
  )
}

export default Plant