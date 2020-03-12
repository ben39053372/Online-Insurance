import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  ExpansionPanelDetails: {
    width: '100%'
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  formControl: {
    width: '95%'
  },
  dateSelect: {
    width: '99%',
    background: '#FFF',
    borderRadius: '5px',
    margin: '0px auto',
    fontSize: '0.75rem'
  },
  DateInputShrink: {
    top: '0px',
    fontSize: '1.2rem'
  },
  mainGrid: {
    marginTop: '10px',
    marginBottom: '10px'
  },
  leftGrid: {
    backgroundColor: '#DDD',
    padding: '10px',
    border: '1px solid #999',
    minHeight: '120px'
  },
  rightGrid: {
    // border: '1px solid #666'
    border: '1px solid #999',
    padding: '10px',
    minHeight: '120px'
  },
  tabGrid: {
    padding: '8px',
    border: '1px solid #EEE'
  },
  rightButton: {
    float: 'right'
  },
  MuiSelect: {
    width: '10px'
  },
  quoteTextField: {
    border: '1px solid #999',
    borderRadius:'10px',
    paddingLeft: '5px',
    input: {
      paddingLeft: '5px'
    }
  },
  NextButton: {
    margin: '10px',
    backgroundColor: '#800',
    color: '#FFF',
    width: '90%',
    fontWeight: 'bold',
    boxShadow: 'None',
    '&:hover':{
      backgroundColor: '#944'
    }
  },
  PrevButton: {
    margin: '10px auto',
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
    color: '#fff',
    width: '100%',
    positon: 'abso',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
  comprehendFab: {
    float: 'right',
    boxShadow: 'None',
    backgroundColor: '#CCC',
    marginBottom: '10px'
  },
  ".MuiTextField-root": {
    backgroundColor: '#000'
  },
  GridText: {
    'word-break': 'break-all'
  },
  listPrimary: {

  },
  listSecondary: {
    float: 'right'
  },
  listInputSecondary: {
    float: 'right',
    width: '50%'
  },
  DialogTitle: {
    '& h2': {
      fontWeight: 'bold',
      fontSize: '1.3rem'
    }
  },
  loginButton: {
    backgroundColor: '#229',
    margin: '5px auto'
  },
  forgotButton: {
    backgroundColor: '#922',
    margin: '20px auto'
    
  },
  loginPageInput: {
    width: '80%',
    margin: '10px auto',
    background:'#EEE'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  requestListDataGrid: {
    background: '#EEE',
    padding: '8px'
  },
  ball: {
    height: '1.2rem',
    width: '1.2rem',
    borderRadius: '50px',
    float: 'left',
    marginTop: '6px',
    marginRight: '10px',
    border: "1px solid #555"
  }

}))

export default useStyles;