import React from 'react'
import { Card, CardContent, Typography, Grid, IconButton, CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import requestListComponent from '../styles/requestListComponent'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
const useStyles = makeStyles(requestListComponent)

export default props => {
  const classes = useStyles()
  return (
    <>
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.CardContent}>
            <Grid container direction="row">
              <Grid container item xs={11} direction="column">
                <Grid item>
                  <div className={classes.ball} style={{ backgroundColor: '#000' }} />
                  <Typography variant='h6' className={classes.date}>{'jan 17 2020'}</Typography>
                </Grid>
                <Grid item>
                  <Grid container>
                    <Grid item xs={3}>
                      <Typography className={classes.title}>車廠名稱</Typography>
                      <Typography className={classes.content}>content</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography className={classes.title}>型號</Typography>
                      <Typography className={classes.content}>content</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography className={classes.title}>出廠年份</Typography>
                      <Typography className={classes.content}>content</Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography className={classes.title}>車輛數目</Typography>
                      <Typography className={classes.content}>content</Typography>
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