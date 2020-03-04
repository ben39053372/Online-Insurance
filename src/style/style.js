import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  ExpansionPanelDetails: {
    width: '100%'
  },
  dateSelect: {
    width: '95%',
    paddingLeft: '5px',
    root: {
      padding: '5px'
    }
  },
  mainGrid: {
    marginTop: '10px',
    marginBottom: '10px'
  },
  leftGrid: {
    backgroundColor: '#DDD',
    padding: '10px',
    border: '1px solid #999',
    minHeight: '90px'
  },
  rightButton: {
    float: 'right'
  },
  rightGrid: {
    // border: '1px solid #666'
    border: '1px solid #999',
    padding: '10px',
    minHeight: '90px'
  },
  tabGrid: {
    padding: '8px',
    border: '1px solid #EEE'
  },
  MuiSelect: {
    width: '10px'
  },
  NextButton: {
    margin: '10px',
    backgroundColor: '#800',
    color: '#FFF',
    width: '90%',
    fontWeight: 'bold',
    boxShadow: 'None'
  },
  PrevButton: {
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
  ".MuiTextField-root": {
    backgroundColor: '#000'
  }
})

export default useStyles;