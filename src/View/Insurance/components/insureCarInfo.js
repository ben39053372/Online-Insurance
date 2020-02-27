import React,{useState} from 'react'
import { Paper, Typography, Tabs, Tab } from '@material-ui/core'
import SwipeableViews from 'react-swipeable-views'
import Tab1 from './CarInfoTab'
import Tab2 from './DriverInfoTab'
import Tab3 from './InsureTypeTab'

const CarInfo = props => {
  const [tabSelected, setTabSelected] = useState(0)
  const handleChange = (event, newValue) => {
    setTabSelected(newValue);
  };
  const handleChangeIndex = index => {
    setTabSelected(index);
  };
  return (
    <Paper elevation={0}>
      <Typography align="center" variant="subtitle1">報價車款資料</Typography>
      <Tabs
        value={tabSelected}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="車輛資料" />
        <Tab label="車主資料" />
        <Tab label="投保類別" />
      </Tabs>
      <SwipeableViews index={tabSelected} onChangeIndex={handleChangeIndex}>
        <Tab1 data={props.data} />
        <Tab2 data={props.data} />
        <Tab3 data={props.data} />
      </SwipeableViews>
    </Paper>
  )
}

export default CarInfo