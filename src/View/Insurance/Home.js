import React, { useState, useEffect } from 'react';
import Carousel from '../../component/Carousel';
import {
  TextField,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Grid,
  Fab,
  MenuItem,
  InputLabel,
  Select
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import ReCAPTCHA from 'react-google-recaptcha'
import expansionPanel from './settings/inputList_setting'
import {
  carState,
  ownerState,
  insureTypeState,
  completeState
} from './settings/inputList_setting'
import homeStyle from './style/home'
// import {
//   getRegisterType,
//   getbrandList,
//   getManufactureYearList,
//   getBodyTypeList
// } from '../../api/api/car/car'
const useStyles = makeStyles(theme => homeStyle(theme))

const Home = () => {
  const [expansionPanel_state, setExpansionPanel_state] = useState([])
  useEffect(() => {
    const x = async () => {
      let data = await expansionPanel()
      console.log(data)
      setExpansionPanel_state(data)
    }
    x()
  },[])
  const classes = useStyles();
  const [expanded, setExpanded] = useState(0)
  
  const [driverIndex, setDriverIndex] = useState(1)
  const [totalState, setTotalState] = useState([
    { ...carState },
    { ...ownerState },
    { ...insureTypeState },
    { ...completeState }
  ])

  const next = () => {
    setExpanded(expanded + 1);
  }
  const back = () => {
    setExpanded(expanded - 1);
  }
  const finish = () => { }
  const addDriver = async () => {
    setTotalState(() => {
      totalState.splice(driverIndex + 1, 0, Object.assign({}, ownerState))
      return totalState
    })
    setDriverIndex(driverIndex + 1)
    setExpansionPanel_state(() => {
      expansionPanel_state.splice(1, 0, expansionPanel[1])
      return expansionPanel_state
    })
  }
  const handleChange = (e, expIndex) => {
    let state = [...totalState]
    state[expIndex][e.target.name] = e.target.value
    setTotalState(state)
  }
  const handleDateChange = (date, expIndex, colIndex) => {
    let state = [...totalState]
    state[expIndex][expansionPanel[expIndex].column[colIndex].name].date = date.target.value
    setTotalState(state)
  }
  const handleYearChange = (date, expIndex, colIndex) => {
    let state = [...totalState]
    state[expIndex][expansionPanel[expIndex].column[colIndex].name].year = date.target.value
    setTotalState(state)
  }
  const handleMonthChange = (date, expIndex, colIndex) => {
    console.log(date.target.value, expIndex, colIndex)
    let state = [...totalState]
    state[expIndex][expansionPanel[expIndex].column[colIndex].name].month = date.target.value
    setTotalState(state)
  }
  const onReCAPTCHAChange = (value) => {
    console.log(value)
  }

  return (
    <div>
      <Carousel />
      {expansionPanel_state.map((item, expIndex) => {
        return (
          <ExpansionPanel key={item.name + expIndex} className={classes.expansionPanel} expanded={expanded === expIndex}>
            <ExpansionPanelSummary>
              <Typography>{item.name}{(expIndex >= 1 && expIndex <= driverIndex) ? `(${expIndex})` : ''}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container alignItems="center">
                <Grid item xs={12}>
                  {/* title */}
                  {item.text ? (
                    <Typography>
                      {item.text}
                    </Typography>) : (null)
                  }
                  {/* items */}
                  {item.column.map((col, colIndex) => (
                    // item
                    <div key={'col_key:' + col.label}>

                      {col.type === 'text' && (
                        // text field
                        <TextField
                          className={classes.textField}
                          fullWidth
                          value={(totalState[expIndex][expansionPanel_state[expIndex].column[colIndex].name])}
                          onChange={e => handleChange(e, expIndex)}
                          InputLabelProps={{
                            shrink: true,
                            classes: { root: classes.InputLabel }
                          }}
                          key={'textField:' + col.label}
                          {...col}
                        >
                          {/* select input */}
                          {col.select && col.selectoption.map((opt, index) => (
                            <MenuItem key={opt.value + index} value={opt.id}>
                              {opt.nameCht}
                            </MenuItem>
                          ))}
                        </TextField>
                      )}

                      {col.type === 'date' && (
                        // date picker
                        <div style={{ marginTop: '10px' }}>
                          <InputLabel className={classes.InputLabel}>{col.label}</InputLabel>
                          <Grid container justify='space-around' className={classes.date_Grid}>
                            <Grid item xs={4} >
                              <InputLabel className={classes.InputLabel}>Year</InputLabel>
                              <Select
                                className={classes.date_select}
                                value={(totalState[expIndex][expansionPanel_state[expIndex].column[colIndex].name].year)}
                                onChange={e => handleYearChange(e, expIndex, colIndex)}
                              >
                                {[...Array(80)].map((e, i) => {
                                  return <MenuItem key={i + "year"} value={new Date().getFullYear() - 18 - i + '年'}>{(new Date().getFullYear() - 18) - i}年</MenuItem>
                                })}
                              </Select>
                            </Grid>
                            <Grid item xs={4}>
                              <InputLabel className={classes.InputLabel}>Month</InputLabel>
                              <Select
                                className={classes.date_select}
                                value={(totalState[expIndex][expansionPanel_state[expIndex].column[colIndex].name].month)}
                                onChange={e => handleMonthChange(e, expIndex, colIndex)}
                              >
                                {[...Array(12)].map((e, i) => {
                                  return <MenuItem key={i + "month"} value={i + 1 + '月'}>{i + 1}月</MenuItem>
                                })}
                              </Select>
                            </Grid>
                            <Grid item xs={4}>
                              <InputLabel className={classes.InputLabel}>Date</InputLabel>
                              <Select
                                className={classes.date_select}
                                value={(totalState[expIndex][expansionPanel_state[expIndex].column[colIndex].name].date)}
                                onChange={e => handleDateChange(e, expIndex, colIndex)}
                              >
                                {[...Array(31)].map((e, i) => {
                                  return <MenuItem key={i + "month"} value={i + 1 + '日'}>{i + 1}日</MenuItem>
                                })}
                              </Select>
                            </Grid>
                          </Grid>
                        </div>
                      )}

                      {(col.type === 'checkBox' || col.type === 'button') && (
                        <>
                          <div style={{ height: '40px', marginBottom: '10px' }}>
                            <InputLabel className={classes.InputLabel}>{col.label}</InputLabel>
                            <div style={{ float: 'right' }}>
                              {col.buttons.map(btn => (
                                <Fab size="small" key={btn.label} variant="extended" style={{ marginRight: '16px', paddingLeft: '15px', paddingRight: '15px', paddingTop: '5px', paddingBottom: '5px' }}>{btn.label}</Fab>
                              ))}
                            </div>
                          </div>
                          <br />
                        </>
                      )}
                    </div>
                  ))}
                </Grid>

                {(expanded === expansionPanel_state.length - 1) && (
                  <ReCAPTCHA
                    sitekey="Your client site key"
                    onChange={onReCAPTCHAChange}
                  />
                )}

                {/* button display */}
                <Grid item xs={12} className={classes.button}>

                  {expanded !== 0 && (
                    <Fab variant="extended" onClick={back} style={{ margin: '8px' }}>
                      <Typography>上一步</Typography>
                    </Fab>
                  )}

                  {expanded === expansionPanel_state.length - 1 && (
                    <>
                      <Fab variant="extended" onClick={finish} style={{ margin: '8px' }}>
                        <Typography>完成</Typography>
                      </Fab>
                    </>
                  )}

                  {(expanded >= 1 && expanded <= driverIndex) && (
                    <Fab variant="extended" onClick={addDriver} style={{ margin: '8px' }}>
                      <Typography>新增車主</Typography>
                    </Fab>
                  )}

                  {expanded < expansionPanel_state.length - 1 && (
                    <Fab variant="extended" onClick={next} style={{ margin: '8px' }}>
                      <Typography>下一步</Typography>
                    </Fab>
                  )}

                </Grid>
              </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        )
      })}
    </div>
  )
}

export default Home