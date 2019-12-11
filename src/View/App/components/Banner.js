import React from 'react'
import {Grid} from '@material-ui/core'

const Banner = () => {
  return (
    <Grid item container xs={12} >
      <img
        height='180px'
        width='100%'
        alt=''
        style={{ paddingTop: '20px', paddingLeft: '20px', paddingRight: '20px' }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmPRgWlMCAmBTM7F2M8Jz5mlmOn9P0uJbnJff8YxhDpTRm15f&s"
      />
    </Grid>

  )
}

export default Banner