import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  ExpansionPanelDetails:{
    width: '100%'
  },
  dateSelect:{
    width: '95%'
  },
  MuiSelect:{
    width: '10px'
  },
  NextButton:{
    margin: '10px',
    backgroundColor: '#800',
    color: '#FFF',
    width: '90%',
    fontWeight: 'bold',
    boxShadow: 'None'
  },
  PrevButton:{
    margin: '10px',
    backgroundColor: '#FFF',
    color: '#000',
    width: '90%',
    border: '1px solid #800',
    fontWeight: 'bold',
    boxShadow: 'None'
  },
  DriverButton: {
    width: '100%',
    margin: '10px',
    backgroundColor: '#CCC',
    boxShadow: 'None'
  },
  header: {
    color: '#FFF',
    width: '100%',
    textDecoration: 'none',
  },
  comprehendFab: {
    float: 'right',
    boxShadow: 'None',
    backgroundColor: '#CCC',
  },
  ".MuiTextField-root":{
    backgroundColor: '#000'
  }
})

export default useStyles;