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
    backgroundColor: '#a00',
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
    border: '1px solid #a00',
    fontWeight: 'bold',
    boxShadow: 'None'
  },
  newDriverButton: {
    width: '100%',
    margin: '10px',
    backgroundColor: '#EEE',
    boxShadow: 'None'
  }
})

export default useStyles;