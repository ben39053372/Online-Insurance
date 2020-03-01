import React from 'react'
import { Card, CardContent, Typography, Grid, IconButton, CardActionArea } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useHistory } from 'react-router-dom'
import useStyles from '../../../style/style'

export default props => {
  const classes = useStyles()
  const history = useHistory()
  const sendRequest = () => {
    console.log(props.item.requestId)
    history.push(`/Brokers/RequestListDetail/${props.item.requestId}`)
  } 
  return (
    <>
      <Card>
        <CardActionArea onClick={sendRequest}>
          <CardContent>
            <Grid container direction="row">
              <Grid container item xs={11} direction="column">
                <Grid item>
                  {props.item.isQuoted === 1 ? <div style={{ backgroundColor: '#F0F' }} /> :
                  props.item.isQuoted === 0 ? <div style={{ backgroundColor: '#F0F' }} /> :
                  props.item.isInterested === 1 ? <div style={{ backgroundColor: '#FF0' }} /> :
                  props.item.isDeleted === 1 && <div style={{ backgroundColor: '#008000' }} />}
                  <Typography variant='h6'>{props.item.requestTimestamp.slice(0, 10)}</Typography>
                </Grid>
                <Grid item>
                  <Grid container>
                    <Grid item xs={3}>
                      <Typography>車廠名稱</Typography>
                      <Typography>{props.item.brandEn || props.item.brandCht || 'None'}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>型號</Typography>
                      <Typography>{props.item.carModel || 'None'}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>出廠年份</Typography>
                      <Typography>{props.item.manufactureYear || 'None'}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography>車輛數目</Typography>
                      <Typography>{props.item.ownCarsCount || 'None'}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={1} container alignContent="center">
                <IconButton edge="start">
                  <ChevronRightIcon fontSize="large" />
                </IconButton>
              </Grid>
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}