import React, { useState } from 'react'
import Carousel from '../../component/Carousel'
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
import expansionPanel from './components/inputList_setting'
import {
  carState,
  ownerState,
  insureTypeState,
  completeState
} from './components/inputList_setting'
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginBottom: theme.spacing(1)
  },
  gridRoot: {
    flexGrow: 1,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    paddingTop: '10px'
  }
}))

const Home = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(0)
  const [expansionPanel_state, setExpansionPanel_state] = useState(expansionPanel)
  const [driverIndex, setDriverIndex] = useState(1)
  const next = () => {
    setExpanded(expanded + 1);
  }
  const carOwner = ownerState
  const addDriver = async () => {
    setTotalState(() => {
      totalState.splice(driverIndex + 1, 0, Object.assign({}, carOwner))
      return totalState
    })
    setDriverIndex(driverIndex + 1)
    setExpansionPanel_state(() => {
      expansionPanel_state.splice(1, 0, expansionPanel[1])
      return expansionPanel_state
    })
  }
  const back = () => {
    setExpanded(expanded - 1);
  }
  const finish = () => { }
  const [totalState, setTotalState] = useState([
    { ...carState },
    { ...ownerState },
    { ...insureTypeState },
    { ...completeState }
  ])
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

  return (
    <div>
      <Carousel />
      {expansionPanel_state.map((item, expIndex) => {
        return (
          <ExpansionPanel key={item.name + expIndex} expanded={expanded === expIndex}>
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
                          value={(totalState[expIndex][expansionPanel[expIndex].column[colIndex].name])}
                          onChange={e => handleChange(e, expIndex)}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          key={'textField:' + col.label}
                          {...col}
                        >
                          {/* select input */}
                          {col.select && col.selectoption.map((opt, index) => (
                            <MenuItem key={opt.value + index} value={opt.value}>
                              {opt.value}
                            </MenuItem>
                          ))}
                        </TextField>
                      )}

                      {col.type === 'date' && (
                        // date picker
                        <div style={{marginTop: '10px'}}>
                          <InputLabel style={{ fontSize: '12px' }}>{col.label}</InputLabel>
                          <Grid container justify='space-around' style={{ marginBottom: '15px', marginTop: '8px' }} >
                            <Grid item xs={4} >
                              <InputLabel>Year</InputLabel>
                              <Select
                                style={{ width: '90%' }}
                                value={(totalState[expIndex][expansionPanel[expIndex].column[colIndex].name].year)}
                                onChange={e => handleYearChange(e, expIndex, colIndex)}
                              >
                                {[...Array(80)].map((e, i) => {
                                  return <MenuItem key={i + "year"} value={new Date().getFullYear() - 18 - i + '年'}>{(new Date().getFullYear() - 18) - i}年</MenuItem>
                                })}
                              </Select>
                            </Grid>
                            <Grid item xs={4}>
                              <InputLabel>Month</InputLabel>
                              <Select
                                style={{ width: '90%' }}
                                value={(totalState[expIndex][expansionPanel[expIndex].column[colIndex].name].month)}
                                onChange={e => handleMonthChange(e, expIndex, colIndex)}
                              >
                                {[...Array(12)].map((e, i) => {
                                  return <MenuItem key={i + "month"} value={i + 1 + '月'}>{i + 1}月</MenuItem>
                                })}
                              </Select>
                            </Grid>
                            <Grid item xs={4}>
                              <InputLabel>Date</InputLabel>
                              <Select
                                style={{ width: '90%' }}
                                value={(totalState[expIndex][expansionPanel[expIndex].column[colIndex].name].date)}
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
                            <InputLabel style={{ fontSize: '12px' }}>{col.label}</InputLabel>
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

                {/* button display */}
                <Grid item xs={12} className={classes.button}>

                  {expanded !== 0 && (
                    <Fab variant="extended" onClick={back} style={{ margin: '8px' }}>
                      <Typography>上一步</Typography>
                    </Fab>
                  )}

                  {expanded === expansionPanel.length - 1 && (
                    <Fab variant="extended" onClick={finish} style={{ margin: '8px' }}>
                      <Typography>完成</Typography>
                    </Fab>
                  )}

                  {(expanded >= 1 && expanded <= driverIndex) && (
                    <Fab variant="extended" onClick={addDriver} style={{ margin: '8px' }}>
                      <Typography>新增車主</Typography>
                    </Fab>
                  )}

                  {expanded < expansionPanel.length - 1 && (
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