import React from 'react';
import { Container, makeStyles, Paper, Grid } from '@material-ui/core';
import Title from './components/Title';
import Banner from './components/Banner'

const useStyle = makeStyles({
  root: {
    flexGrow: 1,
    paddingTop: '5vh'
  }
})

const App = () => {
  const classes = useStyle()
  return (
    <Container maxWidth="md" className={classes.root}>
      <Paper style={{ flexGrow: 1, height: '80vh' }}>
        <Grid item xs={12}>
          <Title title='Customer App' />
        </Grid>
        <Grid>
          <Banner></Banner>
        </Grid>
      </Paper>
    </Container>
  )
}

export default App;
