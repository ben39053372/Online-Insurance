import React from 'react'
import { Card, CardContent, Divider, Typography, Grid, CardActionArea } from '@material-ui/core';
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
      <Card >
        <CardActionArea onClick={sendRequest}>
          <CardContent>
            <div>
              <div className={classes.ball} style={{ backgroundColor: props.item.colourCode }}></div>
              <Typography variant='h6'>{props.item.requestTimestamp.slice(0, 10)}</Typography>
            </div>
            <Grid container spacing={1}>
              <Grid item xs={6} sm={3}>
                <div className={classes.requestListDataGrid}>
                  <Typography>車廠名稱</Typography>
                  <Typography>{props.item.brandEn || props.item.brandCht || 'None'}</Typography>
                </div>
              </Grid>
              <Grid item xs={6} sm={3}>
                <div className={classes.requestListDataGrid}>
                  <Typography>型號</Typography>
                  <Typography>{props.item.carModel || 'None'}</Typography>
                </div>
              </Grid>
              <Grid item xs={6} sm={3}>
                <div className={classes.requestListDataGrid}>
                  <Typography>出廠年份</Typography>
                  <Typography>{props.item.manufactureYear || 'None'}</Typography>
                </div>
              </Grid>
              <Grid item xs={6} sm={3}>
                <div className={classes.requestListDataGrid}>
                  <Typography>車輛數目</Typography>
                  <Typography>{props.item.ownCarsCount || 'None'}</Typography>
                </div>
              </Grid>
            </Grid>
            <Divider style={{ marginTop: '10px' }} />
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}