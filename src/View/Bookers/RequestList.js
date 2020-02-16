import React, {useState} from 'react'
import { TextField, Tabs, Tab } from '@material-ui/core';

const RequestList = () => {
  const [tabValue, setTabValue] = useState(0)
  return (
    <>
      <TextField fullWidth label="搜尋報價編號或電話車牌" />
      <Tabs
        value={tabValue}
        onChange={(e,value) => setTabValue(value)}
        variant="scrollable"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label="所有" />
        <Tab label="6小時內報價" />
        <Tab label="已報價等回覆" />
        <Tab label="已被客戶選擇" />
        <Tab label="已刪除" />
      </Tabs>

      
    </>
  )
}

export default RequestList