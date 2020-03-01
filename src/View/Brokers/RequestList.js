import React, { useState,useEffect } from 'react'
import { TextField, Tabs, Tab, Typography, Paper } from '@material-ui/core';
import RequestListComponent from './conponents/RequestListComponent'
import { getQuotationRequestList } from '../../api/api/broker'
import useStyles from '../../style/style'

const RequestList = () => {
  const classes = useStyles()
  const [list, setList] = useState([])
  useEffect(() => {
    getQuotationRequestList().then(res => {
      if(res.status === 200) {
        console.log(res.data)
        setList(res.data.QuotationRequests)
      } else {
        console.log(res.data.error)
      }
    })
  }, [])
  const onSearchChange = (e)  => {
    getQuotationRequestList(e.target.value).then(res => {
      if(res.status === 200) {
        console.log(res.data)
        setList(res.data.QuotationRequests)
      } else {
        console.log(res.data.error)
      }
    })
  }
  const [tabValue, setTabValue] = useState(0)
  return (
    <Paper elevation={0}>
      <div>
        <TextField fullWidth label="搜尋報價編號或電話車牌" onChange={onSearchChange} />
      </div>
      <Tabs
        value={tabValue}
        onChange={(e, value) => setTabValue(value)}
        variant="fullWidth"
        indicatorColor="primary"
        textColor="primary"
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
      <div>
        {list.map((item, key) => {
          return (
            <RequestListComponent item={item} key={'RequestListComponent'+key}/>
          )
        })}
      </div>
    </Paper>
  )
}

export default RequestList