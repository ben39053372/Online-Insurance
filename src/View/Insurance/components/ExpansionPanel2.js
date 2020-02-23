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
  Select
} from '@material-ui/core'
import {
  getRoleList,
  getJobIndustryList,
  getOcupationList,
  getNoClaimDiscountList
} from '../../../api/api/driver/driver'

const InputLabelProps = {
  shrink: true,
  classes: {}
}

const ExpansionPanel2 = props => {
  const [roleList, setRoleList] = useState([])
  const [jobIndustryList, setJobIndustryList] = useState([])
  const [ocupationList, setOcupationList] = useState([])
  const [noClaimDiscountList, setNoClaimDiscountList] = useState([])
  useEffect(() => {
    const x = async () => {
      const result = await getOcupationList(props.state[props.index].industry)
      setOcupationList(result.driverOcupationList)
    }
    x()
  },[props.state[props.index].industry])
  useEffect(() => {
    const x = async () => {
      const result = await Promise.all([
        getRoleList(),
        getJobIndustryList(),
        getNoClaimDiscountList()
      ])
      setRoleList(result[0].driverRoleList)
      setJobIndustryList(result[1].driverJobIndustryList)
      setNoClaimDiscountList(result[2].driverNoClaimDiscountList)
    }
    x()
  }, [])
  
  return (
    <ExpansionPanel expanded={props.open === props.index + 1}>
      <ExpansionPanelSummary>
        <Typography>車主資料</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div>
          <TextField
            fullWidth
            select
            value={props.state[props.index].insuredIdentity}
            onChange={(e) => {
              let temp = props.state
              temp[props.index].insuredIdentity = e.target.value
              props.setState([...temp])
            }}
            InputLabelProps={InputLabelProps}
            label="投保身份"
          >
            {roleList.map((item, i) => (
              <MenuItem key={`option${i}${item.nameEn}`} value={item.id}>
                {item.nameCht}
              </MenuItem>
            ))}
          </TextField>
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
            select
            value={props.state[props.index].discount}
            onChange={(e) => {
              let temp = props.state
              temp[props.index].discount = e.target.value
              props.setState([...temp])
            }}
            InputLabelProps={InputLabelProps}
            label="無索償折扣(NCD)"
          >
            {noClaimDiscountList.map((item, i) => (
              <MenuItem key={`option${i}${item.discount}`} value={item.id}>
                {item.discount}
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
          <TextField
            fullWidth
            type="number"
            value={props.state[props.index].numberOfExistingVehicles}
            onChange={(e) => {
              let temp = props.state
              temp[props.index].numberOfExistingVehicles = e.target.value
              props.setState([...temp])
            }}
            InputLabelProps={InputLabelProps}
            label="現有車輛數目"
          />
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