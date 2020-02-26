import React, { useState, useEffect } from 'react';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  TextField,
  Fab,
  Grid,
  MenuItem,
  InputLabel,
  Checkbox,
  Select
} from '@material-ui/core'
import {
  getJobIndustryList,
  getOcupationList,
} from '../../../api/api/driver'

const InputLabelProps = {
  shrink: true,
  classes: {}
}

const ExpansionPanel2 = props => {
  const [jobIndustryList, setJobIndustryList] = useState([])
  const [ocupationList, setOcupationList] = useState([])
  useEffect(() => {
    let x = async () => {
      let result = await getOcupationList(props.state[props.index].industry)
      setOcupationList(result.driverOcupationList)
    }
    x()
    // eslint-disable-next-line
  }, [props.state[props.index].industry])
  useEffect(() => {
    let x = async () => {
      let result = await getJobIndustryList()
      setJobIndustryList(result.driverJobIndustryList)
    }
    x()
    // eslint-disable-next-line
  }, [])
  return (
    <ExpansionPanel expanded={props.open === props.index + 2}>
      <ExpansionPanelSummary>
        <Typography>駕駛者資料</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div>
          <Grid container justify='space-around'>
            <Grid item xs={4} >
              <InputLabel>Year</InputLabel>
              <Select
                value={props.state[props.index].dateOfBirth.year}
                onChange={(e) => {
                  let temp = props.state
                  temp[props.index].dateOfBirth.year = e.target.value
                  props.setState([...temp])
                }}
              >
                {[...Array(80)].map((e, i) => {
                  return <MenuItem key={i + "year"} value={new Date().getFullYear() - 18 - i + '年'}>{(new Date().getFullYear() - 18) - i}年</MenuItem>
                })}
              </Select>
            </Grid>
            <Grid item xs={4}>
              <InputLabel>Month</InputLabel>
              <Select
                value={props.state[props.index].dateOfBirth.month}
                onChange={(e) => {
                  let temp = props.state
                  temp[props.index].dateOfBirth.month = e.target.value
                  props.setState([...temp])
                }}
              >
                {[...Array(12)].map((e, i) => {
                  return <MenuItem key={i + "month"} value={i + 1 + '月'}>{i + 1}月</MenuItem>
                })}
              </Select>
            </Grid>
            <Grid item xs={4}>
              <InputLabel>Date</InputLabel>
              <Select
                value={props.state[props.index].dateOfBirth.date}
                onChange={(e) => {
                  let temp = props.state
                  temp[props.index].dateOfBirth.date = e.target.value
                  props.setState([...temp])
                }}
              >
                {[...Array(31)].map((e, i) => {
                  return <MenuItem key={i + "month"} value={i + 1 + '日'}>{i + 1}日</MenuItem>
                })}
              </Select>
            </Grid>
          </Grid>
          <TextField
            fullWidth
            select
            value={props.state[props.index].industry}
            onChange={(e) => {
              let temp = props.state
              temp[props.index].industry = e.target.value
              props.setState([...temp])
            }}
            InputLabelProps={InputLabelProps}
            label="所屬行業"
          >
            {jobIndustryList.map((item, i) => (
              <MenuItem key={`option${i}${item.nameEN}`} value={item.id}>
                {item.nameCht}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            fullWidth
            type="number"
            value={props.state[props.index].drivingExperience}
            onChange={(e) => {
              let temp = props.state
              temp[props.index].drivingExperience = e.target.value
              props.setState([...temp])
            }}
            InputLabelProps={InputLabelProps}
            label="駕駛經驗(年)"
          />
          <TextField
            fullWidth
            select
            value={props.state[props.index].position}
            onChange={(e) => {
              let temp = props.state
              temp[props.index].position = e.target.value
              props.setState([...temp])
            }}
            InputLabelProps={InputLabelProps}
            label="職位"
          >
            {ocupationList.map((item, i) => (
              <MenuItem key={`option${i}${item.nameEn}`} value={item.id}>
                {item.nameCht}
              </MenuItem>
            ))}
          </TextField>
          <Checkbox
            value={props.state[props.index].isMainDriver}
            onChange={ e=> {
              let temp = props.state
              temp[props.index].isMainDriver = e.target.checked
              props.setState([...temp])
            }}
            color="primary"
          />
          <Typography variant='inherit'>主要車主</Typography>
          <br/>
          <Fab variant="extended" onClick={props.prev} style={{ margin: '8px' }}>
            <Typography>上一步</Typography>
          </Fab>
          <Fab variant="extended" onClick={props.add} style={{ margin: '8px' }}>
            <Typography>新增車主</Typography>
          </Fab>
          {props.index !== 0 && (
            <Fab variant="extended" onClick={props.remove(props.index)} style={{ margin: '8px' }}>
              <Typography>移除車主</Typography>
            </Fab>
          )}
          <Fab variant="extended" onClick={props.next} style={{ margin: '8px' }}>
            <Typography>下一步</Typography>
          </Fab>
        </div>

      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}

export default ExpansionPanel2