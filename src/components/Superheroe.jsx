import React from 'react'
import {Box, Grid, Typography} from '@mui/material';
import { styled } from '@mui/material/styles';

const classes = {
  superHeroeCard:'superHeroeCard',
  menuButton:`menuButton`,
  typography:`typography`
}

const Root=styled('div')(({theme})=>({
    [`& .${classes.superHeroeCard}`]:{
      backgroundColor:'blue',
      border:'2px solid white',
      borderRadius:'15px',
      padding:'5px',
      margin:'8px'
    }
}))

const Superheroe = ({
    n,
    name,
    age,
}) => {
  return (
    <Root>
      <Grid container className={classes.superHeroeCard}>
        <Grid item xs={8}>
          <Box>
            <Typography variant='h2'>
              {name}
            </Typography>
            <Typography variant='h3'>
              Age: {age}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <img src={`https://robohash.org/user${n+1}`}/>
          </Box>
        </Grid>
      </Grid>
    </Root>
  )
}

export default Superheroe