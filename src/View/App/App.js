import React from 'react';
import { Container, makeStyles, Paper, Grid, Divider } from '@material-ui/core';
import Title from './components/Title';
import Banner from './components/Banner';
import Button from './components/Button';
import TextField from './components/TextField';

const useStyle = makeStyles({
  root: {
    flexGrow: 1,
    paddingTop: '5vh'
  }
})

const App = () => {
  const classes = useStyle()
  return (
    <Container maxWidth="lg" className={classes.root}>
      <Paper style={{ flexGrow: 1, height: '80vh' }}>
        <Grid container justify='center' alignItems='center' direction='column' spacing={2}>
          <Title title='Customer App' />
          <Banner />
          <Button name='New User' />
          <Grid item xs={12} style={{alignSelf: 'stretch'}}>
            <Divider variant='middle' />
          </Grid>
          <TextField label='Email' width='80' icon='email'/>
          <TextField label='Password' width='80' icon='key' />
          <Button name='Login' />
        </Grid>
      </Paper>
    </Container>
  )
}

export default App;
