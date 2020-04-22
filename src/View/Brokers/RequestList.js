import React, { useState,useEffect } from 'react'
import { TextField, Tabs, Tab, Typography, Paper } from '@material-ui/core';
import RequestListComponent from './conponents/RequestListComponent'
import { getQuotationRequestList } from '../../api/api/broker'
import { useSelector } from 'react-redux'

const RequestList = () => {
  const [list_temp,setList_temp] = useState([])
  const [list, setList] = useState([])
  const lang = useSelector(state=>state.lang)
  useEffect(() => {
    getQuotationRequestList().then(res => {
      if(res.status === 200) {
        console.log(res.data)
        setList(res.data.QuotationRequests)
        setList_temp(res.data.QuotationRequests)
      }else if(res.status === 403) {
        localStorage.removeItem('jwt2')
      } else {
        console.log(res.data.error)
      }
    })
    // eslint-disable-next-line
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
  useEffect(()=>{
    console.log(tabValue)
    if(tabValue === 0) {
      setList(list_temp)
    }else if (tabValue === 1) {
      setList(list_temp.filter(item => {
        if(item.statusCode === 'within6Hr') return true
        else return false
      }))
    }else if (tabValue === 2) {
      setList(list_temp.filter(item => {
        if(item.statusCode === 'quoted') return true
        else return false
      }))
    }else if (tabValue === 3) {
      setList(list_temp.filter(item => {
        if(item.statusCode === 'userInterested') return true
        else return false
      }))
    }else if (tabValue === 4) {
      setList(list_temp.filter(item => {
        if(item.statusCode === 'deleted') return true
        else return false
      }))
    }else {
      setList(list_temp)
    }
    // eslint-disable-next-line
  },[tabValue])
  return (
    <Paper elevation={0}>
      <div>
        <TextField fullWidth variant="filled" label={lang==='eng'?'Search records by number, phone or lincense':'搜尋報價編號或電話車牌'} onChange={onSearchChange} />
      </div>
      <Tabs
        value={tabValue}
        onChange={(e, value) => setTabValue(value)}
        variant="scrollable"
        scrollButtons="auto"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label={lang==='eng'?'All':'所有'} />
        <Tab label={
          <>
            <Typography>{lang==='eng'?'Within':'6小時'}</Typography>
            <Typography>{lang==='eng'?'6 hours':'內報價'}</Typography>
          </>}
        />
        <Tab label={
          <>
            <Typography>{lang==='eng'?'Quoted':'已報價'}</Typography>
            <Typography>{lang==='eng'?'':'等回覆'}</Typography>
          </>}
        />
        <Tab label={
          <>
            <Typography>{lang==='eng'?'Customer':'已被客'}</Typography>
            <Typography>{lang==='eng'?'Interested':'戶選擇'}</Typography>
          </>}
        />
        <Tab label={lang==='eng'?'Deleted':'已刪除'} />
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