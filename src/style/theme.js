import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiAppBar: {
      root: {
        background: '#00f'
      }
    },
    MuiTextField: {
      // Name of the rule
      root: {
        // Some CSS
        margin: '5px 0px',
        borderRadius: '10px',
        backgroundColor: '#FFF',
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        background: '#eee'
      }
    },
    MuiExpansionPanelDetails: {
      root: {
        backgroundColor: '#EEE',
        width: '100%'
      }
    },
    MuiFormLabel: {
      root: {
        fontSize: '1.1rem'
      }
    },
    // MuiInput-underline:hover:not(.Mui-disabled):before
    MuiInput: {
      root: {
        paddingLeft: '20px',
        '&:focus': {
          backgroundColor: 'rgba(0,0,0,0)'
        }
      },
      underline: {
        '&:before':{
          borderBottom: "0px solid rgba(0, 0, 0, 0)",
          transition: 'none',
          transform: 'none'
        },
        "&:after": {
          borderBottom: "0px solid rgba(0, 0, 0, 0)",
          transition: 'none',
          transform: 'none'
        },
        "&&&&:hover:before": {
          borderBottom: "0px solid rgba(0, 0, 0, 0)",
          transition: 'none',
          transform: 'none'
        },
        '&:hover:not($disabled):before': {
          borderBottom: '0 solid rgba(0, 0, 0, 0)',
          transition: 'none',
          transform: 'none'
        },
        '&:hover:not($disabled):after': {
          borderBottom: '0 solid rgba(0, 0, 0, 0)',
          transition: 'none',
          transform: 'none'
        },
      }
    },
    MuiInputBase: {
      root: {
        color: 'rgba(0,0,0,1)'
      }
    },
    MuiInputLabel: {
      shrink: {
        transform: "translate(0, 1.5px) scale(0.75)",
        transformOrigin: "top left",
        left: '10px',
        top: '5px'
      }
    },
    MuiSelect: {
      root: {
        borderRadius: '50px',
        '&$focused': {
          backgroundColor: 'rgba(0,0,0,1)'
        }
      },
      selectMenu: {
        backgroundColor: 'rgba(0,0,0,0)',
        borderRadius: '5px'
      },
      select: {
        '&:focus': {
          backgroundColor: 'rgba(0,0,0,0)'
        }
      },
      
    }
  },
});