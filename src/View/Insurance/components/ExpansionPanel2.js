import React, { useState, useEffect } from 'react';
import {
  Typography,
  TextField,
  Fab,
  Grid,
  MenuItem,
  InputLabel,
  Checkbox,
  Select,
  Divider
} from '@material-ui/core'
import {
  getJobIndustryList,
  getOcupationList,
} from '../../../api/api/driver'
import useStyles from '../../../style/style'

const InputLabelProps = {
  shrink: true,
  classes: {}
}

const ExpansionPanel2 = props => {
  const classes = useStyles()
  const [jobIndustryList, setJobIndustryList] = useState([])
  const [ocupationList, setOcupationList] = useState([])
  useEffect(() => {
    let x = async () => {
      let result = await getOcupationList(props.state[props.index].industry)
      setOcupationList(result.data.driverOcupationList)
    }
    x()
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    let x = async () => {
      let result = await getJobIndustryList()
      setJobIndustryList(result.data.driverJobIndustryList)
    }
    x()
    // eslint-disable-next-line
  }, [])
  useEffect(() => {
    console.log(props)
  }, [props])
  return (
    <div className={classes.ExpansionPanelDetails}>
      <Typography variant="subtitle1">駕駛者{props.index + 1}</Typography>
      <Grid container justify='space-around'>
        <Grid item xs={4} >
          <InputLabel>Year</InputLabel>
          <Select
            className={classes.dateSelect}
            value={props.state[props.index].dateOfBirth.year}
            onChange={(e) => {
              let temp = props.state
              temp[props.index].dateOfBirth.year = e.target.value
              props.setState([...temp])
            }}
          >
            {[...Array(80)].map((e, i) => {
              return <MenuItem key={i + "year"} value={new Date().getFullYear() - 18 - i}>{(new Date().getFullYear() - 18) - i}</MenuItem>
            })}
          </Select>
        </Grid>
        <Grid item xs={4}>
          <InputLabel>Month</InputLabel>
          <Select
            className={classes.dateSelect}
            value={props.state[props.index].dateOfBirth.month}
            onChange={(e) => {
              let temp = props.state
              temp[props.index].dateOfBirth.month = e.target.value
              props.setState([...temp])
            }}
          >
            {[...Array(12)].map((e, i) => {
              return <MenuItem key={i + "month"} value={i + 1}>{i + 1}</MenuItem>
            })}
          </Select>
        </Grid>
        <Grid item xs={4}>
          <InputLabel>Date</InputLabel>
          <Select
            className={classes.dateSelect}
            value={props.state[props.index].dateOfBirth.date}
            onChange={(e) => {
              let temp = props.state
              temp[props.index].dateOfBirth.date = e.target.value
              props.setState([...temp])
            }}
          >
            {[...Array(31)].map((e, i) => {
              return <MenuItem key={i + "month"} value={i + 1}>{i + 1}</MenuItem>
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
        checked={props.state[props.index].isMainDriver}
        value={props.state[props.index].isMainDriver}
        onChange={async () => {
          let temp = props.state
          await temp.forEach((value) => {
            value.isMainDriver = false
          })
          temp[props.index].isMainDriver = true
          props.setState([...temp])
        }}
        color="primary"
      />
      <Typography variant='inherit'>主要車主</Typography>
      <br />

      {props.index !== 0 && (
        <Grid container item xs={12} alignItems="center">
          <Fab className={classes.DriverButton} variant="extended" onClick={props.remove(props.index)}>
            <Typography >移除車主</Typography>
          </Fab>
        </Grid>
      )}

      <Divider />
    </div>
  )
}

export default ExpansionPanel2