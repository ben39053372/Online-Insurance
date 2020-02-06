import React, { useState } from 'react'
import Carousel from '../component/Carousel'
import {
  TextField,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
  Grid,
  Fab,
  MenuItem,
  InputLabel
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import expansionPanel from './inputList_setting'
import {
  carState,
  ownerState,
  insureTypeState,
  completeState
} from './inputList_setting'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import DateFnUtils from '@date-io/date-fns'

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
  const next = () => {
    setExpanded(expanded + 1);
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
    console.log(totalState[expIndex][expansionPanel[expIndex].column[colIndex].name])
    let state = [...totalState]
    state[expIndex][expansionPanel[expIndex].column[colIndex].name] = date
    setTotalState(state)
  }

  return (
    <div>
      <Carousel />
      {expansionPanel.map((item, expIndex) => {
        return (
          <ExpansionPanel key={item.name} expanded={expanded === expIndex}>
            <ExpansionPanelSummary>
              <Typography>{item.name}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Grid container alignItems="center">
                <Grid item xs={12}>
                  {item.text ? (
                    <Typography>
                      {item.text}
                    </Typography>) : (null)
                  }
                  {item.column.map((col, colIndex) => (
                    <div key={'col_key:' + col.label}>
                      {col.type === 'text' && (
                        // text field
                        < TextField
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
                        <MuiPickersUtilsProvider utils={DateFnUtils}>
                          <KeyboardDatePicker
                            style={{ width: '100%' }}
                            margin="normal"
                            id="date-picker-dialog"
                            label={col.label}
                            format="dd/MM/yyyy"
                            value={(totalState[expIndex][expansionPanel[expIndex].column[colIndex].name])}
                            onChange={date => handleDateChange(date, expIndex, colIndex)}
                            KeyboardButtonProps={{
                              'aria-label': 'change date',
                            }}
                          />
                        </MuiPickersUtilsProvider>
                      )}

                      {(col.type === 'checkBox' || col.type === 'button') && (
                        <>
                          <div style={{height: '40px', marginBottom: '10px'}}>
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