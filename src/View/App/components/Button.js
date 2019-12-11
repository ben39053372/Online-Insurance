import React from 'react'
import {Grid, Button} from '@material-ui/core'

export default props => {
  return (
    <Grid item xs={12} style={{ alignSelf: 'center' }}>
      <Button variant='outlined' size='large' color='primary' style={{ width: '40vw' }}>{props.name}</Button>
    </Grid>
  )
}