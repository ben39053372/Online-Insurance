import React, { useState } from 'react'
import { TextField, Tabs, Tab, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RequestListComponent from './conponents/RequestListComponent'
import requestList from './styles/requestList'

const useStyles = makeStyles(theme => requestList(theme))

const RequestList = () => {
  const [tabValue, setTabValue] = useState(0)
  const classes = useStyles();
  return (
    <Paper elevation={0}>
      <div className={classes.searchBar}>
        <TextField fullWidth label="搜尋報價編號或電話車牌" />
      </div>
      <Tabs
        value={tabValue}
        onChange={(e, value) => setTabValue(value)}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
        className={classes}
      >
        <Tab label="所有" />
        <Tab label={
          <>
            <Typography>6小時</Typography>
            <Typography>內報價</Typography>
          </>}
        />
        <Tab label={
          <>
            <Typography>已報價</Typography>
            <Typography>等回覆</Typography>
          </>}
        />
        <Tab label={
          <>
            <Typography>已被客</Typography>
            <Typography>戶選擇</Typography>
          </>}
        />
        <Tab label="已刪除" />
      </Tabs>
      <div style={{ paddingTop: '10px' }}>
        <RequestListComponent tab={tabValue} />
        <RequestListComponent tab={tabValue} />
      </div>
    </Paper>
  )
}

export default RequestList