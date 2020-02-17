import React, { useState } from 'react'
import { TextField, Tabs, Tab, Typography } from '@material-ui/core';
import RequestListComponent from './conponents/RequestListComponent'

const RequestList = () => {
  const [tabValue, setTabValue] = useState(0)
  return (
    <>
      <TextField fullWidth label="搜尋報價編號或電話車牌" />
      <Tabs
        value={tabValue}
        onChange={(e, value) => setTabValue(value)}
        variant="scrollable"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="所有" />
        <Tab label={
          <>
            <Typography>6小時</Typography>
            <Typography>內報價</Typography>
          </>} />
        <Tab label={
          <>
            <Typography>已報價</Typography>
            <Typography>等回覆</Typography>
          </>} />
        <Tab label={
          <>
            <Typography>已被客</Typography>
            <Typography>戶選擇</Typography>
          </>} />
        <Tab label="已刪除" />
      </Tabs>

      <RequestListComponent />

    </>
  )
}

export default RequestList