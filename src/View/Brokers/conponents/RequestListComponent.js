import React from 'react'
import { Card, CardContent, Divider, Typography, Grid, CardActionArea, Icon } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import useStyles from '../../../style/style'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

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
            <Grid container direction="row">
              <Grid container item spacing={0} xs={11} direction="row">
                <Grid item xs={6} sm={3}>
                  <div className={classes.requestListDataGrid}>
                    <Typography className={classes.requestListDataGrid_Title}>車廠名稱</Typography>
                    <Typography className={classes.requestListDataGrid_Content}>{props.item.brandCht || props.item.brandEn || 'None'}</Typography>
                  </div>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <div className={classes.requestListDataGrid}>
                    <Typography className={classes.requestListDataGrid_Title}>型號</Typography>
                    <Typography className={classes.requestListDataGrid_Content}>{props.item.carModel || 'None'}</Typography>
                  </div>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <div className={classes.requestListDataGrid}>
                    <Typography className={classes.requestListDataGrid_Title} >出廠年份</Typography>
                    <Typography className={classes.requestListDataGrid_Content}>{props.item.manufactureYear || 'None'}</Typography>
                  </div>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <div className={classes.requestListDataGrid}>
                    <Typography className={classes.requestListDataGrid_Title}>車輛數目</Typography>
                    <Typography className={classes.requestListDataGrid_Content}>{props.item.ownCarsCount || 'None'}</Typography>
                  </div>
                </Grid>
              </Grid>
              <Icon style={{margin: 'auto 0'}}>
                <ArrowForwardIosIcon />
              </Icon>
            </Grid>

            <Divider style={{ marginTop: '5px' }} />
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  )
}